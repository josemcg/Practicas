"use strict";

// 1. Crea un objeto literal "misMascotas" con la siguiente información:
// ● nombre
// ● especie
// ● edad
// ● comidaFavorita
// ● color

// const misMascotas = {
//     nombre: "Coco",
//     especie: "perro",
//     edad: 3,
//     comidaFavorita: "pienso",
//     color: "negro"
// }

// 2. Implementa el método "presentar()" en el objeto "misMascotas" que, al ser
// invocado, retorne un string como este: "Hola, mi mascota se llama NOMBRE,
// es un(a) ESPECIE y tiene EDAD años". Utiliza template literals para armar el
// string. Imprime la frase en la consola.

// const misMascotas = {
//     nombre: "Coco",
//     especie: "perro",
//     edad: 3,
//     comidaFavorita: "pienso",
//     color: "negro",

//     presentar() {
//         return console.log(
//             `Hola, mi mascota se llama ${this.nombre}, es un ${this.especie} y tiene ${this.edad} años`
//         );
//     },
// };

// misMascotas.presentar();

// 3. Creá un objeto literal misDatos con tu información en sus propiedades:
// ● nombre
// ● apellido
// ● dni
// ● comidaFavorita
// ● edad

// const misDatos = {
//     nombre: "Jose",
//     apellido: "Calzado",
//     dni: "98555647F",
//     comidaFavorita: "Lasaña",
//     edad: 34,
// };

// 4. Implementar el método saludar() en el objeto misDatos que al ser invocado
// retorne un string así: "Hola mi nombre es NOMBRE APELLIDO y tengo
// EDAD años". Armá el string usando template literals que vimos en la 1a clase
// de javascript. Imprimí la frase en la consola.

const misDatos = {
    nombre: "Jose",
    apellido: "Calzado",
    dni: "98555647F",
    comidaFavorita: "Lasaña",
    edad: 34,

    saludar() {
        return console.log(`Hola mi nombre es ${this.nombre + this.apellido}`);
    },
};

misDatos.saludar();
