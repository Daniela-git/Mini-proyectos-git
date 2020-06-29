// <input type="date" id="datemin" name="datemin" min="2000-01-02"><br><br>
// este atributo de min puede ser util para las fechas ponerlo por js es lo más logico

// VARIABLES
const datos = document.querySelector("#datos");
const numeros = document.querySelectorAll(".numero");

// intervalos
let intervaloSeg = 0;
let segundos = 0;
let minutos = 0;
let horas = 0;
let dias = 0;
//creo que para cambiar el mes voy a tener que contar cuantos días han pasado dependíendo del mes actual
let meses = 0; // maximo 6 meses

// EVENT LISTENERS
datos.addEventListener("submit", obtenerDatos);

// FUNCIONES
function obtenerDatos(e) {
	e.preventDefault();
	//tomamos lo que necesitamos del form
	let fecha = e.target.children[1].children[1].value;
	let hora = e.target.children[2].children[1].value;
	fecha = fecha.split("-");
	hora = hora.split(":");
	iniciarContador(fecha, hora);
}

function iniciarContador(fecha, hora) {
	// año mes dia = fecha
	console.log(hora);
}
