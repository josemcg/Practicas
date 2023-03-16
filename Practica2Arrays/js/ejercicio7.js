"use strict";

//Ejercicio 7

/* 7. Crear un programa que pida al usuario un array de palabras y muestre en consola solamente las palabras que contengan la letra "a". */

let arrayPalabras = [];

arrayPalabras.push(prompt("Introduce la primera palabra"));
arrayPalabras.push(prompt("Introduce la segunda palabra"));
arrayPalabras.push(prompt("Introduce la tercera palabra"));
arrayPalabras.push(prompt("Introduce la cuarta palabra"));

let arrayConA = [];

// Utilizo el include y selecciono cada una de las palabras, no todo el array, para buscar una "a" en cada palabra

if (arrayPalabras[0].includes("a")) {
    arrayConA.push(arrayPalabras[0]);
}

if (arrayPalabras[1].includes("a")) {
    arrayConA.push(arrayPalabras[1]);
}

if (arrayPalabras[2].includes("a")) {
    arrayConA.push(arrayPalabras[2]);
}

if (arrayPalabras[3].includes("a")) {
    arrayConA.push(arrayPalabras[3]);
}

console.log(arrayConA);
