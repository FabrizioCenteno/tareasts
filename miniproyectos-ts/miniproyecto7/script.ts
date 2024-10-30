type Divisas = {
    sol?: number;
    dolar?: number;
    yuan?: number;
    euro?: number;
    rand?: number;
};

type Pais = {
    id: string;
    divisas: Divisas;
};

const paises:Pais[] = [
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

const boton = document.querySelector('button') as HTMLButtonElement;
const monedaOrigen = document.getElementById('monedaOrigen') as HTMLSelectElement;
const monedaDestino = document.getElementById('monedaDestino') as HTMLSelectElement;
const cantidadInput = document.getElementById('cantidad') as HTMLInputElement;
const resultado = document.getElementById('resultado') as HTMLElement;
const errorCantidad = document.getElementById('error-cantidad') as HTMLElement;
const errorMonedaDestino = document.getElementById('error-monedaDestino') as HTMLElement;


boton.addEventListener('click', function(e:Event){
    e.preventDefault()
    if( cantidadInput.value === "" || +cantidadInput.value <= 0 ){
        errorCantidad.classList.remove('invisible')
    }else {
        errorCantidad.classList.add('invisible')
        const cantidad = +cantidadInput.value
        const pais = paises.find( p => p.id === monedaOrigen.value)
        const valorDivisa = pais!.divisas[monedaDestino.value as keyof Divisas]
        if( valorDivisa === undefined  ){
            errorMonedaDestino.classList.remove('invisible')
        }else{
            errorMonedaDestino.classList.add('invisible')
            resultado.textContent = `${ cantidad * valorDivisa }`
        }
    }
})