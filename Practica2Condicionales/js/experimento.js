"use strict"

//Ejercicio 2

/* 2. Interactuando con el usuario desde la consola
a. Crea un archivo experimento.html agrega una etiqueta H1 que diga:
“La magia sucede en la consola!”. Creá un archivo javascript y vincularlos.
b. Dentro del archivo js, mediante un prompt solicita al usuario que ingrese su nombre. Guarda la respuesta en un variable llamada “nombre”. Imprimí el nombre del usuario en la consola.
c. Mediante otro prompt solicita al usuario que ingrese su edad. Guarda la respuesta en una variable llamada “edad”. Imprimí la edad del usuario en la consola.
d. Mediante un confirm preguntale al usuario si le gustan los deportes. Guarda la respuesta en un variable llamada “fanDeportes”. Imprimí el valor por consola.
e. Mediante un alert se tendrá que mostrar la leyenda “Muchas gracias Nombre por responder nuestras preguntas”. En el mensaje deberá figurar el nombre del usuario guardado en la variable “nombre”. */



//b

let nombre = prompt("Ingresa tu nombre");

console.log(nombre);

//c
let edad = parseInt(prompt("Ingresa tu edad"));

console.log(edad);

//d

let fanDeportes = confirm("Te gustan los deportes?");

console.log(fanDeportes);

//e

alert(`Muchas gracias ${nombre} por responder nuestras preguntas`);
