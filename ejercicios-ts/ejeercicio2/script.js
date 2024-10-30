var openBoton = document.querySelector('.open');
var closeBoton = document.querySelector('.close');
var modal = document.querySelector('.modal');
var body = document.querySelector('body');
openBoton.addEventListener('click', function () {
    modal === null || modal === void 0 ? void 0 : modal.classList.remove('invisible');
    body.style.overflow = 'hidden';
});
closeBoton.addEventListener('click', function () {
    modal === null || modal === void 0 ? void 0 : modal.classList.add('invisible');
    body.style.overflow = '';
});
