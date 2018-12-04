using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Interaction1 : MonoBehaviour {


	public Rigidbody2D player;


	// Use this for initialization
	void Start () {

		player = GetComponent<Rigidbody2D>();

	}

	// Update is called once per frame
	void Update () {


		if (Input.GetKeyDown ("e")) {



			//OnTriggerEnter2D ();
			InteractWithObject();
		}
	}
	void Awake () {
		player = GetComponent <Rigidbody2D> ();

	}
	public void InteractWithObject()
	{


		if (Vector3.Distance (player.transform.position, GameObject.FindGameObjectWithTag ("porta").transform.position) < 2) {

			Application.LoadLevel ("sala");
			//DestroyObject (GameObject.FindGameObjectWithTag ("Interactables"));


		} else
			return;

	}

}
