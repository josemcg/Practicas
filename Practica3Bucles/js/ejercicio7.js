"use strict";

/* 7. Usando un ciclo escribir un script que pida un valor entero y muestre en pantalla una lista de números desde el 0 al valor tecleado. Los números se separarán por comas.
Ejemplo: Si el usuario entra por teclado el número 5 el script devolverá la secuencia 0, 1, 2, 3, 4, 5 */

let numIntroducido = parseInt(prompt("Introduzca un numero"));
let resultado;

for (let i = 0; i < numIntroducido; i++) {
    if (i == 0) {
        resultado = 0 + ", ";
    } else if (i == numIntroducido - 1) {
        resultado += i;
    } else {
        resultado += i + ", ";
    }
}

alert(resultado);
