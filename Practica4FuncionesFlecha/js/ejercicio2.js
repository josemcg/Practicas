"use strict";

// 2. Realiza lo siguiente:
// Hacé una calculadora básica para que calcule automáticamente con 2
// números recibidos como parámetro y una operación. Los parámetros serán 3:
// num1, num2, operación.


let numeroUno = prompt('Escribe un número');
let operacion = prompt('Escribe una operación aritmética ("+", "-", "*", "/")');
let numeroDos = prompt('Escribe otro número');

const calcBasica = (numUno, operacion ,numDos) => eval(numUno + operacion + numDos)
console.log(`${numeroUno} ${operacion} ${numeroDos} = ${calcBasica(numeroUno, operacion, numeroDos)}`);