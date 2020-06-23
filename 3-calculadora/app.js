// variables
// -----------------
let entrada = [];
let operadores = [];
const numeros = document.querySelectorAll(".btn-num");
const operaciones = document.querySelectorAll(".btn-operacion");
const pantalla = document.querySelector(".pantalla");
const ingreso = pantalla.querySelector(".ingreso");
const operador = pantalla.querySelector(".operacion");

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
	let numPantalla = ingreso.textContent;
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

	const numero = Number(ingreso.textContent);
	const operacion = e.currentTarget.innerHTML;
	ingreso.textContent = "";
	operador.textContent = operacion;
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
				total = 'nan';
				break;
		}
	}
	entrada = [];
	operadores = [];
	mostrarResultado(total);
}
function mostrarResultado(total) {
	const resultado = pantalla.querySelector(".resultado");
	resultado.textContent = total;
}

function borrar(e) {
	e.preventDefault();
	let enPantalla = ingreso.textContent;
	ingreso.textContent = enPantalla.slice(0, enPantalla.length - 1);
}

function borrarTodo(e) {
	e.preventDefault();
	const resultado = pantalla.querySelector(".resultado");
	ingreso.textContent = "";
	operador.textContent = "";
	resultado.textContent = "";
}
