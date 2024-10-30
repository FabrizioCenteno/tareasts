var paises = [
    {
        id: "peru",
        divisas: {
            dolar: 0.27,
            yuan: 1.89,
            euro: 0.25,
            rand: 4.65
        },
    },
    {
        id: "estadosUnidos",
        divisas: {
            sol: 3.77,
            yuan: 7.12,
            euro: 0.93,
            rand: 17.54
        },
    },
    {
        id: "ue",
        divisas: {
            sol: 4.08,
            yuan: 7.69,
            dolar: 1.08,
            rand: 18.93
        },
    },
    {
        id: "china",
        divisas: {
            sol: 0.53,
            dolar: 0.14,
            euro: 0.13,
            rand: 2.46
        },
    },
    {
        id: "sudafrica",
        divisas: {
            sol: 0.21,
            dolar: 0.057,
            euro: 0.053,
            yuan: 0.41
        },
    },
];
var boton = document.querySelector('button');
var monedaOrigen = document.getElementById('monedaOrigen');
var monedaDestino = document.getElementById('monedaDestino');
var cantidadInput = document.getElementById('cantidad');
var resultado = document.getElementById('resultado');
var errorCantidad = document.getElementById('error-cantidad');
var errorMonedaDestino = document.getElementById('error-monedaDestino');
boton.addEventListener('click', function (e) {
    e.preventDefault();
    if (cantidadInput.value === "" || +cantidadInput.value <= 0) {
        errorCantidad.classList.remove('invisible');
    }
    else {
        errorCantidad.classList.add('invisible');
        var cantidad = +cantidadInput.value;
        var pais = paises.find(function (p) { return p.id === monedaOrigen.value; });
        var valorDivisa = pais.divisas[monedaDestino.value];
        if (valorDivisa === undefined) {
            errorMonedaDestino.classList.remove('invisible');
        }
        else {
            errorMonedaDestino.classList.add('invisible');
            resultado.textContent = "".concat(cantidad * valorDivisa);
        }
    }
});
