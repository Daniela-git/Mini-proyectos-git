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
	// let fecha = e.target.children[0].children[0].value;
	let fecha = e.target.children[0].children[1].value;
	let hora = e.target.children[1].children[1].value;
	// fecha = fecha.split("-");
	// hora = hora.split(":");
	iniciarContador(fecha, hora);
}

function iniciarContador(fecha, hora) {
    // año mes dia = fecha
    // creamos un objeto tipo fecha con la fecha que nos pasa el usuario
    fecha = new Date(fecha)
    let hoy = new Date()
    // con esto pasamos las fechas a millisegundos para poder restarlo
    let rest = fecha.getTime() - hoy.getTime()

    //para saber los dias se divide por 1000 que son los millisegundos, 60 los segundos, 60  los minutos y 24 de los dias
    // para pasar a millisegundos en vez de dividir se multiplica
    dias = Math.floor(rest /1000/60/60/24)
	console.log(diasRestantes);
}


function restaSeg(){
    segundos --
    if(segundos === 0){
        segundos = 60
        restaMin()
    }
}
function restaMin(){
    minutos --
    if(minutos === 0){
        minutos = 60
        restaDias()
    }
}
function restaDias(){
    dias --
    if(dias === 0){
        clearInterval(intervaloSeg)
    }
}

