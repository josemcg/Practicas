"use strict";

/* 6. Verificar si un número es par o impar

Crea una función llamada esPar que acepte un número como argumento y devuelva true si el número es par, y false si es impar. Luego, crea una función mostrarResultado que muestre en la consola del navegador si el número es par o impar utilizando la función esPar. Por último, llama a la función mostrarResultado con un número cualquiera. */

function esPar(n) {
    if (n % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

function mostrarResultado(n) {
    if (esPar(n)) {
        return console.log(`El numero ${n} es par`);
    } else {
        return console.log(`El numero ${n} es impar`);
    }
}

mostrarResultado(7);
