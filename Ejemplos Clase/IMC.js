"use strict";

let peso = parseInt(prompt("Introduzca su peso(kg)"));
let altura = parseFloat(prompt("Introduzca su altura(m)"));


let imc = peso / (altura * altura);

switch (imc){
    case(imc < 18.5):
        console.log("imc + Bajo peso");
        break;
    case(imc > 18.5 && imc < 24.9):
        console.log("imc + Normal");
        break;
    case(imc > 25 && imc < 29.9):
        console.log("imc + Sobrepeso");
        break;
    default:
        console.log("imc + Normal");
        break;
}
