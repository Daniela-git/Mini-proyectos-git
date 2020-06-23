// variables
// -----------------
let entrada = [];
let operadores = [];
const numeros = document.querySelectorAll(".btn-num");
const operaciones = document.querySelectorAll(".btn-operacion");
const pantalla = document.querySelector(".pantalla");
const btnBorrar = document.querySelector(".borrar");
const btnBorrarTodo = document.querySelector(".borrar-todo");

// evente listeners
// -----------------
numeros.forEach((numero) => {
	numero.addEventListener("click", mostrarNumero);
});

operaciones.forEach((operacion) => {
	operacion.addEventListener("click", borrarPantalla);
});

btnBorrar.addEventListener("click", borrar);
btnBorrarTodo.addEventListener("click", borrarTodo);

// funciones
// -----------------
function mostrarNumero(e) {
	e.preventDefault();
	const valor = e.currentTarget.innerHTML;
	// se toma lo que hay de momento en pantalla para agregarle los nuevos valores
	const ingreso = pantalla.querySelector('.ingreso')
	let numPantalla = ingreso.textContent;
	console.log(numPantalla)
	// miramos si hay más de 8 digitos
	if (numPantalla.length < 8) {
		ingreso.textContent = numPantalla + valor;
	} else {
		const container = document.querySelector(".container");
		const contenido = document.querySelector(".contenido");
		let msj = document.createElement("h3");
		msj.textContent = "maximo 8 digitos";
		container.insertBefore(msj, contenido);
		setTimeout(() => {
			document.querySelector("h3").remove();
		}, 1000);
	}
}

function borrarPantalla(e) {
	e.preventDefault();
	// sacamos lo que han digitado y la operacion,luego borramos lo que hay para que ingresen el nueo numero
	const numero = Number(pantalla.textContent);
	const operacion = e.currentTarget.innerHTML;
	pantalla.textContent = "";
	// guardamos el nuemero y la operacion para poder calcularlo al final
	entrada.push(numero);

	if (operacion === "=") {
		resultado();
	} else {
		operadores.push(operacion);
	}
}

function resultado() {
	let total = entrada[0];
	for (let i = 0; i < operadores.length; i++) {
		switch (operadores[i]) {
			case "+":
				total += entrada[i + 1];

				break;
			case "-":
				total -= entrada[i + 1];

				break;
			case "*":
				total = total * entrada[i + 1];
				break;
			case "/":
				total = total / entrada[i + 1];
				break;

			default:
				total = 0;
				break;
		}
	}
	entrada = [];
	operadores = [];
	mostrarResultado(total);
}
function mostrarResultado(total) {
	pantalla.textContent = total;
}

function borrar(e) {
	e.preventDefault();
	let enPantalla = pantalla.textContent;
	pantalla.textContent = enPantalla.slice(0,enPantalla.length-1);
}

function borrarTodo(e) {
	e.preventDefault();
	pantalla.textContent = "";
}
