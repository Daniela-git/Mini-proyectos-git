// variables
const caja = document.querySelector('.caja')
const inputs = document.querySelectorAll('input')
// event listeners
inputs.forEach((input)=>{
    input.addEventListener('keydown',leerEntrada)
})
console.log(inputs)

// funciones
function leerEntrada(e){
    const id = e.currentTarget.id
    if(id === 'left-top'){
        caja.style.border
    }
    if(id === 'left-bottom'){
        console.log('2')
        
    }
    if(id === 'right-top'){
        console.log('3')
        
    }
    if(id === 'right-bottom'){
        console.log('4')

    }
}