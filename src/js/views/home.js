import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	console.log('store',store)
	return (
		<div className="container">
			<div>
			<ul className="list-group">
			{store.listContact.map((contact) => (
						<li key={contact.id}>
							<p>Nombre: {contact.full_name}</p>
							<p>Email: {contact.email}</p>
							<p>Dirección: {contact.address}</p>
							<p>Teléfono: {contact.phone}</p>
						</li>
					))}
			</ul>	
			</div>
			<button className="btn btn-success me-4" onClick={() => actions.obtenerUsuario()}>
				Mostrar lista de Usuarios
			</button>
			<button className="btn btn-success me-4" onClick={() => actions.crearAgenda()}>
				Crear Agenda
			</button>
			<button className="btn btn-success">
				Adicionar Usuario
			</button>
			
			
    </div>
  );
};