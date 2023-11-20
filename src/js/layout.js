import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Form } from "./views/form";
import { Single } from "./views/single";
import { EditForm } from "./views/editForm"
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/form" element={<Form />} />
						<Route path="/editForm" element={<EditForm />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="*" element={<h1>Nada por aqui, te me perdiste!</h1>} />
					</Routes>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
