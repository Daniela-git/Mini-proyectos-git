// variables
const numeros = document.querySelectorAll(".btn-num");
const pantalla = document.querySelector('.pantalla')
// evente listeners
numeros.forEach((numero) => {
	numero.addEventListener("click", mostrarNumero);
});
// funciones
function mostrarNumero(e) {
    e.preventDefault();
    const valor = e.currentTarget.innerHTML
    let  numPantalla = pantalla.textContent
    if (numPantalla.length < 8) {
        pantalla.textContent = numPantalla + valor
    }else{
        const container = document.querySelector('.container')
        const contenido = document.querySelector('.contenido')
        let msj = document.createElement('h3')
        msj.textContent = 'maximo 8 digitos'
        container.insertBefore(msj,contenido)
        setTimeout(()=>{
            document.querySelector('h3').remove();
        },1000)
    }
}
