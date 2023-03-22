"use strict";

/* 9. Se trata de crear una aplicación que calcule la suma de todos los números enteros positivos entre 0 y el número tecleado por el usuario. El resultado será de la forma "Los números enteros de 0 a n suman suma"
Ejemplo: Si tecleo el 5 obtendré "Los enteros enteros de 0 a n suman 15" (1+2+3+4+5 ). */

let respuesta = prompt("Introduzca un numero");
let suma = 0;

for (let i = 0; i < respuesta; i++) {
    suma += i;
    console.log(suma);
    if (i == respuesta - 1) {
        // no puedo hacer esto fuera porque la variable es local dentro del for
        alert(`Los numeros enteros de 0 a ${i} suman ${suma}`);
    }
}
