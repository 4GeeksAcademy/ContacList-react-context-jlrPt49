const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contact: [
				{
					name: "Mike Anamendolla",
					direction: "5846 calle chacaito",
					phone: "(888) 266-322",
					email: "mike.ana@example.com",
					id: "1"
				},
				{
					name: "Mike Anamendolla",
					direction: "5846 calle chacaito",
					phone: "(888) 266-322",
					email: "mike.ana@example.com",
					id: "1"
				},
				{
					name: "Mike Anamendolla",
					direction: "5846 calle chacaito",
					phone: "(888) 266-322",
					email: "mike.ana@example.com",
					id: "1"
				},
			
			],

		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
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
				setStore({ contact: contact });
			}
		}
	};
};

export default getState;
