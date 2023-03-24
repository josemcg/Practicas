"use strict";

/* 4. Implementar el método saludar() en el objeto misDatos que al ser invocado retorne un string así: 

"Hola mi nombre es NOMBRE APELLIDO y tengo EDAD años". 
Arma el string usando template literals que vimos en la 1a clase de javascript. 
Imprime la frase en la consola. */

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