const numLetras = document.getElementById('numLetras');
const numPalabras = document.getElementById('numPalabras');
const textArea = document.querySelector('textarea');

textArea?.addEventListener('input', function() {
    const texto = textArea.value.trim(); // Eliminar espacios al principio y al final
    const palabras = texto.length > 0 ? texto.split(/\s+/) : []; // Dividir usando expresión regular
    numPalabras!.textContent = `${palabras.length}`; // Actualizar el contador de palabras
    numLetras!.textContent = `${texto.replace(/[^a-zA-Z0-9]/g, '').length}`; // Actualizar el contador de letras
});
