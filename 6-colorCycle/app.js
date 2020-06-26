// variables
// ---------
const inicial = document.querySelector('#inicial')
const incremento = document.querySelector('#incremento')
// event listeners
// ---------------
inicial.addEventListener('keyup',valorInicial)
// funciones
// ---------

function valorInicial(){
    let hexa = inicial.value
    if (hexa.length === 6) {
        let red = hexa.slice(0,2)
        let green = hexa.slice(2,4)
        let blue = hexa.slice(4,6)
        console.log(red,green,blue)
        
    }

}


