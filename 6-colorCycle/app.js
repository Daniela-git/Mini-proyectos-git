// variables
// ---------
const inicial = document.querySelector("#inicial");
const incremento = document.querySelectorAll(".incremento");
const btnControl = document.querySelector(".btn-control");
const body = document.querySelector('body')

let red = 0;
let green = 0;
let blue = 0;
let intervalo = 0;
let incRed = parseInt(incremento[0].value);
let incGreen = parseInt(incremento[1].value);
let incBlue = parseInt(incremento[2].value);
// patron que verifica que solo tenga los caracteres 0-9 y de a-f
let patron = /([a-f\d])/gi
// event listeners
// ---------------

btnControl.addEventListener("click", (e) => {
	e.preventDefault();
	if (btnControl.classList.contains("inicio")) {
		valorInicial();
	} else {
		restart();
	}
});
// funciones
// ---------

function valorInicial() {
	let hexa = inicial.value;
	if(!patron.test(hexa)){
		const container = document.querySelector('.container')
		const msj = document.createElement('h3')
		msj.classList.add('mensaje')
		msj.textContent = 'solo numeros y letras de la A-F'
		container.appendChild(msj)
		setTimeout(()=>{
			container.querySelector('.mensaje').remove()
		},2000)
	}
	else if (hexa.length === 6) {
		btnControl.classList.remove("inicio");
		btnControl.innerHTML = "Detener";
		// para que no pueda cambiar el incremento ni el color base mientras esta en funcionamiento
		incremento[0].disabled = true;
		incremento[1].disabled = true;
		incremento[2].disabled = true;
		inicial.disabled = true;
		// se sacan los numeros en hexadecimal para cada color
		red = hexa.slice(0, 2);
		green = hexa.slice(2, 4);
		blue = hexa.slice(4, 6);
		// se pasan a decimal
		red = parseInt(red, 16);
		green = parseInt(green, 16);
		blue = parseInt(blue, 16);
		// se pone la caja del color base
		body.style.backgroundColor = `rgb(${red},${green},${blue})`;
		intervalo = setInterval(cambioColor, 250);
	}
}

function cambioColor() {
	red = red + incRed;
	green = green + incGreen;
	blue = blue + incBlue;
	
	if (red >= 255 && green >= 255 && blue >= 255) {
		restart();
	}
	body.style.backgroundColor = `rgb(${red},${green},${blue})`;
}

function restart() {
	clearInterval(intervalo);
	btnControl.innerHTML = "Inicio";
	btnControl.classList.add("inicio");
	incremento[0].disabled = false;
	incremento[1].disabled = false;
	incremento[2].disabled = false;
	inicial.disabled = false;
}
