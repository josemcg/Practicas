"use strict";

/* 3. Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "café", "rosa"] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no. */

let colores = ["azul", "amarillo", "rojo", "verde", "cafe", "rosa"];

let colorBuscado = prompt("Introduzca un color");

// Con includes --> Devuelve true or false. Es mas facil parece

if (colores.includes(colorBuscado)) {
    console.log(`${colorBuscado} esta en la lista`);
} else {
    console.log(`${colorBuscado} NO esta en la lista`);
}

// Con find. Devuelve el mismo nombre que buscas si lo encuentra. Mirar apuntes si me lio

if (colores.find((colorBuscado) => colorBuscado == colorBuscado)) {
    console.log(`${colorBuscado} esta en la lista`);
} else {
    console.log(`${colorBuscado} NO esta en la lista`);
}
