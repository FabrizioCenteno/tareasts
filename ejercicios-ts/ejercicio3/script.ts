const inputRed = document.getElementById('rangeRed') as HTMLInputElement;
const inputGreen = document.getElementById('rangeGreen') as HTMLInputElement;
const inputBlue = document.getElementById('rangeBlue') as HTMLInputElement;
const boton = document.getElementById('boton');
const body = document.querySelector('body')

boton!.addEventListener('click', function(event){
    event.preventDefault()
    body!.style.backgroundColor = `rgb(${inputRed.value},${inputGreen.value},${inputBlue.value})`

})