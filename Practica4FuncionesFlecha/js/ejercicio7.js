"use strict";

/* 7. Crea una función que genere 100 números aleatorios entre 1 y 1000 que no se repitan y luego muestralos por pantalla */

const numerosAleatorios = () => {
    const numeros = new Set();

    while (numeros.size < 100) {
        const numero = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
        numeros.add(numero);
    }

    numeros.forEach((numero) => console.log(numero));
};

numerosAleatorios();
