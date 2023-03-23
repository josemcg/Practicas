"use strict";

/* 10. Filtrar palabras de un array por longitud

Crea una función llamada filtrarPalabras que acepte un array de palabras (strings) y un número entero positivo longitudMinima. La función debe devolver un nuevo array que contenga solo las palabras cuya longitud sea mayor o igual a longitudMinima. Luego, crea una función mostrarResultado que muestre en la consola del navegador el array resultante utilizando la función filtrarPalabras. Por último, llama a la función mostrarResultado con un array de palabras y una longitud mínima. */

function filtrarPalabras(arr, longitudMinima) {
    const nuevoArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length >= longitudMinima) {
            nuevoArray.push(arr[i]);
        }
    }

    return nuevoArray;
}

function mostrarResultado(arr, longitudMinima) {
    const resultado = filtrarPalabras(arr, longitudMinima);
    console.log(resultado);
}

mostrarResultado(["perro", "gato", "oso", "elefante"], 4); // Muestra "["perro", "elefante"]"
mostrarResultado(["casa", "puerta", "auto", "ventana"], 5); // Muestra "["puerta", "ventana"]"
