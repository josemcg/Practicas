"use strict";

/* 8. Concatenar dos arrays y ordenarlos

Crea una función llamada concatenarYOrdenar que acepte dos arrays de
números y devuelva un nuevo array con todos los números de ambos arrays concatenados y ordenados de menor a mayor. Luego, crea una función mostrarResultado que muestre en la consola del navegador el array resultante utilizando la función concatenarYOrdenar. Por último, llama a la función mostrarResultado con dos arrays de números. */

function concatenarYOrdenar(arr1, arr2) {
    const nuevoArray = arr1.concat(arr2);
    nuevoArray.sort((a, b) => a - b);

    return nuevoArray;
}

function mostrarResultado(arr1, arr2) {
    const resultado = concatenarYOrdenar(arr1, arr2);
    console.log(resultado);
}

mostrarResultado([1, 3, 5], [2, 4, 6]); // Muestra "[1, 2, 3, 4, 5, 6]"
mostrarResultado([5, 3, 1], [6, 4, 2]); // Muestra "[1, 2, 3, 4, 5, 6]"
