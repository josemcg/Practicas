"use strict";

// 4. Crea una función que reciba un parámetro, un dni, y devuelva la letra del
// mismo. Si el dni pasado tiene algún error devolverá “”.


const obtenerLetraDNI = dni => {
    const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
    const letra = letras.charAt(dni % 23);
    
    return letra;
}

console.log(obtenerLetraDNI(12345678)); // Devuelve 'Z'