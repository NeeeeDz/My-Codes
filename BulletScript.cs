using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BulletScript : MonoBehaviour {


	private Vector2 speed = new Vector2 (8, 0);
	public Rigidbody2D Bullet;
	// Use this for initialization
	void Start () {

		Bullet = GetComponent<Rigidbody2D> ();
		Bullet.velocity = speed * -(this.transform.localScale.x);
		Destroy (gameObject, 2f);

	}
	
	// Update is called once per frame
	void Update () {
		
	}
		
}
