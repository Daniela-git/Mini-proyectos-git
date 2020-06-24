// variables
// ---------
const btnInicio = document.querySelector(".btn");
const luces = document.querySelectorAll(".luz");
// event listeners
// ---------------
btnInicio.addEventListener("click", inicio);
// funciones
// ---------
function inicio(e){
    e.preventDefault()
    const intervalo = 1000
    setInterval(restaurar, intervalo);
}

function restaurar() {
    for (let i = 0; i < luces.length; i++) {
        if(i%2 === 0){
            console.log(luces[i])
            luces[i].classList.toggle('verde')
        }else{
            luces[i].classList.toggle('rojo')
        }
        
    }
    
}

