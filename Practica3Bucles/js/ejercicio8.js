"use strict";

/* 8. Se trata de que dado un número entero el script muestra una cuenta atrás, es decir, una lista de números separados por coma desde el número tecleado hasta el 0.
Ejemplo: Si tecleo número 5 deberá mostrar 5,4,3,2,1. */

let numIntroducido = parseInt(prompt("Introduzca un numero"));
let resultado;
for (let i = numIntroducido - 1; i > 0; i--) {
    if (i == numIntroducido - 1) {
        resultado = numIntroducido - 1 + ", ";
    } else if (i == 1) {
        resultado += 0;
    } else {
        resultado += i - 1 + ", ";
    }
    console.log(`vuelta ${i} resultado: ${resultado}`);
}

alert(resultado);
