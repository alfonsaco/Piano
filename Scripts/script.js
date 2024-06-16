// Objeto que contiene todas las teclas, con su determinada ruta e id
const infoTeclas={
    "A" : {id: "c1", rutaSonido: "../Notas/C1.wav"},
    "S" : {id: "d1", rutaSonido: "../Notas/D1.wav"},
    "D" : {id: "e1", rutaSonido: "../Notas/E1.wav"},
    "F" : {id: "f1", rutaSonido: "../Notas/F1.wav"},
    "G" : {id: "g1", rutaSonido: "../Notas/G1.wav"},
    "H" : {id: "a1", rutaSonido: "../Notas/A1.wav"},
    "J" : {id: "b1", rutaSonido: "../Notas/B1.wav"},
    "K" : {id: "c2", rutaSonido: "../Notas/C2.wav"},
    "L" : {id: "d2", rutaSonido: "../Notas/D2.wav"},
    "B" : {id: "e2", rutaSonido: "../Notas/E2.wav"},
    "N" : {id: "f2", rutaSonido: "../Notas/F2.wav"},
    "M" : {id: "g2", rutaSonido: "../Notas/G2.wav"},
    "," : {id: "a2", rutaSonido: "../Notas/A2.wav"},
    "." : {id: "b2", rutaSonido: "../Notas/B2.wav"},
    "-" : {id: "c3", rutaSonido: "../Notas/C3.wav"},
    "Q" : {id: "c#1", rutaSonido: "../Notas/Csharp1.wav"},
    "W" : {id: "d#1", rutaSonido: "../Notas/Dsharp1.wav"},
    "E" : {id: "f#1", rutaSonido: "../Notas/Fsharp1.wav"},
    "R" : {id: "g#1", rutaSonido: "../Notas/Gsharp1.wav"},
    "T" : {id: "a#1", rutaSonido: "../Notas/Asharp1.wav"},
    "Y" : {id: "c#2", rutaSonido: "../Notas/Csharp2.wav"},
    "U" : {id: "d#2", rutaSonido: "../Notas/Dsharp2.wav"},
    "I" : {id: "f#2", rutaSonido: "../Notas/Fsharp2.wav"},
    "O" : {id: "g#2", rutaSonido: "../Notas/Gsharp2.wav"},
    "P" : {id: "a#2", rutaSonido: "../Notas/Asharp2.wav"}
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