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
    pantalla.textContent = numPantalla + valor
}
