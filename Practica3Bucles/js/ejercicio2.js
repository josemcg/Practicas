"use strict";


/* 2. Tablas de multiplicar
Utilizando un bucle deberás generar un array con los resultados.
a. Crea la variable base que contendrá un número. Define también una variable de resultados que sea un array vacío.
b. Crea un ciclo que recorra desde el 1 al 10.
c. En cada iteración deberás multiplicar el número base por cada valor de la iteración y guardar el resultado dentro del array. Para ello necesitarás usar uno de los métodos de arrays que te permite agregar elementos.
El array de resultados debe contener la tabla de multiplicar del número base. Por ejemplo, si base es 2, resultados debe ser [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
d. Imprimir el array de resultados en consola. De esta forma: 2 4 6 8 ...
e. Prueba el código con distintos números base para asegurar que funciona correctamente. */

//a
let base = 6;
let resultados = [];

//b, c, d
for (let i = 0; i < 10; i++) {
    resultados.push(base * i);
    console.log(resultados[i]);
}

//e
base = 4;
let resultados2 = [];
for (let i = 0; i < 10; i++) {
    resultados2.push(base * i);
    console.log(resultados2[i]);
}

base = 2;
let resultados3 = [];
for (let i = 0; i < 10; i++) {
    resultados3.push(base * i);
    console.log(resultados3[i]);
}