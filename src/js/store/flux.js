const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			listContact: []
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
					.then(response => response.text())
					.then(result =>{
						// Actualiza el estado usando setStore
						const store = getStore();
						store.listContact(result);
						setStore(store);
						console.log('lista de contactos', store.listContact)
					  })
					.catch(error => console.log('error', error))
			},
			
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
