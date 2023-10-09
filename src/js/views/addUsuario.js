import React, { useContext, useState } from "react";
import "../../styles/addUsuario.css";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import user from "../../img/user.png";
import hombre from "../../img/hombre.png";

export const AddUsuario = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();
	const [contact, setContact] = useState({
		full_name: "",
		email: "",
		phone: "",
		address: "",
		agenda_slug: "nelys",

	})
	const [submitted, setSubmitted] = useState(false);
	const enviarFormulario = (event) => {
		event.preventDefault()
		// Verifica si los campos obligatorios están llenos
		if (contact.full_name.trim() === "" || contact.email.trim() === "" || contact.phone.trim() === "" || contact.address.trim() === "") {
			// Muestra una alerta o mensaje de error al usuario indicando que debe llenar todos los campos
			alert("Please fill out all required fields.");
			return; // Sale de la función sin continuar
		  }
		
		  // Si todos los campos están llenos, llama a actions.guardarInputs
		  actions.guardarInputs(contact);
		  setSubmitted(true);
		}
	// Si submitted es true, muestra un mensaje de confirmación y redirige después de un breve retraso
	if (submitted) {
		setTimeout(() => {
		navigate("/"); 
		}, 1000);
		return (
			<div className="container">
			  <div className="alert alert-warning">
			  Your contact has been created. Redirecting to contact list.
			  </div>
			</div>
		  );
		}
	  
	
	return (
		<div className="container">
  <div className="row">
    <div className="col_1 col-12 col-md-6">
      <h1 className="text-center">Add Contact</h1>
      <div className="text-center">
        <img className="mujer" src={hombre} alt="Avatar" />
      </div>
      <div className="botones text-center">
        <Link to="/">
          <button className="btn-Home">
            <i className="fa-solid fa-house"></i> Home
          </button>
        </Link>
      </div>
    </div>

    <div className="lista col-12 col-md-6">
      <div className="formulario">
        <form onSubmit={enviarFormulario}>
          <div className="mb-3">
            <label htmlFor="full_name" className="form-label mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="full_name"
              className="form-control"
              value={contact.full_name}
              onChange={(e) => setContact({ ...contact, full_name: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label mb-2">
              Email
            </label>
            <input
              type="text"
              id="email"
              className="form-control"
              onChange={(e) => setContact({ ...contact, email: e.target.value })}
              value={contact.email}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label mb-2">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              className="form-control"
              value={contact.phone}
              onChange={(e) => setContact({ ...contact, phone: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label mb-2">
              Address
            </label>
            <input
              type="text"
              id="address"
              className="form-control"
              value={contact.address}
              onChange={(e) => setContact({ ...contact, address: e.target.value })}
            />
          </div>
          <button type="submit" className="btnSave">
            <i className="fa-solid fa-floppy-disk"></i> Save
          </button>
        </form>
      </div>
    </div>
  </div>
</div>
	)
}