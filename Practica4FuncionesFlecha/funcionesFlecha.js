"use strict";

// 1. Crea las siguientes funciones con Arrow function (función flecha)
// a. Crear una función rectangulo que reciba como parámetros la altura y
// el ancho de un rectángulo y retorne el área.
// b. Crear una función triangulo que reciba como parámetro la base y la
// altura de un triángulo y retorne el área.
// c. Crea una función largoDelArray que reciba como parámetro un array
// y retorne la cantidad de elementos que contiene.
// d. Crea una función cantidadDeLetras que reciba como parámetro una
// palabra y devuelva la cantidad de letras que tiene.
// e. Crea una función dolarHoy que reciba como parámetro un precio en
// euros y devuelva el precio en dólares estadounidenses.
// f. Crea una función precioFinal que reciba un precio como parámetro y
// retorne el precio más el IVA (21%).
// g. Crea una función mitad que reciba un número como parámetro y
// devuelva su mitad. Tené en cuenta que el operador de división en
// JavaScript es “ / ”.
// h. Crea una función diaSegunNumero que reciba como parámetros un
// array y un número y retorne el día correspondiente al número
// ingresado.






/ 1. Crea las siguientes funciones con Arrow function (función flecha)
// a. Crear una función rectangulo que reciba como parámetros la altura y
// el ancho de un rectángulo y retorne el área.
// const areaRectangulo = (altura, ancho) => altura * ancho;

// b. Crear una función triangulo que reciba como parámetro la base y la
// altura de un triángulo y retorne el área.

// const areaTriangulo = (altura, base) => (altura * ancho) / 2;

// c. Crea una función largoDelArray que reciba como parámetro un array
// y retorne la cantidad de elementos que contiene.

// const arrayejemplo = [3 ,4 ,5];

// const largoDelArray = (cadenaCaracteres) => cadenaCaracteres.length; 
// console.log(largoDelArray(arrayejemplo))

// d. Crea una función cantidadDeLetras que reciba como parámetro una
// palabra y devuelva la cantidad de letras que tiene.

const palabraEntrada = 'functions';

const cantidadDeLetras = (palabra) => palabra.length; 
console.log(cantidadDeLetras(palabraEntrada));


// e. Crea una función dolarHoy que reciba como parámetro un precio en
// euros y devuelva el precio en dólares estadounidenses.
const precioEnEuros = 20;
const dolarHoy = (precioEuros) => precioEuros * 1.20;

console.log(`${precioEnEuros} euros = ${dolarHoy(precioEnEuros)} dolares`);

// f. Crea una función precioFinal que reciba un precio como parámetro y
// retorne el precio más el IVA (21%).

let precioIngresado = 100;
const precioFinal = (precio) => precio + (precio*0.21)

console.log(`Precio final: ${precioFinal(precioIngresado)}`);


// g. Crea una función mitad que reciba un número como parámetro y
// devuelva su mitad. Tené en cuenta que el operador de división en
// JavaScript es “ / ”.

let numeroIngresado = 20;

const calcularMitad = (numero) => numero / 2;

console.log(`la mitad de ${numeroIngresado} es: ${calcularMitad(numeroIngresado)}`);

// h. Crea una función diaSegunNumero que reciba como parámetros un
// array y un número y retorne el día correspondiente al número
// ingresado.

const diasSemana = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];
let numeroDia = 5;

const diaSegunNumero = (arrayDias, numeroDeDia) => arrayDias[numeroDeDia - 1];

console.log(`El dia de la semana introducido es: ${diaSegunNumero(diasSemana, numeroDia)}`);



// 2. Realiza lo siguiente:
// Hacé una calculadora básica para que calcule automáticamente con 2
// números recibidos como parámetro y una operación. Los parámetros serán 3:
// num1, num2, operación.


let numeroUno = prompt('Escribe un número');
let operacion = prompt('Escribe una operación aritmética ("+", "-", "*", "/")');
let numeroDos = prompt('Escribe otro número');

const calcBasica = (numUno, operacion ,numDos) => eval(numUno + operacion + numDos)
console.log(`${numeroUno} ${operacion} ${numeroDos} = ${calcBasica(numeroUno, operacion, numeroDos)}`);



// 3. Creá 4 funciones que deberán tomar siempre 2 números como parámetros
// (num1 y num2). Sugerimos que se llamen:
// sumar
// multiplicar
// restar
// dividir
// ¿Cómo probarías tu calculadora?


let numUno = 2;
let numDos = 7;

const sumar = (num1, num2) => num1 + num2;
const restar = (num1, num2) => num1 - num2;
const multiplicar = (num1, num2) => num1 * num2;
const dividir = (num1, num2) => num1 / num2;

console.log(`${numUno} + ${numDos} = ${sumar(numUno, numDos)}`);
console.log(`${numUno} - ${numDos} = ${restar(numUno, numDos)}`);
console.log(`${numUno} * ${numDos} = ${multiplicar(numUno, numDos)}`);
console.log(`${numUno} / ${numDos} = ${dividir(numUno, numDos)}`);



// 4. Crea una función que reciba un parámetro, un dni, y devuelva la letra del
// mismo. Si el dni pasado tiene algún error devolverá “”.


let dni = 06020472;

const calculaLetraDni = (numDni) => {

    let numLetra = numDni % 23;
    const codigos = ['TRWAGMYFPDXBNJZSQVHLCKE'];

    return codigos[numLetra - 1];

}


// 5. Crea una función que reciba un texto y lo devuelva al revés

// 1) Convierto el string en array 
// 2) Lo invierto
// 3) Lo vuelvo a convertir en string


let prueba = "hola";

function invertirTexto (texto){
    return texto.split('').reverse().join('');
}

const invertirTextoFlecha = texto => texto.split('').reverse().join('')

console.log(invertirTexto(prueba));
