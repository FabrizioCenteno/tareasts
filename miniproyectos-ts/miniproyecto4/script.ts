const tipoTexto = document.getElementById('tipoTexto') as HTMLSelectElement
const tipoValor = document.getElementById('tipoValor') as HTMLSelectElement
const cantidadInput = document.getElementById('cantidad') as HTMLInputElement
const resultadoDiv = document.getElementById('resultado') as HTMLElement
const boton = document.querySelector('button') 
const erroMensaje = document.querySelector('.error') as HTMLElement

const texto = {
    ipsum: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    italiano: "Non ci sono frutti proibiti nella vita, ma ci sono molti che ci portano a riflessioni profonde. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    frances: "Il n'y a pas de fruits défendus dans la vie, mais il y a beaucoup de réflexions profondes. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
}

function generarPorParrafo(cantidad:number){
    const contenido = texto[ tipoTexto.value as keyof typeof texto ]
    return  Array(cantidad).fill(contenido).join("<br>")

}

function generarPorPalabra(cantidad: number) {
    const contenido = texto[tipoTexto.value as keyof typeof texto];

    const palabras = contenido.split(' ');

    if (cantidad > palabras.length) {
        const repetidas = Array(Math.ceil(cantidad / palabras.length))
            .fill(palabras) 
            .flat() 
            .slice(0, cantidad); 

        return repetidas.join(' ');
    }

    const palabrasCortadas = palabras.slice(0, cantidad);

    return palabrasCortadas.join(' ');
}

function generarPorLetra(cantidad: number) {
    const contenido = texto[tipoTexto.value as keyof typeof texto];

    const letras = contenido.split(''); 

    if (cantidad > letras.length) {
        const repetidas = Array(Math.ceil(cantidad / letras.length))
            .fill(letras) 
            .flat() 
            .slice(0, cantidad); 

        return repetidas.join('');
    }

    const letrasCortadas = letras.slice(0, cantidad);

    return letrasCortadas.join('');
}

boton?.addEventListener('click', function(e){
    e.preventDefault()
    const tipo = tipoValor.value
    const cantidad = +cantidadInput.value
    let resultado:string

    if( tipo === "parrafo" && 1 <= cantidad && cantidad <= 100 ){
        erroMensaje.classList.add('invisible')
        resultado = generarPorParrafo(cantidad)
        resultadoDiv.innerHTML = resultado
    } else if ( tipo === "palabra" && 1 <= cantidad && cantidad <= 5000 ){
        erroMensaje.classList.add('invisible')
        resultado = generarPorPalabra(cantidad)
        resultadoDiv.textContent = resultado
    }else if ( tipo === "letra" && 1 <= cantidad && cantidad <= 20000 ){
        erroMensaje.classList.add('invisible')
        resultado = generarPorLetra(cantidad)
        resultadoDiv.textContent = resultado
    }else{
        resultadoDiv.textContent = ""
        erroMensaje.classList.remove('invisible')
        console.log('error')
    }
})
