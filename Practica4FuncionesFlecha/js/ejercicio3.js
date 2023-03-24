"use strict";

// 3. Creá 4 funciones que deberán tomar siempre 2 números como parámetros
// (num1 y num2). Sugerimos que se llamen:
// sumar
// multiplicar
// restar
// dividir
// ¿Cómo probarías tu calculadora?


let numUno = 2;
let numDos = 7;

const sumar = (num1, num2) => num1 + num2;
const restar = (num1, num2) => num1 - num2;
const multiplicar = (num1, num2) => num1 * num2;
const dividir = (num1, num2) => num1 / num2;

console.log(`${numUno} + ${numDos} = ${sumar(numUno, numDos)}`);
console.log(`${numUno} - ${numDos} = ${restar(numUno, numDos)}`);
console.log(`${numUno} * ${numDos} = ${multiplicar(numUno, numDos)}`);
console.log(`${numUno} / ${numDos} = ${dividir(numUno, numDos)}`);