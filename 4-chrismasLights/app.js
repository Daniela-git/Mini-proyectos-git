// variables
// ---------
const btnInicio = document.querySelector(".btn");
const luces = document.querySelectorAll(".luz");
let intervalo = 0
let time = 1000
// event listeners
// ---------------
btnInicio.addEventListener("click", inicio);
// funciones
// ---------
function inicio(e){
    e.preventDefault()
    if(e.currentTarget.classList.contains('inicio')){
        e.currentTarget.classList.remove('inicio')
        intervalo = setInterval(restaurar, time);
    }else{
        clearInterval(intervalo)
        e.currentTarget.classList.add('inicio')
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

