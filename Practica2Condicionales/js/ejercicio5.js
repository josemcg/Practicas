"use strict";

//Ejercicio 5

/* 5. Crear un programa que pida al usuario tres números y muestre en pantalla la suma de los dos mayores. */

let primero = parseInt(prompt("Dime el primer numero"));
let segundo = parseInt(prompt("Dime el segundo numero"));
let tercero = parseInt(prompt("Dime el tercer numero"));

if (primero > segundo && primero > tercero && segundo > tercero) {
    alert(primero + segundo);
} else if (segundo > primero && segundo > tercero && primero > tercero) {
    alert(segundo + primero);
} else if (tercero > primero && tercero > segundo && primero > segundo) {
    alert(tercero + primero);
} else if (segundo > primero && segundo > tercero && tercero > primero) {
    alert(segundo + tercero);
} else if (tercero > primero && tercero > segundo && segundo > primero) {
    alert(tercero + segundo);
} else {
    alert("Hay 2 o mas numeros iguales"); // Con esta linea solo filtramos que tienen que ser diferentes todos los numeros
}
