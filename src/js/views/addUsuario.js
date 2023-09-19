import React, { useContext, useState } from "react";
import "../../styles/addUsuario.css";
import { Context } from "../store/appContext";

export const AddUsuario = () => {
	const { store, actions } = useContext(Context);
	const [contact, setContact] = useState ({ 
		fullName: "",
		email: "",
		phone: "",
		address: "",
		agenda_slug: "nelys",

	})
	return (
        <div className="container">
            <div>
                <h1>Add a new Contact</h1>
            </div>
            
        <form>
            <div class="container mb-3">
                <label className="mb-2">Full Name</label>
                <input
					type="text"
					id="fullName"
					className="form-control"
					placeholder="Enter Full name"
					value={contact.fullName}
					onChange={(e) => setContact(e.target.value)}
					></input>
            </div>
            <div class="container mb-3">
                <label className="mb-2">Email</label>
                <input
					type="text"
					id="email"
					className="form-control"
					placeholder="Enter Email"
					onChange={(e) => setContact(e.target.value)}
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
					onChange={(e) => setContact(e.target.value)}
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
					onChange={(e) => setContact(e.target.value)}
					></input>
            </div>
            <button type="button" class="btn btn-primary" onClick={() => actions.guardarInputs(contact)}>Save</button>
        </form>
    </div>
    );
}
