"use strict";


//3

/* 3. Obteniendo el total.
a. Crea la variable ganancias que contenga un array.
b. Dentro del array coloca 10 números que pueden ser positivos o negativos.
c. Utilizando un ciclo deberás obtener el valor de la suma de todos los números del array. Tal vez necesites crear una variable adicional que te permita guardar la suma. */

//a
let ganancias = [];

//b
ganancias = [-2, 56, 7, 14, -5, 7, -3, 76, -2, 5];

//c
let suma = 0;

for (let i = 0; i < ganancias.length; i++) {
    suma += ganancias[i];
}
console.log(suma);