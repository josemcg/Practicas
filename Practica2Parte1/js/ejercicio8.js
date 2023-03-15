"use strict";

//Ejercicio 8

/* 8. Crear un programa que pida al usuario su edad y su género, y le ofrezca un descuento del 10% si es mayor de edad y del 15% si es menor de edad y de género femenino. */

let edad = parseInt(prompt("Cuantos anos tienes?"));
let genero = prompt("Introduzca su género (Masculino o Femenino)");
genero = genero.toLowerCase();

if (edad > 18) {
    alert("Tienes un descuento del 10%");
} else if (edad < 18 && genero == "femenino") {
    alert("Tienes un descuento del 15%");
}
