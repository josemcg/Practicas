"use strict";

// Ejercicio 5

/* 5. Genera un array de números aleatorios, ordenarlos de ascendente y mostrarlo por consola. */

let arrayRandom = [];

arrayRandom.push(Math.floor(Math.random() * (100 - 0)));
arrayRandom.push(Math.floor(Math.random() * (100 - 0)));
arrayRandom.push(Math.floor(Math.random() * (100 - 0)));
arrayRandom.push(Math.floor(Math.random() * (100 - 0)));

console.log(arrayRandom);
arrayRandom = arrayRandom.sort((a, b) => a - b); // Si no pongo esto de a y b, lo compara como si fueran cadenas y no se ordenan bien

console.log(arrayRandom);
