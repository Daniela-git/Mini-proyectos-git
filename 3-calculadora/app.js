// variables
let entrada = []
let operadores = []
const numeros = document.querySelectorAll(".btn-num");
const operaciones = document.querySelectorAll(".btn-operacion");
const pantalla = document.querySelector(".pantalla");
// evente listeners
numeros.forEach((numero) => {
	numero.addEventListener("click", mostrarNumero);
});

operaciones.forEach((operacion) => {
	operacion.addEventListener("click", borrarPantalla);
});
// funciones
function mostrarNumero(e) {
	e.preventDefault();
	const valor = e.currentTarget.innerHTML;
	// se toma lo que hay de momento en pantalla para agregarle los nuevos valores
	let numPantalla = pantalla.textContent;
	// miramos si hay más de 8 digitos
	if (numPantalla.length < 8) {
		pantalla.textContent = numPantalla + valor;
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
    const numero = Number(pantalla.textContent)
    const operacion = e.currentTarget.innerHTML;
    pantalla.textContent = ''
    
    // guardamos el nuemero y la operacion para poder calcularlo al final
    entrada.push(numero)

    if (operacion === '=') {
        let total = entrada[0]
        for (let i = 0; i < operadores.length; i++) {
            
            switch (operadores[i]) {
                case '+':
                    total += entrada[i+1] 
                    
                    break;
                case '-':
                    total -= entrada[i+1] 
                    
                    break;
                case '*':
                    total = total * entrada[i+1] 
                    break;
                case '/':
                    total = total / entrada[i+1] 
                    break;
            
                default:
                    total = 0
                    break;
            }
            
        }
        entrada=[]
        operadores=[]
        console.log(total)
    }else{
        operadores.push(operacion)

    }
    


}
