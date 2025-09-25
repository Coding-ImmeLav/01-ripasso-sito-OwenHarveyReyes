console.log("funziono")

// creo la funzione che cambia il colore al body
function cambioColore() {
    // vado a prendermi il body //
    let body = document.getElementById("body");
    // cambio il colore
    sito.style.backgroundColor = "blue";

}

//creo una variabile da cui dipende il click
let a = 0;
// creo la funzione che cambia colore ogni volta che clicco //
function cambiaSempreColore() {
    let sito = document.getElementById("body");
    if (a === 0) {
        sito.style.backgroundColor ="blue";
        a = 1;
    }
    else if (a == 1) {
        sito.style.backgroundColor = "red";
        a = 0;
    }

}