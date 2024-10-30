"use strict";
const inputRed = document.getElementById('rangeRed');
const inputGreen = document.getElementById('rangeGreen');
const inputBlue = document.getElementById('rangeBlue');
const boton = document.getElementById('boton');
const body = document.querySelector('body');
boton.addEventListener('click', function (event) {
    event.preventDefault();
    body.style.backgroundColor = `rgb(${inputRed.value},${inputGreen.value},${inputBlue.value})`;
});
