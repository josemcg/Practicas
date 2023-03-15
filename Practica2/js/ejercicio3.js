"use strict";

//Ejercicio 3

/* 3. Crear un programa que genere un número aleatorio entre el 1 y 20, si es par mostrar true seguido el número si es impar mostrar false seguido del número, utilizar el operador ternario. */



let numAleatorio = Math.floor(Math.random() * (20 - 1));

let par = numAleatorio % 2 == 0 ? true : false;

console.log(`el numero ${numAleatorio} es par? ${par}`);
