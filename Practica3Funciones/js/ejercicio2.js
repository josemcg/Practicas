"use strict";

// 2. Calculadora básica
// Escribe una función llamada calculadora que acepte tres argumentos: dos
// números y un string que represente una operación aritmética ('+', '-', '*', '/'). La
// función debe realizar la operación y devolver el resultado. Si se proporciona
// una operación no válida, la función debe devolver un mensaje de error.


function calculadora(n1, n2, operador) {
    switch (calculadora){
        case '+':
            return n1 + n2;
            break;
        case '-':
            return n1 - n2;
            break;
        case '*':
            return n1 * n2;
            break;
        case '/':
            return n1 / n2;
            break;
        default:
            console.error("Operacion incorrecta");
            break;
    }
}