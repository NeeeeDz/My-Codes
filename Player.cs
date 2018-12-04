using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Player : MonoBehaviour {

	public float velocidade = 0;
	public Rigidbody2D rigbody;


	//Direção de personagem
	bool olhandoDireita = false;


	//Tiro do personagem
	public GameObject bullet;
	public Transform spawnBullet;
	public float shootingRate = 0.3f;
	public float shootCooldown = 0f;
	Animator anim;

	//vida
	public int curHealth;
	public int maxHealth = 3;

	// Use this for initialization
	void Awake () {


		anim = GetComponent<Animator> ();
		rigbody = GetComponent<Rigidbody2D>();

		curHealth = maxHealth;

	}

	// Update is called once per frame
	void FixedUpdate () {


		float h = Input.GetAxis ("Horizontal");
		float v = Input.GetAxis ("Vertical");

		Correr (h,v);

		die ();


	}
	void Update()
	{



		//Tiro\\

		if (shootCooldown > 0) {
			shootCooldown -= Time.deltaTime;
		}
		if (Input.GetKeyDown("space"))
		{
			
			Fire();
			shootCooldown = shootingRate;

		}

	}





	//Corrida do Personagem
	void Correr(float h, float v)

	{
		rigbody.velocity = new Vector2(h * velocidade, rigbody.velocity.y);


		if (h > 0 && !olhandoDireita) {
			Vira();
		}
		else if (h < 0 && olhandoDireita)
		{
			Vira();
		}
		Animar(h, v);
	}



	void Fire()
	{
		if (shootCooldown <= 0) {
			
			if (bullet != null) {

				var cloneBullet = Instantiate(bullet, spawnBullet.position, Quaternion.identity) as GameObject;
				cloneBullet.transform.localScale = this.transform.localScale;
			}
		}

	}

	void Animar(float h, float v)

	{
		//animação do Walking
		bool walking = h != 0f;
		anim.SetBool("isWalking", walking);


	}


	void Vira()
	{
		//animação do personagem virando\\
		olhandoDireita = !olhandoDireita;
		Vector3 escala = transform.transform.localScale;
		escala.x *= -1;
		transform.localScale = escala;
	}

	void die(){
	
		if (curHealth <= 0) {
			
			Application.LoadLevel ("gameover");

		}
	}
}