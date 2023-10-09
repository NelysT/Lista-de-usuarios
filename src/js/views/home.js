import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import user from "../../img/user.png";
import hombre from "../../img/hombre.png";
export const Home = () => {
	const { store, actions } = useContext(Context);
	console.log('store Home', store)

	useEffect(() => {
		actions.obtenerUsuario();
	}, [store.listContact])

	return (
		<div>
			<div className="container">
				<div className="row">
					<div className="col_1 col-12 col-md-6">
						<h1>List Contacts</h1>
						<img className="mujer" src={hombre} />
						<div className="botones d-flex">
							<Link to="/addUsuario">
								<button className="btn btn-light"><i class="fa-solid fa-user"></i> Add Contact</button>
							</Link>
							<button className="btn btn-light" onClick={() => actions.crearAgenda()}><i class="fa-solid fa-book"></i> Add diary</button>
						</div>
					</div>
					<div className="lista col-12 col-md-6">
						<div className="contenedor-agenda">
							{store.listContact.map((contact) => (
								<div className="row-agenda" key={contact.id}>
									<div className="col-2">
										<i className="fa-solid fa-user"></i>
									</div>
									<div className="col-9">
										<p id="texto">{contact.title}</p>
										<p id="texto"><strong>Name: {contact.full_name}</strong></p>
										<p id="texto">Email: {contact.email}</p>
										<p id="texto">Phone: {contact.phone}</p>
										<p id="texto">Address: {contact.address} </p>
									</div>
									<div className="col-1">
										<Link to={`/editContact/${contact.id}`}>
											<i class="fa-solid fa-pen"></i>
										</Link>

										<i className="fa-solid fa-trash"
											onClick={() => {
												const  confirmDelete = window.confirm("Are you sure you want to delete this contact?");
												if (confirmDelete) {
												actions.eliminarContactos(contact.id);
												}
											}}
											></i>
									</div>
								</div>
							))}
						</div>
						{/* <div>
						{store.listContact.map((contact) => (
						<div key={contact.id}>
							<div className="row">
								<div className="datos col-md-7 col-12">
									<h4><strong>{contact.full_name}</strong></h4>
									<h6><i className="fa-solid fa-envelope me-3"></i>{contact.email}</h6>
									<h6><i className="fa-solid fa-phone me-3"></i>{contact.phone}</h6>
									<h6><i className="fa-solid fa-location-dot me-3"></i>{contact.address}</h6>
								</div>
								<div className="botonesEditarEliminar d-flex col-md col-12">
									<div>
										<i class="fa-solid fa-trash" onClick={ () =>{
											actions.eliminarContactos(contact.id)
											}}></i>
										
									</div>
									<div>
										<Link to={`/editContact/${contact.id}`}>
										<i class="fa-solid fa-pen"></i>
									</Link>	
									</div>
										
								</div>
							
							</div>							
						</div>
					))}
				</div>	 */}
					</div>

				</div>
			</div>

		</div>
	);
};