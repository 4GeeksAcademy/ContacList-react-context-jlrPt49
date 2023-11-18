import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import cara from "../../img/cara.jpg";




export const Home = () => {
	const {store, actions} = useContext(Context)
	useEffect(() => {
		actions.loadSomeData();
	  }, []);



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
			<p>Iconos por aquiiiiii</p>
 		 </div>

		</div>
	</div>))}
		</>




	)
};

