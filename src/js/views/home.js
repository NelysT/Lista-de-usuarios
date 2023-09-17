import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";



export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container">
			<div>
				<p>{store.listContact}</p>
				
			</div>
			<button className="btn btn-success" onClick={() => actions.obtenerUsuario()}>
				Obtener usuario
			</button>

			
    </div>
  );
};