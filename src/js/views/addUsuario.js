import React, { useContext } from "react";
import "../../styles/addUsuario.css";
import { Context } from "../store/appContext";

export const AddUsuario = () => {
	const { store, actions } = useContext(Context);
	return (
        <div className="container">
            <div>
                <h1>Add a new Contact</h1>
            </div>
            
        <form>
            <div class="container mb-3">
                <label className="mb-2">Full Name</label>
                <input type="text" id="FullName" class="form-control" placeholder="Enter Full name"></input>
            </div>
            <div class="container mb-3">
                <label className="mb-2">Email</label>
                <input type="text" id="Email" class="form-control" placeholder="Enter email"></input>
            </div>
            <div class="container mb-3">
                <label className="mb-2">Phone</label>
                <input type="text" id="Phone" class="form-control" placeholder="Enter phone"></input>
            </div>
            <div class="container mb-3">
                <label className="mb-2">Address</label>
                <input type="text" id="Address" class="form-control" placeholder="Enter address"></input>
            </div>
            <button type="button" class="btn btn-primary">Save</button>
        </form>
    </div>
    );
}
