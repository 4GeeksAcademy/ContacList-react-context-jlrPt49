import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/form.css";

export const Form = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
		<h1>Add a new contact</h1>
		<label>Full name</label>
		<input placeholder="Full name"></input>

		<label>Email</label>
		<input placeholder="Email"></input>

		<label>Phone</label>
		<input placeholder="Phone"></input>

		<label>Address</label>
		<input placeholder="Address"></input>

		<button>Save</button>

		<Link className="addContactButton" to="/">
			<button>boton pa volver</button>
		</Link>

		</>


	);
};
