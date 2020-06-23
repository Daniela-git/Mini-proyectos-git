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
	let html = "";
	inputs.forEach((input) => {
		// miramos su id para saber a que parte de css corresponde, y poner el valor
		const id = input.id;
		if (id === "left-top") {
			html += `border-top-left-radius:${input.value}px;\n`;
		} else if (id === "left-bottom") {
			html += `border-bottom-left-radius:${input.value}px;\n`;
		} else if (id === "right-top") {
			html += `border-top-right-radius:${input.value}px;\n`;
		} else if (id === "right-bottom") {
			html += `border-bottom-right-radius:${input.value}px;\n`;
		}
	});
	// se crea un elemento textarea para que tenga el contenido a copiar, se agrega al html, se copia y luego se elimina para que no se vea en la pagina
	const textarea = document.createElement("textarea");
	textarea.value = html;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand("copy");
	document.body.removeChild(textarea);
}
