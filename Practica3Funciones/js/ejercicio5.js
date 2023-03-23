"use strict";

/* 5. Factorial

Escribe una función llamada factorial que acepte un número entero positivo n como argumento y devuelva el factorial de n. Utiliza un bucle for para calcular el factorial. */

function factorial(n) {
    let resultado = 1; //lo inicializo en 1 porque si no pongo nada es undefined y si pongo 0 multiplica por 0.
    for (let i = n; i > 0; i--) {
        resultado = resultado * i;
    }
    return resultado;
}

console.log(factorial(5));
