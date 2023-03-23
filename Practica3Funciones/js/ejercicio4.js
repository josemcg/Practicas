"use strict";

/* 4. Suma de números pares

Escribe una función llamada sumaPares que acepte un número entero positivo n como argumento y devuelva la suma de todos los números pares desde 2 hasta n (incluido). Utiliza un bucle for para recorrer los números y un condicional if para verificar si un número es par. */

function sumaPares(n) {
    let suma = 0;
    for (let i = 2; i <= n; i++) {
        if (i % 2 == 0) {
            suma += i;
        }
    }
    return suma;
}

console.log(sumaPares(8));
