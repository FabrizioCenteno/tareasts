const numLetras = document.getElementById('numLetras') as HTMLElement;
const numPalabras = document.getElementById('numPalabras') as HTMLElement;
const textArea = document.querySelector('textarea') as HTMLTextAreaElement;

function contarLetras(texto:String):number{
    return texto.split('').filter( caracter => /^[a-zA-ZáéíóúÁÉÍÓÚ]+$/.test(caracter)).length
}

function contarPalabras(texto:string):number{
    return texto.split(' ').filter( palabra =>  /^[¡¿]?[a-zA-ZáéíóúÁÉÍÓÚñÑ]+[.,;!?]?$/.test(palabra)).length
}

textArea?.addEventListener( 'input', function (){
    let contenido = textArea.value
    numLetras.textContent= ''+ contarLetras(contenido)
    numPalabras.textContent = ''+ contarPalabras(contenido)
})