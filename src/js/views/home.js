import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import cara from "../../img/cara.jpg";
import { Link } from "react-router-dom";




export const Home = () => {
	const {store, actions} = useContext(Context)
	const [refresh, setRefresh] = useState(false);
	useEffect(() => {
		actions.loadSomeData();
	  }, [refresh]);

	const botonParaTraerId = (id) => {
		console.log(`Este es el id del bicho -----> ${id}`)
	};

	const botonParaEliminarContacto = (id) => {
		actions.deleteContact(id);
		setRefresh(true);
	};

	return(
		<>
{store.contact.map(contact => (
	<div className="container border">
		<div className="row gx-1 ">
		<div className="col-lg-2 col-md-12">
  			<img className="avatar my-3 ms-4" src={cara}></img>
  		</div>

  		<div className="col-lg-8 col-md-6">
			<p>{contact.full_name}</p>
			<p>{contact.address}</p>
			<p>{contact.phone}</p>
			<p>{contact.email}</p>
 		 </div>

 		 <div className="col-lg-2 col-md-6">
			<button onClick={() => botonParaEliminarContacto(contact.id)}>Boton pa elimnar un bicho</button>
		<Link to="/EditForm">
			<button>Boton para Editar un bicho</button>
		</Link>
 		 </div>



		</div>
	</div>))}
		</>




	)
};

