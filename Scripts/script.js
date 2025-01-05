// Objeto que contiene todas las teclas, con su determinada ruta e id
const infoTeclas = {
    "A" : {id: "c3", rutaSonido: "/Piano/Notas/C3.wav"},
    "S" : {id: "d3", rutaSonido: "/Piano/Notas/D3.wav"},
    "D" : {id: "e3", rutaSonido: "/Piano/Notas/E3.wav"},
    "F" : {id: "f3", rutaSonido: "/Piano/Notas/F3.wav"},
    "G" : {id: "g3", rutaSonido: "/Piano/Notas/G3.wav"},
    "H" : {id: "a3", rutaSonido: "/Piano/Notas/A3.wav"},
    "J" : {id: "b3", rutaSonido: "/Piano/Notas/B3.wav"},
    "K" : {id: "c4", rutaSonido: "/Piano/Notas/C4.wav"},
    "L" : {id: "d4", rutaSonido: "/Piano/Notas/D4.wav"},
    "B" : {id: "e4", rutaSonido: "/Piano/Notas/E4.wav"},
    "N" : {id: "f4", rutaSonido: "/Piano/Notas/F4.wav"},
    "M" : {id: "g4", rutaSonido: "/Piano/Notas/G4.wav"},
    "," : {id: "a4", rutaSonido: "/Piano/Notas/A4.wav"},
    "." : {id: "b4", rutaSonido: "/Piano/Notas/B4.wav"},
    "-" : {id: "c5", rutaSonido: "/Piano/Notas/C5.wav"},
    "Q" : {id: "c#3", rutaSonido: "/Piano/Notas/Csharp3.wav"},
    "W" : {id: "d#3", rutaSonido: "/Piano/Notas/Dsharp3.wav"},
    "E" : {id: "f#3", rutaSonido: "/Piano/Notas/Fsharp3.wav"},
    "R" : {id: "g#3", rutaSonido: "/Piano/Notas/Gsharp3.wav"},
    "T" : {id: "a#3", rutaSonido: "/Piano/Notas/Asharp3.wav"},
    "Y" : {id: "c#4", rutaSonido: "/Piano/Notas/Csharp4.wav"},
    "U" : {id: "d#4", rutaSonido: "/Piano/Notas/Dsharp4.wav"},
    "I" : {id: "f#4", rutaSonido: "/Piano/Notas/Fsharp4.wav"},
    "O" : {id: "g#4", rutaSonido: "/Piano/Notas/Gsharp4.wav"},
    "P" : {id: "a#4", rutaSonido: "/Piano/Notas/Asharp4.wav"}
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


// const botonGrabar=document.getElementById("boton-grabar");
// botonGrabar.addEventListener("click", function(event) {
//     let estado=true;
//     let cadena="";
//     if(estado != false) {
//         cadena+=event.key+" ";

//         botonGrabar.addEventListener("click", function() {
//             estado=false;
//         })
//     }
//     console.log(cadena);
// })

