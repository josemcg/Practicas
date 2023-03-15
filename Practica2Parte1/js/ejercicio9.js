"use strict";

// Ejercicio 9

/* 9. Crear un programa que pida al usuario su nombre y su edad, y determine si es mayor de edad y su nombre contiene más de 5 letras. */

const nombre = prompt("Como te llamas?");
const edad = parseInt(prompt("que edad tienes?"));

if (edad > 18 && nombre.length > 5) {
    alert("Eres mayor de dad y tu nombre tiene mas de 5 letras");
} else {
    alert("No cumples los requisitos");
}
