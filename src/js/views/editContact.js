import React, { useContext, useState } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";


export const EditContact = () => {
    const { store, actions } = useContext(Context);
   
    const MostrarContactEspecifico = () => {
        fetch (`https://playground.4geeks.com/apis/fake/contact/${contact.id}`)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch()

    };
    
     
    
    return (

      <div>Hola</div>

    )
 
}