const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contact: [
			
			],

		},
		actions: {

			loadSomeData: () => {
				fetch("https://playground.4geeks.com/apis/fake/contact/agenda/agendaJoseRegueiro")
					.then((response) => response.json())
					.then((data) => {
						console.log(data);
						setStore({ contact: data });
					})
					.catch((error) => {
						console.error("Error fetching data:", error);
					});
			},

			addContact(newContact) {
				const requestOptions = {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						"full_name": newContact.full_name,
						"email": newContact.email,
						"agenda_slug": "agendaJoseRegueiro",
						"address":newContact.address,
						"phone":newContact.phone,
					})
				};
				fetch('https://playground.4geeks.com/apis/fake/contact/', requestOptions)
					.then(response => response.json())
					.then(data => console.log(data));
			},

			deleteContact: (id) => {
				const deleteOptions = {
					method: "DELETE",
					headers: { 'Content-Type': 'application/json'  },
				};
				fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, deleteOptions)
					.then(response => response.json())
					.then(data=>console.log(data));
			},

			// editContact: (id) => {
			// 	const editOptions = {
			// 		method: "PUT",
			// 	}
			// }

			
			
		}
	};
};

export default getState;
