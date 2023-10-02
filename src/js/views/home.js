import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);
	console.log('store Home',store) 
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
							<i class="fa-solid fa-trash" onClick={ () =>{
								actions.eliminarContactos(contact.id)
								actions.obtenerUsuario()}}></i>
							<Link to={`/editContact/${contact.id}`}>
								<i class="fa-solid fa-pen"></i>
							</Link>
													
						</li>
					))}
			</ul>	
			</div>
			<button className="btn btn-success me-4" onClick={() => actions.obtenerUsuario()}>
				Mostrar lista de Usuarios
			</button>
			<Link to="/addUsuario">
					<button className="btn btn-primary">Adicionar usuario</button>
				</Link>
			<button className="btn btn-success me-4" onClick={() => actions.crearAgenda()}>
				Crear Agenda
			</button>
			
    </div>
  );
};