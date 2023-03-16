"use strict";

// Ejercicio 6

/* 6. Crear un programa que pida al usuario un array de números y muestre en consola los números impares. */

let arrayNums = [];

arrayNums.push(parseInt(prompt("Introduzca el primer numero")));
arrayNums.push(parseInt(prompt("Introduzca el segundo numero")));
arrayNums.push(parseInt(prompt("Introduzca el tercer numero")));
arrayNums.push(parseInt(prompt("Introduzca el cuarto numero")));

let arrayImpares = [];

if (arrayNums[0] % 2 != 0) {
    arrayImpares.push(arrayNums[0]);
}
if (arrayNums[1] % 2 != 0) {
    arrayImpares.push(arrayNums[1]);
}

if (arrayNums[2] % 2 != 0) {
    arrayImpares.push(arrayNums[2]);
}

if (arrayNums[3] % 2 != 0) {
    arrayImpares.push(arrayNums[3]);
}

console.log(arrayImpares);
