"use strict";

/* 5. Vamos a crear un auto como objeto literal con las propiedades:
● marca
● modelo
● anio
● color
● posicion: contendrá como valor inicial 0.

Los métodos avanzar(n) y retroceder(n) que modifiquen la posición del auto. avanzar(n) recibe un número positivo y aumenta el valor de la propiedad “posicion”. retroceder(n) recibe un número positivo y disminuye el valor de la propiedad “posicion”. Probá mover el auto usando varias veces los métodos
avanzar(n) y retroceder(n). Recordá usar una sola vez console.log() para ver la posición final del auto. ¿Qué deberías indicar dentro de los paréntesis de console.log() para ver la posición final del auto? */

const auto = {
    marca: "Ford",
    modelo: "Mustang",
    anio: 2022,
    color: "rojo",
    posicion: 0,
    avanzar(n) {
        if(n > 0) {
            this.posicion += n;
        }
    },
    retroceder(n) {
        if(n > 0) {
            this.posicion -= n;
        }
    }
};

auto.avanzar(10);
auto.retroceder(4);
console.log(auto.posicion); // 6
