"use strict";

/* 8. Realizar un programa que, pidiendo la introducción de un número, averigüe mediante una función, si dicho número que se le pase es positivo, negativo o nulo. Para ello, deberá escribir en pantalla, en caso positivo, el mensaje “El número es positivo”. En el caso de ser negativo escribirá “El número es negativo”. Si resulta ser nulo escribirá “El número es nulo”. */

const determinarSigno = (numero) => {
    if (numero > 0) {
        return "El número es positivo";
    } else if (numero < 0) {
        return "El número es negativo";
    } else {
        return "El número es nulo";
    }
};

console.log(determinarSigno(20));
console.log(determinarSigno(-20));
console.log(determinarSigno(0));
