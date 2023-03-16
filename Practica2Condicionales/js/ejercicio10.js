"use strict";

// Ejercicio 10

/* 10. Pedir una calificación de 0 a 10 y mostrar de la siguiente manera:
a. Insuficiente si tiene de 0 a 2
b. Suficiente de 3 a 6
c. Bien de 7 a 9
d. Excelente 10 */

let nota = parseInt(prompt("Introduzca una nota de 0 a 10"));

if (nota >= 0 && nota <= 10) {
    switch (nota) {
        case 0:
            alert("Insuficiente");
            break;
        case 1:
            alert("Insuficiente");
            break;
        case 2:
            alert("Insuficiente");
            break;
        case 3:
            alert("Suficiente");
            break;
        case 4:
            alert("Suficiente");
            break;
        case 5:
            alert("Suficiente");
            break;
        case 6:
            alert("Suficiente");
            break;
        case 7:
            alert("Bien");
            break;
        case 8:
            alert("Bien");
            break;
        case 9:
            alert("Bien");
            break;
        case 10:
            alert("Excelente");
            break;
        default: // Nunca entrara aqui porque el parseInt los convierte en eneteros.
            alert("No introduzcas decimales");
            break;
    }
} else {
    alert("No has introducido una nota entre 0 y 10");
}
