const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			listContact: [],
			contact: "",
			
		},
		actions: {
			// Use getActions to call a function within a fuction
			crearAgenda: () => {
				fetch("https://playground.4geeks.com/apis/fake/contact/", {
					method: 'POST',
					body: JSON.stringify({
						"full_name": "Dave Bradley",
						"email": "dave@gmail.com",
						"agenda_slug": "nelys",
						"address": "47568 NW 34ST, 33434 FL, USA",
						"phone": "7864445566"
					}),
					headers: {
						'Content-Type': 'application/json'
					}})
					.then(response => response.text())
					.then(result => console.log(result))
					.catch(error => console.log('error', error))
			},
			obtenerUsuario: () => {
				const store = getStore();
				 fetch("https://playground.4geeks.com/apis/fake/contact/agenda/nelys", {
					method: 'GET',
					//body: JSON.stringify(),
					headers: {
						'Content-Type': 'application/json'
					}})
					.then(response => response.json())
					.then(result =>{
						// Actualiza el estado usando setStore
						const store = getStore();
						store.listContact = result;
						setStore(store);
						console.log('lista de contactos', store.listContact)
					  })
					.catch(error => console.log('error', error))
			},

		
			guardarInputs: (newContact) => {
				
					fetch("https://playground.4geeks.com/apis/fake/contact/", {
					method: "POST",
					body: JSON.stringify(newContact),
					headers: {
					"Content-Type": "application/json",
					},
				})
					.then (response => {
						response.json()
						console.log(response)})
					.then (response => {setStore({...getStore().contact, response})})
					
				},
				updateContact: (contact) => {
				
					fetch(`https://playground.4geeks.com/apis/fake/contact/${contact.id}`, {
					method: "PUT",
					body: JSON.stringify(contact),
					headers: {
					"Content-Type": "application/json",
					},
				})
					.then (response => {
						response.json()
						console.log(response)})
					.then (response => {setStore({...getStore().contact, response})})
					
				},
				

				eliminarContactos:(contact) => {
					fetch (`https://playground.4geeks.com/apis/fake/contact/${contact}`, {
						method: "DELETE"})
					.then(response => response.json())
					.then(result => {
						setStore({...getStore().listContact, result})
						console.log("contact", contact)
					})
					.catch()
					
				},
			
				
					
			

				
		}
	};
};

export default getState;
