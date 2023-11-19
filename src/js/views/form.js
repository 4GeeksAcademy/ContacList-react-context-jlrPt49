import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/form.css";





export const Form = () => {
	const { store, actions } = useContext(Context);
	const [name, setName] = useState("");
	const [mail, setMail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");

	const inputNombre = (e) =>{
		setName(e.target.value)
		actions.cambiarNombre(e.target.value)
	};

	const inputMail = (i) =>{
		setMail(i.target.value)
		actions.cambiarNombre(i.target.value)
	};

	const inputPhone = (o) =>{
		setPhone(o.target.value)
		actions.cambiarNombre(o.target.value)
	};

	const inputAddress = (u) =>{
		setAddress(u.target.value)
		actions.cambiarNombre(u.target.value)
	};



	const handleSave = () =>{
		actions.addContact({
			full_name: name,
			email: mail, 
			phone: phone,
			address: address,
			
		});
		setName("");
		setMail("");
		setPhone("");
		setAddress("");
	}

	return (
		<>
		<h1>Add a new contact</h1>
		<div className="container">
		<label>Full name</label>
		<input onChange={inputNombre} value={name} placeholder="Full name"></input>
		</div>

		<div className="container">
		<label>Email</label>
		<input onChange={inputMail} value={mail} placeholder="Email"></input>
		</div>

		<div className="container">
		<label>Phone</label>
		<input onChange={inputPhone} value={phone} placeholder="Phone"></input>
		</div>

		<div className="container">
		<label>Address</label>
		<input onChange={inputAddress} value={address} placeholder="Address"></input>
		</div>

		<div className="container">
		<button onClick={handleSave}>Save</button>
		</div>

		<div className="container">
		<Link to="/">
			<button>boton pa volver</button>
		</Link>
		</div>

		</>


	);
};
