const anchura = (document.getElementById('anchura') as HTMLInputElement);
const altura = (document.getElementById('altura') as HTMLInputElement);
const radioSombra = (document.getElementById('radioSombra') as HTMLInputElement);
const radioPropagacion = (document.getElementById('radioPropagacion') as HTMLInputElement);
const colorSombra = (document.getElementById('colorSombra') as HTMLInputElement);
const opacidad = (document.getElementById('opacidad') as HTMLInputElement);
const colorFondo = (document.getElementById('colorFondo') as HTMLInputElement);
const colorCaja = (document.getElementById('colorCaja') as HTMLInputElement);
const resultado = document.getElementById('resultado') as HTMLElement;
const cajaBoxShadow = document.querySelector('.caja-boxshadow') as HTMLElement
const caja = document.querySelector('.caja') as HTMLElement

function hexToRgba(hex: string): string | null {
    hex = hex.replace(/^#/, '');

    if (hex.length === 3) {
        hex = hex.split('').map((char) => char + char).join('');
    }

    if (hex.length !== 6) {
        return null; 
    }

    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);

    return `rgba(${r},${g},${b},${opacidad.value})`;
}

function generateShadow(){
    const boxShadowValue = `${anchura.value}px ${altura.value}px ${radioSombra.value}px ${radioPropagacion.value}px ${hexToRgba(colorSombra.value)}`;

    resultado!.innerHTML= `
    <pre>
-webkit-box-shadow: ${boxShadowValue}
-moz-box-shadow: ${boxShadowValue}
box-shadow: ${boxShadowValue}
    </pre>`

    caja.style.boxShadow = boxShadowValue; 

}

function cantidadSpan( span:string, input:HTMLInputElement ) {
    document.getElementById(span)!.textContent = input.value
}

anchura.addEventListener('input', function(){
    cantidadSpan('spanAnchura',this)
    generateShadow()
})
altura.addEventListener('input', function () {
    cantidadSpan('spanAltura',this)
    generateShadow()
})
radioSombra.addEventListener('input',function() {
    cantidadSpan('spanRadioSombra',this)
    generateShadow()
} )
radioPropagacion.addEventListener('input', function() {
    cantidadSpan('spanRadioPropagacion',this)
    generateShadow()
})
colorSombra.addEventListener('input', generateShadow)
opacidad.addEventListener('input', function() {
    cantidadSpan('spanOpacidad',this)
    generateShadow()
})

colorFondo.addEventListener('input', function(){
    cajaBoxShadow.style.backgroundColor = colorFondo.value
})

colorCaja.addEventListener('input', function(){
    caja.style.backgroundColor = colorCaja.value
})
