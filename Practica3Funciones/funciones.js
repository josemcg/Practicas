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


// 2. Calculadora básica
// Escribe una función llamada calculadora que acepte tres argumentos: dos
// números y un string que represente una operación aritmética ('+', '-', '*', '/'). La
// función debe realizar la operación y devolver el resultado. Si se proporciona
// una operación no válida, la función debe devolver un mensaje de error.


function calculadora(n1, n2, operador) {
    switch (calculadora){
        case '+':
            return n1 + n2;
            break;
        case '-':
            return n1 - n2;
            break;
        case '*':
            return n1 * n2;
            break;
        case '/':
            return n1 / n2;
            break;
        default:
            console.error("Operacion incorrecta");
            break;
    }
}

// 3. Contar vocales
// Escribe una función llamada contarVocales que acepte un string y devuelva
// la cantidad de vocales (mayúsculas o minúsculas) que contiene. Utiliza un
// bucle for para recorrer el string y un condicional if para verificar si cada
// carácter es una vocal.


function contarVocales(cadena){
    let cantidadVocales = 0;
    const vocales = 'aeuioAEIOU';

    for (let index = 0; index < cadena.length; index++){
        if (vocales.includes(cadena[index])){
            cantidadVocales++;
        }
    }
}