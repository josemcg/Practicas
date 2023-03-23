"use strict";

/* 9. Encontrar el número más grande en un array

Crea una función llamada numeroMasGrande que acepte un array de números y devuelva el número más grande del array. Luego, crea una función mostrarResultado que muestre en la consola del navegador el número más grande utilizando la función numeroMasGrande. Por último, llama a la función mostrarResultado con un array de números. */

function numeroMasGrande(arr) {
    let maximo = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maximo) {
            maximo = arr[i];
        }
    }

    return maximo;
}

function mostrarResultado(arr) {
    const maximo = numeroMasGrande(arr);
    console.log(`El número más grande es ${maximo}`);
}

mostrarResultado([1, 3, 5, 2, 4]); // Muestra "El número más grande es 5"
mostrarResultado([7, 2, 9, 4, 1]); // Muestra "El número más grande es 9"
