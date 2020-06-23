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
	let html = ''
	inputs.forEach((input) => {

		const id = input.id
		if (id === "left-top") {
			html += `border-top-left-radius:${input.value}px;\n`
		}	
		else if (id === "left-bottom") {
			html += `border-bottom-left-radius:${input.value}px;\n`
		}
		else if (id === "right-top") {
			html += `border-top-right-radius:${input.value}px;\n`
		}
		else if (id === "right-bottom") {
			html += `border-bottom-right-radius:${input.value}px;\n`
		}



		// // texto que se va a copiar
		// console.log(input);
		// // se selecciona lo que se va a copiar
		// input.select();
		// // se copia
		// console.log(document.execCommand("copy"));
	});
	console.log(html)
}

// traer los 4 valores y crear un elemento textarea ponerlo dentro y luego usar el comando de copiar para que copie eso.