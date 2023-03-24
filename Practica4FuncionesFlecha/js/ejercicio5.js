"use strict";

// 5. Crea una función que reciba un texto y lo devuelva al revés

// 1) Convierto el string en array 
// 2) Lo invierto
// 3) Lo vuelvo a convertir en string


let prueba = "hola";

function invertirTexto (texto){
    return texto.split('').reverse().join('');
}

const invertirTextoFlecha = texto => texto.split('').reverse().join('')

console.log(invertirTexto(prueba));