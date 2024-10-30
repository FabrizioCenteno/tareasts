var numLetras = document.getElementById('numLetras');
var numPalabras = document.getElementById('numPalabras');
var textArea = document.querySelector('textarea');
textArea === null || textArea === void 0 ? void 0 : textArea.addEventListener('input', function () {
    var texto = textArea.value.trim(); // Eliminar espacios al principio y al final
    var palabras = texto.length > 0 ? texto.split(/\s+/) : []; // Dividir usando expresión regular
    numPalabras.textContent = "".concat(palabras.length); // Actualizar el contador de palabras
    numLetras.textContent = "".concat(texto.replace(/[^a-zA-Z0-9]/g, '').length); // Actualizar el contador de letras
});
