"use strict";

/* 7. Batalla de superhéroes. Vamos a poner en juego todo lo aprendido. Creá:
un objeto literal ironMan con las siguientes propiedades y métodos:

● nombre (String) - "Iron Man"
● equipo (String) - "Avengers"
● poderes (Array) - ["Volar", "Lanzar misiles", "Disparar láser"]
● energía (Number) - 100
● getPoder (Fn) - recibe un parámetro numérico. Retornará el poder
seleccionado.
un objeto literal Hulk con las siguientes propiedades/métodos:
● nombre (String) - "Hulk"
● equipo (String) - "Avengers"
● poderes (Array) - ["Aplastar", "Gritar", "Golpear"]
● energia (Number) - 100
● getPoder (Fn) - recibe un parámetro numérico.

Retornará el poder seleccionado y la energía restante con la frase: “Poder Elegido de SUPERHEROE: PODERELEGIDO. Energía restante: ENERGIA.” Deberás usar template literals para construirla. Utilizando las funciones Math.random() y Math.floor() generá un número entero al azar entre 0 y 2 que estará en relación a nuestro array de poderes. El número al azar deberá ser pasado al método getPoder(). Cada poder debe descontar 10 de la energía del superhéroe. Para probar la batalla deberás imprimir por consola a el método getPoder() de cada super héroe pasando el número random dentro de los paréntesis.
Por ejemplo: console.log(ironMan.getPoder(Math.floor(Math.random()*3))) */

const ironMan = {
    nombre: "Iron Man",
    equipo: "Avengers",
    poderes: ["Volar", "Lanzar misiles", "Disparar láser"],
    energia: 100,
    getPoder(num) {
        const poderElegido = this.poderes[num];
        this.energia -= 10;
        return poderElegido;
    },
};

const Hulk = {
    nombre: "Hulk",
    equipo: "Avengers",
    poderes: ["Aplastar", "Gritar", "Golpear"],
    energia: 100,
    getPoder(num) {
        const poderElegido = this.poderes[num];
        this.energia -= 10;
        return `Poder Elegido de ${this.nombre}: ${poderElegido}. Energía restante: ${this.energia}.`;
    },
};

const randomNum = Math.floor(Math.random() * 3);

console.log(ironMan.getPoder(randomNum));
console.log(Hulk.getPoder(randomNum));

