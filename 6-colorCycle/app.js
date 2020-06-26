// variables
// ---------
const inicial = document.querySelector('#inicial')
const incremento = document.querySelector('#incremento')
const btnControl = document.querySelector('.btn-control')
const cajaColor = document.querySelector('.color')
// event listeners
// ---------------

btnControl.addEventListener('click',(e)=>{
    e.preventDefault()
    if (btnControl.classList.contains('inicio')) {
        valorInicial()
    }
})
// funciones
// ---------

function valorInicial(){
    let hexa = inicial.value
    if (hexa.length === 6) {
        // se sacan los numeros en hexadecimal para cada color
        let red = hexa.slice(0,2)
        let green = hexa.slice(2,4)
        let blue = hexa.slice(4,6)
        // se pasan a decimal
        red = parseInt(red,16)
        green = parseInt(green,16)
        blue = parseInt(blue,16)
        cambioColor(red,green,blue)
    }

}

function cambioColor(red,green,blue){
    cajaColor.style.backgroundColor = `rgb(${red},${green},${blue})`
}
