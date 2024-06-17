const botonGuia=document.getElementById("boton-guia");
const elementosAfterBefore=document.querySelectorAll(".teclas-blancas div span, .teclas-negras div div span");
console.log(elementosAfterBefore);

// Función para mostrar y ocultar los nombres de las teclas
elementosAfterBefore.forEach((elemento) => {
    botonGuia.addEventListener("click", function() {
        elemento.classList.toggle("mostrar-teclas");
    })
});