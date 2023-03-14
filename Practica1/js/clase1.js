"use strict";
// Ejercicio 1: Declaración de variables

/* Declara 2 variables, una con el nombre edad y la otra variable con el nombre peso. Utiliza el método console.log() y observa qué información devuelve la consola. */

let edad;

let peso;

console.log();

//Ejercicio 2: Almacenando datos

/* Asignarle un valor numérico a cada una de las variables declaradas en el punto 1 (edad y peso). No deberás modificar el código escrito en el punto 1. ¿Se te ocurre cómo hacerlo? */

edad = 20;
peso = 100;

//Ejercicio 3: Otro tipo de dato

/* Declara la variable saludo y asígnale el texto “Hola Mundo!”. Imprimí en la consola el valor de la variable usando console.log(). */

let saludo = "Hola Mundo";

console.log(saludo);

// Ejercicio 4: Intercambiando valores

/* Define la variable numeroA con un valor de 30 y la variable numeroB con un valor de 45. A continuación hacé que la variable numeroA almacene el valor de la variable numeroB y viceversa. Tal vez debás pensar en crear una nueva variable intermedia. */

let numeroA = 30;
let numeroB = 45;

let comodin = numeroA;

numeroA = numeroB;

numeroB = comodin;

console.log(numeroA)
console.log(numeroB)


//Ejercicio 5: Más tipos de datos

/* Define una variable meGustaElHelado y asignarle un valor booleano de acuerdo a tus preferencias. Luego imprimí por consola el valor de la variable. */


let meGustaElHelado = true;

console.log(meGustaElHelado);

//Ejercicio 6: variables y operadores.

/* 1. Creá una variable que contenga el resultado de sumar (5+10).
2. Creá una variable que contenga el resultado de restar (20-5).
3. Creá 2 variables numéricas y almacena en una nueva variable el resultado de 
multiplicarlas.
4. Creá una variable que contenga la comparación 2 > 1. Luego imprimí la variable en la
consola y analizá el resultado.
5. Creá una variable que contenga la comparación 1 > 1. Luego imprimí la variable en la
consola y analizá el resultado. */


let suma = 5 + 10;
let resta = 20 - 5;
let primerNum = 6;
let segundoNum = 20;
let resultado = primerNum * segundoNum;
let comparacion = 2 > 1;
console.log(comparacion);

let comparacion2 = 1 > 1;

console.log(comparacion2);

//Ejercicio 7: mostrar información con Javascript

/* 1. Solicitar la edad al usuario
2. Mostrar en una ventana pop-up (emergente) el mensaje: “Gracias por tu respuesta”
3. Mostrar en el cuadro de resultados del editor el mensaje:
“Necesito utilizar variables para procesar tu edad” */

let respuesta = prompt("Cual es tu edad?");
alert("Gracias por tu respuesta");
console.log("Necesito utilizar variables para procesar tu edad");

//Ejercicio 8

/* Hacer un conversor de euros a dólares. Tendremos una constante llamada euros en la que el valor estará inicializado con valor 7. Debemos calcular ese valor en dólares. Supondremos que un euro son dos dólares. */

const euros = 7;

const dolares = euros * 2;

//Ejercicio 9

/* El IVA para ciertos artículos es del 21%. Realiza un programa que a partir de una constante precio inicializada con valor 100, calcule el precio con IVA. */

const precio = 100;

console.log(precio + (precio * 21) / 100);

//Ejercicio 10

/* Vamos a mandar al usuario la caja de sus sueños. Para ello, partiremos de los siguientes valores:
y los concatenamos para obtener por consola el siguiente mensaje:
«[nombre] ha pedido una caja de [material] con unas dimensiones [dimensiones]. [comentario]. El anterior mensaje, una vez montado, debería haber quedado así:
Juan ha pedido una caja de Madera con unas dimensiones diminutas. Que sea muy bonita, pero de una belleza extraña, indómita. */

const nombre = "Juan";
const material = "madera";
const dimensiones = "diminutas";
const comentario = "Que sea bonita, pero de una belleza extraña, indómita";

console.log(
    `${nombre} ha pedido una caja de ${material} con unas dimensiones ${dimensiones}. ${comentario}.`
);

//Ejercicio 11

/* Declarando variables para cada número y para el resultado, genera un script que ejecute la siguiente operación y muestre el valor final de la variable resultado en pantalla:
23 + (15 * (3 / 2)) - 10.
1. Réstale 5 al valor de resultado mediante un operador compuesto y muestra el valor final de la variable resultado en pantalla.
2. Decrementa en uno el valor de resultado mediante el operador decremento y muestra el valor final de la variable resultado en pantalla. */


let primero = 23;
let segundo = 15;
let tercero = 3;
let cuarto = 2;
let quinto = 10;
let resultadoFinal = primero + segundo * (tercero / cuarto) - quinto;

/* 1 */ resultadoFinal -= 5;

/* 2 */ console.log(resultadoFinal--);

// Ejercicio 12:

/* 1. Declarar en un script 12 variables con los meses del año y su valor numérico asociado (var enero = 1; var febrero = 2; etc.)
2. Mostrar por consola el resultado de comparar si enero es mayor que diciembre.
3. Mostrar por consola el resultado de comparar si junio es menor que julio. */


let enero = 1;
let febrero = 2;
let marzo = 3;
let abril = 4;
let mayo = 5;
let junio = 6;
let julio = 7;
let agosto = 8;
let septiembre = 9;
let octubre = 10;
let noviembre = 11;
let diciembre = 12;

console.log(enero > diciembre);
console.log(junio < julio);
