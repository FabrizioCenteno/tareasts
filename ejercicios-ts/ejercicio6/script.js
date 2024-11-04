"use strict";
const numLetras = document.getElementById('numLetras');
const numPalabras = document.getElementById('numPalabras');
const textArea = document.querySelector('textarea');
function contarLetras(texto) {
    return texto.split('').filter(caracter => /^[a-zA-ZáéíóúÁÉÍÓÚ]+$/.test(caracter)).length;
}
function contarPalabras(texto) {
    return texto.split(' ').filter(palabra => /^[¡¿]?[a-zA-ZáéíóúÁÉÍÓÚñÑ]+[.,;!?]?$/.test(palabra)).length;
}
textArea === null || textArea === void 0 ? void 0 : textArea.addEventListener('input', function () {
    let contenido = textArea.value;
    numLetras.textContent = '' + contarLetras(contenido);
    numPalabras.textContent = '' + contarPalabras(contenido);
});
