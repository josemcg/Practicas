"use strict";

//ejercicio 1

/* 1. Precalentando
Crea el archivo precalentando.html su correspondiente archivo js y vincularlos.
Ahora diseñaremos un programa que le pregunte al usuario “¿Vas a salir de tu casa?” por medio de un confirm.
● Si responde afirmativo tendrá que mostrar un alert con el texto «Chequeá el pronóstico del tiempo antes de salir».
● En caso contrario mostrará un alert con el texto «Que bueno que te quedes. Va a llover mucho hoy.».
Para verlo funcionar deberás abrir en el navegador el archivo html. Refresca la página para que se ejecuten los scripts. */

let salir = confirm("¿Vas a salir de tu casa?");

if (salir == true) {
    alert("Chequea el pronostico del tiempo antes de salir");
} else {
    alert("Que bueno que te quedes. Va a llover mucho hoy");
}