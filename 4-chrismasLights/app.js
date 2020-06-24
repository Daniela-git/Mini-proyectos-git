// variables
// ---------
const btnInicio = document.querySelector(".btn");
const luces = document.querySelectorAll(".luz");
const tiempo = document.querySelector('#tiempo')
let intervalo = 0
let time = 1000
// event listeners
// ---------------
btnInicio.addEventListener("click", inicio);
tiempo.addEventListener('keyup',cambiarTiempo)
// funciones
// ---------
function inicio(){
    if(btnInicio.classList.contains('inicio')){
        btnInicio.classList.remove('inicio')
        intervalo = setInterval(restaurar, time);
    }else{
        clearInterval(intervalo)
        btnInicio.classList.add('inicio')
    }

}

function restaurar() {
    for (let i = 0; i < luces.length; i++) {
        if(i%2 === 0){
            luces[i].classList.toggle('verde')
        }else{
            luces[i].classList.toggle('rojo')
        }
        
    }
    
}
function cambiarTiempo(e){
    time = e.currentTarget.value * 1000
    clearInterval(intervalo)
    btnInicio.classList.toggle('inicio')
    inicio()
    
}

