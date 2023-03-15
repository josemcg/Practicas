"use strict";

//Ejercicio 4

/* 4. Crear un programa que pida al usuario un número del 1 al 7 y muestre en pantalla el día de la semana correspondiente (1: Lunes, 2: Martes, etc.). */


let numDia = parseInt(prompt("Dime un dia de la semana del 1 al 7"));

if (numDia < 1 || numDia > 7) {
    alert("dia introcucido incorrecto");
} else {
    switch (numDia) {
        case 1:
            alert("lunes");
            break;
        case 2:
            alert("martes");
            break;
        case 3:
            alert("miercoles");
            break;
        case 4:
            alert("jueves");
            break;
        case 5:
            alert("viernes");
            break;
        case 6:
            alert("sabado");
            break;
        case 7:
            alert("domingo");
            break;
        default:
            alert("error");  //En teoria no entrara nunca aqui porque lo tenemos controlado arriba.
            break;
    }
}
