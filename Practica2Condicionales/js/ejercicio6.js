"use strict";

// Ejercicio 6

/* 6. Crear un programa que pida al usuario tres números con un valor del 1 al 10, sacar el promedio de los tres números y mostrar true si el promedio es mayor a 5 caso contrario mostrar false, utilizar el operador ternario. */

let primero = parseInt(prompt("Introduce un numero del 1 al 10"));
let segundo = parseInt(prompt("Introduce otro numero del 1 al 10"));
let tercero = parseInt(prompt("Introduce otro numero del 1 al 10"));

let promedio = (primero + segundo + tercero) / 3 > 5 ? true : false;
alert(promedio);
