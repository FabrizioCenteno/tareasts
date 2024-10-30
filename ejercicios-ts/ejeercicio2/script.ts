const openBoton = document.querySelector('.open')
const closeBoton = document.querySelector('.close')
const modal = document.querySelector('.modal')
const body = document.querySelector('body')

openBoton!.addEventListener('click', function(){
    modal?.classList.remove('invisible')
    body!.style.overflow = 'hidden'
})

closeBoton!.addEventListener('click',function(){
    modal?.classList.add('invisible')
    body!.style.overflow = ''
})