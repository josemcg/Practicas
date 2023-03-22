"use strict";

let got = [
    {
        nombre: "Jon",
        apellido: "Snow",
        edad: 23,
        ciudad: "Winterfell",
    },
    {
        nombre: "Daenerys",
        apellido: "Targaryen",
        edad: 19,
    },
    {
        nombre: "Arya",
        apellido: "Stark",
        edad: 12,
        ciudad: "Winterfell",
    },
    {
        nombre: "Tyrion",
        apellido: "Lannister",
        edad: 32,
        ciudad: "Casterly Rock",
    },
];

//a, b

/* 
a. Imprimir por consola la frase: “Hola NOMBRE APELLIDO criatura viajera!”
b. Imprimir por consola la frase: “Soy NOMBRE APELLIDO de la ciudad CIUDAD” */

for (let i of got) {
    console.log(`Hola ${i.nombre} ${i.apellido}, criatura viajera!`);
    console.log(`Soy ${i.nombre} ${i.apellido} de la ciudad ${i.ciudad}`);
}
