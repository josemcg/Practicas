"use strict";


/* 1. Precalentando
a. Imprimíporconsola5veceslafrase:“Practicandoconelbuclefor”.
b. Utilizandoelvalordelavariable“i”imprimí10vecesporconsolala frase: “La variable i tiene el valor de: (reemplazar por su valor numérico)”. Usá la sintaxis template literals.
c. Imprimí por consola 10 múltiplos de 2 ¿Qué parte del bucle for modificarías para que i varía de 2 en 2.
d. Imprime por consola 50 múltiplos de 5 ¿Qué parte del bucle for modificarías para que i varía de 5 en 5.
e. Crea un bucle for que imprime por consola los números desde el 100 al 0. */

//a
for (let i = 0; i < 5; i++) {
    console.log("Practicando con el bucle for");
}

//b
for (let i = 0; i < 10; i++) {
    console.log(`La variable i tiene valor de: ${i}`);
}

//c
for (let i = 0; i < 20; i + 2) {
    console.log(i);
}

//d
for (let i = 0; i < 250; i + 5) {
    console.log(i);
}

//e
for (let i = 100; i > 0; i--) {
    console.log(i);
}