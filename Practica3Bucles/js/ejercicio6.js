"use strict";

/* 6. Dado un array, quitar los elementos no repetidos myArray = [ 200, 40, 400, 40, 40] */

const myArray = [200, 40, 400, 40, 40];
let arrayTemp = [];

for (let i of myArray) {
    if (i == 0) {
        // Si es la primera iteracion, no compruebo si esta el numero.
        arrayTemp.push(i);
        console.log(i);
    } else {
        // Despues de la primera iteracion, compruebo si el numero esta en mi nuevo array
        if (arrayTemp.includes(i)) {
            console.log(`El numero ${i} esta repetido`);
        } else {
            arrayTemp.push(i);
        }
    }
}
console.log(`Array normal: ${myArray}`);
console.log(`Array sin repetepiciones: ${arrayTemp}`);
