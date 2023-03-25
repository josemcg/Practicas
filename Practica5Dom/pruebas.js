"use strict";

// Realizar una lista desordenada con 5 items.. Mediante JS capturar el 3 items y pintalarlo de color azul

const arrayLis = document.querySelectorAll("li");

arrayLis[2].style.backgroundColor = "blue";

// b) pintar los pares de rojo

for (let i = 0; i < arrayLis.length; i++) {
    if (i % 2 != 0) {
        arrayLis[i].style.backgroundColor = "red";
    }
}

//eventos

// 1) capturamos el elemento HTML

const titulo = document.querySelector('h1');

// 2) Aplicamos el evento que necesitemos

titulo.addEventListener('click', () => {
// 3) Escribimos la accion que queremos
    alert('Hola mundo');
    
}