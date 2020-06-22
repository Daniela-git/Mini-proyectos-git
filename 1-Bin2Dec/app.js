// variables

const entrada = document.querySelector("#entrada");
const btnEnviar = document.querySelector(".btn-enviar");
const mensajes = document.querySelector(".mensajes");
const resutlado = document.querySelector(".resultado");
// event listeners

entrada.addEventListener("input", (e) => {
	if (e.inputType == "deleteContentBackward") {
		quitarMensaje();
	} else if (e.data != 0 && e.data != 1 && e.data != null) {
		mostrarMensaje("solo 0s y 1s");
	}
	if (entrada.value.length > 8) {
		console.log("solo 8 digitos");
	}
});

btnEnviar.addEventListener("click", (e) => {
	e.preventDefault();
	// pasamos el numero a
	const numero = entrada.value;
	if (isNaN(parseInt(numero))) {
		mostrarMensaje("solo 0s y 1s");
	} else {
		let binario = 0;
		for (let i = 0; i < numero.length; i++) {
			let digito = numero.slice(i, i + 1);
			const exponente = numero.length - i - 1;
			binario += digito * 2 ** exponente;
		}
		mostrarResultado(binario);
	}
});

// funciones
function mostrarMensaje(msj) {
	mensajes.textContent = msj;
}
function quitarMensaje() {
	mensajes.textContent = "";
}

function mostrarResultado(binario) {
	resutlado.textContent = `Decimal: ${binario}`;
}
