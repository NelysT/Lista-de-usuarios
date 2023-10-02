import React, { useContext, useState } from "react";
import "../../styles/addUsuario.css";
import { Context } from "../store/appContext";

export const AddUsuario = () => {
	const { store, actions } = useContext(Context);
	const [contact, setContact] = useState ({ 
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
            <div>
                <h1>Add a new Contact</h1>
            </div>
            
        <form onSubmit={enviarFormulario}>
            <div class="container mb-3">
                <label className="mb-2">Full Name</label>
                <input
					type="text"
					id="full_name"
					className="form-control"
					placeholder="Enter Full name"
					value={contact.full_name}
					onChange={(e) => setContact({...contact, full_name: e.target.value})}
					></input>
            </div>
            <div class="container mb-3">
                <label className="mb-2">Email</label>
                <input
					type="text"
					id="email"
					className="form-control"
					placeholder="Enter Email"
					onChange={(e) => setContact({...contact, email: e.target.value})}
					value={contact.email}
					></input>
            </div>
            <div class="container mb-3">
                <label className="mb-2">Phone</label>
                <input
					type="text"
					id="phone"
					className="form-control"
					placeholder="Enter Full name"
					value={contact.phone}
					onChange={(e) => setContact({...contact, phone: e.target.value})}
					></input>
            </div>
            <div class="container mb-3">
                <label className="mb-2">Address</label>
                <input
					type="text"
					id="phone"
					className="form-control"
					placeholder="Enter Full name"
					value={contact.address}
					onChange={(e) => setContact({...contact, address: e.target.value})}
					></input>
            </div>
            <button type="submit" class="btn btn-primary" onClick={() => actions.obtenerUsuario()}>Save</button>
        </form>
    </div>
    );
}
