import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';

/*Instituto Tecnlogico Costarricense
 * Proyecto 3 para la clase de algortmos y estructuras de datos 2
 * Profesor Isaac Ramirez
 * Autor: Isa Córdoba Quesada, Ian Hu Pacheco, Ludwin Ramos Briceño
 * Carné: 2021067015, 2021062270, 2021032537
 * Version:1 del proyecto*/

//Render de las paginas web dentro de App
ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
