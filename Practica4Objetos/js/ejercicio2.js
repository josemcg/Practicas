"use strict";

/* 2. Implementa el método "presentar()" en el objeto "misMascotas" que, al ser invocado, retorne un string como este:

"Hola, mi mascota se llama NOMBRE, es un(a) ESPECIE y tiene EDAD años". 
Utiliza template literals para armar el string. 
Imprime la frase en la consola. */

const misMascotas = {
    nombre: "Coco",
    especie: "perro",
    edad: 3,
    comidaFavorita: "pienso",
    color: "negro",

    presentar() {
        return console.log(
            `Hola, mi mascota se llama ${this.nombre}, es un ${this.especie} y tiene ${this.edad} años`
        );
    },
};

misMascotas.presentar();
