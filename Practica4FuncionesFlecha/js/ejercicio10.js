"use strict";

/* 10.Imaginemos que tenemos los siguientes campos en un formulario: nombre, email y comentarios. Mediante la siguientes declaraciones:
a. El campo de email debe ser una direcciónde email válida. Se considera válida si contiene un ‘@’
b. El texto introducido en el campo de comentarios no debe exceder los 50 caracteres.
c. El password debe tener una longitud mínima de 6 caracteres, y contener al menos una letra minúscula, una letra mayúscula y un dígito.
d. Realizar una función para cada campo y valide según indica. */

const validarEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;

    return regex.test(email);
};
console.log(validarEmail("correo@example.com")); // true
console.log(validarEmail("correoejemplo.com")); // false

const validarComentarios = (comentarios) => {
    return comentarios.length <= 50;
};
console.log(validarComentarios("Esto es un comentario")); // true
console.log(
    validarComentarios(
        "Esto es un comentario muy largo que excede los 50 caracteres permitidos"
    )
); // false

const validarPassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
    return regex.test(password);
};
console.log(validarPassword("Password123")); // true
console.log(validarPassword("password")); // false
