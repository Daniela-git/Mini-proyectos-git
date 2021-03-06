

// variables
const people = [
	{
		id: 1,
		name: "Leanne Graham",
		address: {
			street: "Kulas Light",
			suite: "Apt. 556",
			city: "Gwenborough",
		},
		phone: "1-770-736-8031 x56442",
	},
	{
		id: 2,
		name: "Ervin Howell",
		address: {
			street: "Victor Plains",
			suite: "Suite 879",
			city: "Wisokyburgh",
		},
		phone: "010-692-6593 x09125",
	},
	{
		id: 3,
		name: "Clementine Bauch",
		address: {
			street: "Douglas Extension",
			suite: "Suite 847",
			city: "McKenziehaven",
		},
		phone: "1-463-123-4447",
	},
	{
		id: 4,
		name: "Patricia Lebsack",
		address: {
			street: "Hoeger Mall",
			suite: "Apt. 692",
			city: "South Elvis",
		},
		phone: "493-170-9623 x156",
	},
	{
		id: 5,
		name: "Chelsey Dietrich",
		address: {
			street: "Skiles Walks",
			suite: "Suite 351",
			city: "Roscoeview",
		},
		phone: "(254)954-1289",
	},
	{
		id: 6,
		name: "Mrs.Dennis Schulist",
		address: {
			street: "Norberto Crossing",
			suite: "Apt. 950",
			city: "South Christy",
		},
		phone: "1-477-935-8478 x6430",
	},
	{
		id: 7,
		name: "Kurtis Weissnat",
		address: {
			street: "Rex Trail",
			suite: "Suite 280",
			city: "Howemouth",
		},
		phone: "210.067.6132",
	},
	{
		id: 8,
		name: "Nicholas Runolfsdottir V",
		address: {
			street: "Ellsworth Summit",
			suite: "Suite 729",
			city: "Aliyaview",
		},
		phone: "586.493.6943 x140",
	},
	{
		id: 9,
		name: "Glenna Reichert",
		address: {
			street: "Dayna Park",
			suite: "Suite 449",
			city: "Bartholomebury",
		},
		phone: "(775)976-6794 x41206",
	},
	{
		id: 10,
		name: "Clementina DuBuque",
		address: {
			street: "Kattie Turnpike",
			suite: "Suite 198",
			city: "Lebsackbury",
		},
		phone: "024-648-3804",
	},
];

const lista = document.querySelector(".lista");
const detalles = document.querySelector(".detalles");
// event listeners
document.addEventListener("DOMContentLoaded", cargarLista);
lista.addEventListener('click',masInfo)

// funciones
function cargarLista() {
	let html = "";
	people.forEach((person) => {
		let fullName = person.name.split(" ");
		html += `<li class='item-lista' id='${person.id}'>${fullName[0]}</li>`;
	});
  lista.innerHTML = html;
}


function masInfo(e){
  const id = Number(e.target.id)
  const persona = people[id-1]
  let html = 
  `<h2> ${persona.name} </h2>
  <p> ${persona.address.street}, ${persona.address.suite}, ${persona.address.city}</p>
  <span> ${persona.phone} </span>
  `
  detalles.innerHTML = html
}