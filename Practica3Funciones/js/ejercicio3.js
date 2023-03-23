"use strict";

// 3. Contar vocales
// Escribe una función llamada contarVocales que acepte un string y devuelva
// la cantidad de vocales (mayúsculas o minúsculas) que contiene. Utiliza un
// bucle for para recorrer el string y un condicional if para verificar si cada
// carácter es una vocal.

function contarVocales(cadena) {
    let cantidadVocales = 0;
    const vocales = "aeuioAEIOU";

    for (let index = 0; index < cadena.length; index++) {
        if (vocales.includes(cadena[index])) {
            cantidadVocales++;
        }
    }
}

// con funcion flecha (Arrow function)
// declaracion y llamada


// const contarVocales = (cadena) => {
//     let cantidadVocales = 0;
//     const vocales = "aeiouAEIOU";

//     for (let index = 0; index < cadena.length; index++) {
//         if (vocales.includes(cadena[index])) {
//             cantidadVocales++;
//         }
//     }

//     return cantidadVocales;
// };
