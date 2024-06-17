const botonGuia=document.getElementById("boton-guia");
const elementosAfterBefore=document.querySelectorAll(".teclas-blancas div span, .teclas-negras div div");
console.log(elementosAfterBefore);

botonGuia.addEventListener("click", function()  {
    elementosAfterBefore.forEach((elemento)=> {
        elemento.classList.toggle("mostrar-teclas");
    })
});