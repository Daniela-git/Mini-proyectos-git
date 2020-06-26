// variables
// ---------
const inicial = document.querySelector("#inicial");
const incremento = document.querySelector(".incremento");
const btnControl = document.querySelector(".btn-control");
const cajaColor = document.querySelector(".color");

let red = 0;
let green = 0;
let blue = 0;
let intervalo = 0;
let inc = parseInt(incremento.value);
// event listeners
// ---------------

btnControl.addEventListener("click", (e) => {
	e.preventDefault();
	if (btnControl.classList.contains("inicio")) {
		btnControl.classList.remove("inicio");
		btnControl.innerHTML = "Detener";
		// para que no pueda cambiar el incremento ni el color base mientras esta en funcionamiento
        incremento.disabled = true;
        inicial.disabled = true;
        // empieza la diversion
		valorInicial();
	} else {
		clearInterval(intervalo);
		btnControl.innerHTML = "Inicio";
        btnControl.classList.add("inicio");
		incremento.disabled = false;
		inicial.disabled = false;
        
	}
});
// funciones
// ---------

function valorInicial() {
	let hexa = inicial.value;
	if (hexa.length === 6) {
		// se sacan los numeros en hexadecimal para cada color
		red = hexa.slice(0, 2);
		green = hexa.slice(2, 4);
		blue = hexa.slice(4, 6);
		// se pasan a decimal
		red = parseInt(red, 16);
		green = parseInt(green, 16);
		blue = parseInt(blue, 16);
		// se pone la caja del color base
		cajaColor.style.backgroundColor = `rgb(${red},${green},${blue})`;
		intervalo = setInterval(cambioColor, 500);
	}
}

function cambioColor() {
	red = red + inc;
	green = green + inc;
	blue = blue + inc;
	cajaColor.style.backgroundColor = `rgb(${red},${green},${blue})`;
}
