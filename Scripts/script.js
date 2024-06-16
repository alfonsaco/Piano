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
};

function reproducirSonido(rutaSonido) {
    const nota=new Audio(rutaSonido);
    nota.play();
}

window.addEventListener("keydown", function(event) {
    const teclaAUsar=infoTeclas[event.key.toUpperCase()];
    if(teclaAUsar != undefined) {
        const tecla=document.getElementById(teclaAUsar.id);
        if(tecla) {
            tecla.classList.add("blancas-activas");
            reproducirSonido(teclaAUsar.rutaSonido);
        }
    }
});

window.addEventListener("keyup", function(event) {
    const teclaAUsar=infoTeclas[event.key.toUpperCase()];
    if(teclaAUsar) {
        const tecla=document.getElementById(teclaAUsar.id);
        if(tecla) {
            tecla.classList.remove("blancas-activas");
        }
    }
});