import React, { useContext, useState, useEffect } from "react";

import { Context } from "../store/appContext";
import { useParams } from "react-router";


export const EditContact = () => {
    const { store, actions } = useContext(Context);
    const params = useParams()
    const [contact, setContact] = useState ({
      full_name: "",
      email: "",
      phone: "",
      address: "",
      agenda_slug: "nelys",
    });
    const enviarFormulario = (event) => {
      event.preventDefault()
      actions.updateContact(contact)
     
    }

    useEffect(()=>{ 
        fetch (`https://playground.4geeks.com/apis/fake/contact/${params.id}`)
        .then(response => response.json())
        .then(result => {
          setContact (result)
          console.log("contact",contact)
          console.log("result", result)
          })
        
        .catch();

      },[])

      return (
        <div className="container">
            <div>
                <h1>Editar contacto</h1>
            </div>
            
        <form onSubmit={enviarFormulario}>
            <div class="container mb-3">
                <label className="mb-2">Fullname</label>
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
   
     
    
//     return (

//       <div>
//       {/* Verifica si infContact existe antes de intentar acceder a sus propiedades */}
//       {infContact && (
//         <div>
//           <h1>Información del usuario</h1>
//           <p>ID: {infContact.id}</p>
//           <p>Nombre: {infContact.name}</p>
//           {/* Agrega más propiedades aquí */}
//         </div>
//       )}
//     </div>
//   );
// };