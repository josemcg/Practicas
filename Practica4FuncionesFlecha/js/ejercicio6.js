"use strict";

/* 6. Crea una función que genere número entero aleatorio entre min y max, que serán pasados como parámetros. Por defecto min = 1 y max = 100 */

const numeroAleatorio = (min = 1, max = 100) => {
    const numero = Math.floor(Math.random() * (max - min + 1)) + min;
    
    return numero;
}

console.log(numeroAleatorio()); // Genera un número aleatorio entre 1 y 100
console.log(numeroAleatorio(10, 20)); // Genera un número aleatorio entre 10 y 20