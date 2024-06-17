// Objeto que contiene todas las teclas, con su determinada ruta e id
const infoTeclas={
    "A" : {id: "c3", rutaSonido: "../Notas/C3.wav"},
    "S" : {id: "d3", rutaSonido: "../Notas/D3.wav"},
    "D" : {id: "e3", rutaSonido: "../Notas/E3.wav"},
    "F" : {id: "f3", rutaSonido: "../Notas/F3.wav"},
    "G" : {id: "g3", rutaSonido: "../Notas/G3.wav"},
    "H" : {id: "a3", rutaSonido: "../Notas/A3.wav"},
    "J" : {id: "b3", rutaSonido: "../Notas/B3.wav"},
    "K" : {id: "c4", rutaSonido: "../Notas/C4.wav"},
    "L" : {id: "d4", rutaSonido: "../Notas/D4.wav"},
    "B" : {id: "e4", rutaSonido: "../Notas/E4.wav"},
    "N" : {id: "f4", rutaSonido: "../Notas/F4.wav"},
    "M" : {id: "g4", rutaSonido: "../Notas/G4.wav"},
    "," : {id: "a4", rutaSonido: "../Notas/A4.wav"},
    "." : {id: "b4", rutaSonido: "../Notas/B4.wav"},
    "-" : {id: "c5", rutaSonido: "../Notas/C5.wav"},
    "Q" : {id: "c#3", rutaSonido: "../Notas/Csharp3.wav"},
    "W" : {id: "d#3", rutaSonido: "../Notas/Dsharp3.wav"},
    "E" : {id: "f#3", rutaSonido: "../Notas/Fsharp3.wav"},
    "R" : {id: "g#3", rutaSonido: "../Notas/Gsharp3.wav"},
    "T" : {id: "a#3", rutaSonido: "../Notas/Asharp3.wav"},
    "Y" : {id: "c#4", rutaSonido: "../Notas/Csharp4.wav"},
    "U" : {id: "d#4", rutaSonido: "../Notas/Dsharp4.wav"},
    "I" : {id: "f#4", rutaSonido: "../Notas/Fsharp4.wav"},
    "O" : {id: "g#4", rutaSonido: "../Notas/Gsharp4.wav"},
    "P" : {id: "a#4", rutaSonido: "../Notas/Asharp4.wav"}
};

// Función para ejecutar el sonido
function reproducirSonido(rutaSonido) {
    const nota=new Audio(rutaSonido);
    nota.play();
}

// Función para desplegar su animación cuando está acitvo
window.addEventListener("keydown", function(event) {
    const teclaAUsar=infoTeclas[event.key.toUpperCase()];
    if(teclaAUsar != undefined) {
        const tecla=document.getElementById(teclaAUsar.id);
        if(tecla) {
            if(tecla.id.includes("#")) {
                tecla.classList.add("negras-activas");
            } else {
                tecla.classList.add("blancas-activas");
            }
            reproducirSonido(teclaAUsar.rutaSonido);
        }
    }
});
window.addEventListener("keyup", function(event) {
    const teclaAUsar=infoTeclas[event.key.toUpperCase()];
    if(teclaAUsar) {
        const tecla=document.getElementById(teclaAUsar.id);
        if(tecla) {
            if(tecla.id.includes("#")) {
                tecla.classList.remove("negras-activas");
            } else {
                tecla.classList.remove("blancas-activas");
            }
        }
    }
});

// Función para activar el audio al hacer click
const teclasBlancas=document.querySelectorAll(".teclas-blancas > div");
teclasBlancas.forEach((tecla)=> {
    tecla.addEventListener("click", function() {
        reproducirSonido(tecla.getAttribute("data-audio"));
    })
});

const teclasNegras=document.querySelectorAll(".teclas-negras > div div");
teclasNegras.forEach((tecla)=> {
    tecla.addEventListener("click", function() {
        reproducirSonido(tecla.getAttribute("data-audio"));
    })
});