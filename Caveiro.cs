using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Caveiro : MonoBehaviour {


	public Rigidbody2D enemy;
	public float velocidade = 0;
	private Player player;


	void Start () {
		enemy = GetComponent<Rigidbody2D> ();
		player = GameObject.FindGameObjectWithTag ("Player").GetComponent<Player>();
	}


	// Update is called once per frame
	void Update () {

		transform.Translate(Vector2.right * velocidade * Time.deltaTime);

	}


	void OnTriggerEnter2D (Collider2D collision)
	{
		if (collision.tag == "Player") {

			Damage();
			Destroy(gameObject);
		}
		if (collision.tag == "Bullet") 
		{
			destruirBullet() ;
		}
	}

	private void Damage()
	{

		player.curHealth--;

		DestroyObject (GameObject.FindGameObjectWithTag ("Enemy"));

	}
	void destruirBullet(){

		DestroyObject (GameObject.FindGameObjectWithTag ("Bullet"));
		DestroyObject (GameObject.FindGameObjectWithTag ("Enemy"));

	}	 



}
