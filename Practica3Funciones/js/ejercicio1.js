"use strict";

// 1. Convertir temperaturas

// Escribe una función llamada convertirTemperatura que convierte grados
// Celsius a Fahrenheit y viceversa. La función debe aceptar dos argumentos: un
// número (la temperatura a convertir) y un string (la unidad de medida, que
// puede ser 'C' para Celsius o 'F' para Fahrenheit). La función debe devolver la
// temperatura convertida en la otra unidad. Utiliza la fórmula de conversión: F =
// (9/5 * C) + 32.

function convertirTemperatura(temperatura, unidad) {
    if (unidad == "C") {
        return (9 / 5) * temperatura + 32;
    } else if (unidad == "F") {
        return ((temperatura - 32) * 5) / 9;
    }
    else {
        return "Unidad incorrrecta";
    }
}

let prueba = convertirTemperatura(10 , "F");

console.log(prueba);