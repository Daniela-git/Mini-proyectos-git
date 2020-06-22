// variables

const entrada = document.querySelector("#entrada");
const btnEnviar = document.querySelector(".btn-enviar");
// event listeners

entrada.addEventListener("input", (e) => {
	if (e.data !== 0 || e.data !== 1) {
		console.log("solo 0 y 1");
		// mensaje()
	}
});

btnEnviar.addEventListener("click", (e) => {
    e.preventDefault();
    
});

// funciones
function mensaje() {
	const msj = "Ingresar solo 0s y 1s";
	let nodo = document.createElement("h3");
	nodo.textContent = msj;
	entrada.insertBefore(nodo, entrada);
}
