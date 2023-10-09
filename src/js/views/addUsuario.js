import React, { useContext, useState } from "react";
import "../../styles/addUsuario.css";

import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import user from "../../img/user.png";
import hombre from "../../img/hombre.png";

export const AddUsuario = () => {
	const { store, actions } = useContext(Context);
	const [contact, setContact] = useState({
		full_name: "",
		email: "",
		phone: "",
		address: "",
		agenda_slug: "nelys",

	})
	const enviarFormulario = (event) => {
		event.preventDefault()
		actions.guardarInputs(contact)
		setContact({
			full_name: "",
			email: "",
			phone: "",
			address: "",
			agenda_slug: "nelys",
		});
	}
	return (
		<div className="container">
			<div className="row_grande d-flex">
				<div className="col_1 col-6">
					<h1>Adicionar Usuario</h1>
					<img className="mujer" src={hombre} />
					<div className="botones d-flex">
						<Link to="/">
							<button className="btn-Home"><i class="fa-solid fa-house"></i> Home </button>
						</Link>
						
					</div>
				</div>
			
			<div className="lista col-6">
			<div className="formulario">
				<form onSubmit={enviarFormulario}>
					<div class="container mb-3">
						<label className="mb-2">Full Name</label>
						<input
							type="text"
							id="full_name"
							className="form-control"
							
							value={contact.full_name}
							onChange={(e) => setContact({ ...contact, full_name: e.target.value })}
						></input>
					</div>
					<div class="container mb-3">
						<label className="mb-2">Email</label>
						<input
							type="text"
							id="email"
							className="form-control"
							
							onChange={(e) => setContact({ ...contact, email: e.target.value })}
							value={contact.email}
						></input>
					</div>
					<div class="container mb-3">
						<label className="mb-2">Phone</label>
						<input
							type="text"
							id="phone"
							className="form-control"
							
							value={contact.phone}
							onChange={(e) => setContact({ ...contact, phone: e.target.value })}
						></input>
					</div>
					<div class="container mb-3">
						<label className="mb-2">Address</label>
						<input
							type="text"
							id="phone"
							className="form-control"
							
							value={contact.address}
							onChange={(e) => setContact({ ...contact, address: e.target.value })}
						></input>
					</div>
					<button type="submit" className="btnSave" onClick={() => actions.obtenerUsuario()}><i class="fa-solid fa-floppy-disk"></i> Guardar</button>
				</form>
			</div>
			</div>
			</div>
		</div>
	

	);
}
