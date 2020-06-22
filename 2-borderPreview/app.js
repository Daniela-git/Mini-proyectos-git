// variables
const caja = document.querySelector(".caja");
const inputs = document.querySelectorAll("input");
const btnCopy = document.querySelector(".btn-copy");
// event listeners
inputs.forEach((input) => {
	input.addEventListener("keyup", leerEntrada);
});
btnCopy.addEventListener("click", copiar);

// funciones
function leerEntrada(e) {
	const input = e.currentTarget;
	const id = input.id;
	if (id === "left-top") {
		caja.style.borderTopLeftRadius = `${input.value}px`;
	}
	if (id === "left-bottom") {
		caja.style.borderBottomLeftRadius = `${input.value}px`;
	}
	if (id === "right-top") {
		caja.style.borderTopRightRadius = `${input.value}px`;
	}
	if (id === "right-bottom") {
		caja.style.borderBottomRightRadius = `${input.value}px`;
	}
}

function copiar(e) {
	e.preventDefault();
	let copia = "";
	inputs.forEach((input) => {
		// texto que se va a copiar
		console.log(input);
		// se selecciona lo que se va a copiar
		input.select();
		// se copia
		console.log(document.execCommand("copy"));
	});
	console.log(copia);
}

