"use strict";

// Ejercicio 8

/* 8. Crear dos arrays,cada uno con 5 números diferentes,generar un nuevo array con la combinación de ambos arrays. (Ejemplo: [1,2,3] + [1,2,4] = [1,1,2,2,3,4]) */

const arrayPrimero = [0, 2, 4, 6, 8];
const arraySegundo = [1, 3, 5, 7, 9];

let arrayMerged = [...arrayPrimero, ...arraySegundo];

console.log(arrayMerged);

let arrayMezclado = [];

arrayMezclado.push(arrayPrimero[0]);
arrayMezclado.push(arraySegundo[0]);
arrayMezclado.push(arrayPrimero[1]);
arrayMezclado.push(arraySegundo[1]);
arrayMezclado.push(arrayPrimero[2]);
arrayMezclado.push(arraySegundo[2]);
arrayMezclado.push(arrayPrimero[3]);
arrayMezclado.push(arraySegundo[3]);
arrayMezclado.push(arrayPrimero[4]);
arrayMezclado.push(arraySegundo[4]);

console.log(arrayMezclado);
