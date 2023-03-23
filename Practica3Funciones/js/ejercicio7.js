"use strict";

/* 7. Calcular promedio de calificaciones
Crea una función llamada calcularPromedio que acepte un array de números (calificaciones) y devuelva el promedio. Luego, crea una función mostrarPromedio que muestre en la consola del navegador el promedio de las calificaciones utilizando la función calcularPromedio. Por último, llama a la función mostrarPromedio con un array de calificaciones. */

let arrayCalificaciones = [4, 2, 7, 1, 2, 3, 4, 5, 6, 10];

function calcularPromedio(calificaciones) {
    let media = 0;
    for (let i of calificaciones) {
        media = media + i;
    }
    media = media / calificaciones.length;
    return media;
}

function mostrarPromedio(calificaciones) {
    return console.log(calcularPromedio(calificaciones));
}

mostrarPromedio(arrayCalificaciones);
