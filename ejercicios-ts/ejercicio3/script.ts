const inputRed = document.getElementById('rangeRed') as HTMLInputElement;
const inputGreen = document.getElementById('rangeGreen') as HTMLInputElement;
const inputBlue = document.getElementById('rangeBlue') as HTMLInputElement;
const boton = document.getElementById('boton');
const body = document.querySelector('body')
const div = document.querySelector('div')

function rgbToHex( red:number,green:number,blue:number ):string  {
    const toHex = ( valor:number ):string => {
        const numeroHex = valor.toString(16)
        return numeroHex.length === 1 ? '0'+numeroHex : numeroHex
    }

    return '#'+toHex(red)+toHex(green)+toHex(blue)
}

function cambiarBackground(){
const rojo = parseInt(inputRed.value)
const verde = parseInt(inputGreen.value)
const azul = parseInt(inputBlue.value)
const texto = `rgb(${rojo},${verde},${azul})`
body!.style.backgroundColor = ''+texto
    div!.innerHTML = ` 
<pre>
    ${texto}
    ${rgbToHex(rojo,verde,azul)}
</pre>`
}

cambiarBackground()

inputRed.addEventListener('input', cambiarBackground)
inputGreen.addEventListener('input', cambiarBackground)
inputBlue.addEventListener('input', cambiarBackground)