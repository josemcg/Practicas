"use strict";

//Ejercicio 9

/* 9. Crear un programa que pida al usuario un array de palabras y muestre en consola un nuevo array que contenga las palabras ordenadas alfabéticamente. */

arrayPalabras.push(prompt("Introduce la primera palabra"));
arrayPalabras.push(prompt("Introduce la segunda palabra"));
arrayPalabras.push(prompt("Introduce la tercera palabra"));
arrayPalabras.push(prompt("Introduce la cuarta palabra"));

let arrayOrdenado = [];

arrayOrdenado = arrayPalabras.sort();

console.log(arrayOrdenado);
