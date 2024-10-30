var anchura = document.getElementById('anchura');
var altura = document.getElementById('altura');
var radioSombra = document.getElementById('radioSombra');
var radioPropagacion = document.getElementById('radioPropagacion');
var colorSombra = document.getElementById('colorSombra');
var opacidad = document.getElementById('opacidad');
var colorFondo = document.getElementById('colorFondo');
var colorCaja = document.getElementById('colorCaja');
var resultado = document.getElementById('resultado');
var cajaBoxShadow = document.querySelector('.caja-boxshadow');
var caja = document.querySelector('.caja');
function hexToRgba(hex) {
    // Eliminar el símbolo '#' si está presente
    hex = hex.replace(/^#/, '');
    // Verifica si el color es válido
    if (hex.length === 3) {
        // Convierte de 3 a 6 caracteres (ejemplo: "f00" a "ff0000")
        hex = hex.split('').map(function (char) { return char + char; }).join('');
    }
    if (hex.length !== 6) {
        return null; // Retorna null si el color no es válido
    }
    // Convierte hexadecimal a RGB
    var r = parseInt(hex.slice(0, 2), 16);
    var g = parseInt(hex.slice(2, 4), 16);
    var b = parseInt(hex.slice(4, 6), 16);
    return "rgba(".concat(r, ",").concat(g, ",").concat(b, ",").concat(opacidad.value, ")"); // Devuelve el objeto RGBA
}
function generateShadow() {
    var boxShadowValue = "".concat(anchura.value, "px ").concat(altura.value, "px ").concat(radioSombra.value, "px ").concat(radioPropagacion.value, "px ").concat(hexToRgba(colorSombra.value));
    resultado.innerHTML = "\n    <pre>\n-webkit-box-shadow: ".concat(boxShadowValue, "\n-moz-box-shadow: ").concat(boxShadowValue, "\nbox-shadow: ").concat(boxShadowValue, "\n    </pre>");
    caja.style.boxShadow = boxShadowValue;
}
anchura.addEventListener('input', generateShadow);
altura.addEventListener('input', generateShadow);
radioSombra.addEventListener('input', generateShadow);
radioPropagacion.addEventListener('input', generateShadow);
colorSombra.addEventListener('input', generateShadow);
opacidad.addEventListener('input', generateShadow);
colorFondo.addEventListener('input', function () {
    cajaBoxShadow.style.backgroundColor = colorFondo.value;
});
colorCaja.addEventListener('input', function () {
    caja.style.backgroundColor = colorCaja.value;
});
