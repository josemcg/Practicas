"use strict";

/* 10. En este ejercicio mezclamos bucles y condicionales: 
el usuario escribe un número y el script imprimirá (console.log) todos los números menores que al dividirlos por 3 den como resto 2.
Recuerda: un número es múltiplo de N es cuando al dividirlo por N el resto es 0.
Por ejemplo si tecleas el 14, obtendré la lista 2, 5, 8 y 11 */

let respuesta = prompt("Introducza el numero");
let multiplos = ""; // lo inicializo con cadena vacia porque concatena con undefined si no pongo nada, y si pongo 0 concatena el 0. En ejercicios anteriores me he comido la cabeza usando el condicional, pero esta es la solucion mas sencilla.

for (let i = 0; i < respuesta; i++) {
    if (i % 3 === 2) {
        multiplos += i + ", ";
    }
}

console.log(multiplos);
