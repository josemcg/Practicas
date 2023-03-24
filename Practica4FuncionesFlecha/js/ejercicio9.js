"use strict";

/* 9. Realizar un programa que pida la introducción de un número, y que mediante una función, averigüe si ese número es primo, indicándose con mensajes que se produzcan en el cuerpo de la función principal. */

const determinarPrimo = (numero) => {
    if (numero <= 1) {
        return "El número no es primo";
    }

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return "El número no es primo";
        }
    }

    return "El número es primo";
};

console.log(determinarPrimo(5));
console.log(determinarPrimo(0));
console.log(determinarPrimo(8));
