"use strict";

//Ejercicio 4

/* 4. Crear un programa que pida al usuario 5 números y los guarde en un array. Luego, mostrar en consola el array completo y la suma de los números. */

let arrayNum = [];

arrayNum.push(parseInt(prompt("Introduzca el primer numero")));
arrayNum.push(parseInt(prompt("Introduzca el segundo numero")));
arrayNum.push(parseInt(prompt("Introduzca el tercero numero")));
arrayNum.push(parseInt(prompt("Introduzca el cuarto numero")));
arrayNum.push(parseInt(prompt("Introduzca el quinto numero")));

console.log(arrayNum);

console.log(
    arrayNum[0] + arrayNum[1] + arrayNum[2] + arrayNum[3] + arrayNum[4]
);

//Recordar que el usuario por prompt introduce string, si quiero numeros tengo que usar parseInt
