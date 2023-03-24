"use strict";

/* 6. Creá una nueva variable “nuevoAuto” con las mismas propiedades que la anterior y reemplazá a los métodos avanzar(n) y retroceder(n) por un único método moverse(n) que va a recibir como parámetro un número positivo o negativo y modificará la posición del auto la cantidad de pasos necesarios. Probá mover el auto usando el método moverse(n). */

const nuevoAuto = {
    marca: "Chevrolet",
    modelo: "Camaro",
    anio: 2022,
    color: "negro",
    posicion: 0,
    moverse(n) {
        if (n > 0) {
            this.posicion += n;
        } else {
            this.posicion -= Math.abs(n);
        }
    },
};

nuevoAuto.moverse(10);
nuevoAuto.moverse(-3);
console.log(nuevoAuto.posicion); // 7
