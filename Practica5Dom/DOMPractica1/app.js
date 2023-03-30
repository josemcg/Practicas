"use strict";

/* EJERCICIO 1:

1. Interactuando con el usuario y modificando el DOM.

Para este ejercicio necesitarás descargar los archivos de este link
Primero creá una carpeta con un archivo Javascript y vincularlo con el HTML.

a. Medianteunalertmostrarelsaludodebienvenida:"Bienvenidosami sitio.".
b. Usáunconfirmparapreguntar:“¿Estásegurodequereravanzar?”.
i. En el caso que quiera continuar mostrar en el <h2> el mensaje
"Qué alegría que quieras continuar tu visita”.
ii. En caso que no quiera avanzar debe modificarse el <h2> con el mensaje "Lamentamos que no quieras continuar tu visita” y no debería seguir el flujo de la aplicación. Es decir, ya no deberían ejecutarse más puntos de esta práctica.
c. Con un prompt pedí al usuario ingrese su nombre y guardalo en una variable.
d. Modifica el <h1> para que diga “BienvenidoNOMBRE” donde NOMBRE debe ser el nombre ingresado por el usuario.
e. Atravésdeunpromptpreguntá“¿Cuántosañostenés?”.
i. Si es mayor a 17 podrá continuar con el proceso.
ii. En caso de que sea menor de 18 ocultá el div con clase container-general y mostrar el div con id accesoDenegado.
f. Preguntar mediante un confirm “¿Te gusta la programación?”.
i. Si al usuario no le gusta la programación incluí dentro del div clase ‘background-img’ la imagen gatito.jpeg que está en la carpeta img.
ii. En caso que sí le guste la programación incluí dentro del div clase ‘background-img’ la imagen programmer.jpeg que está en la carpeta img.

g. Capturalaetiqueta<img>declaseavatarparacambiarlaimagenque se muestra. En su lugar inserta una imagen tuya. Para obtener esa imagen preguntá al usuario mediante un prompt la ruta de la imagen. No es necesario descargar la imagen, puedes googlear una imagen e indicar la URL donde se encuentra.
Para reemplazar la imagen debes usar el atributo src y asignarle la nueva ruta de la imagen. ¿Se te ocurre cómo hacerlo?
h. Acontinuaciónvamosapedirlealusuariodatoslosdatosdesu película favorita para poder mostrarla:
i. Primero vamos a crear un objeto literal llamado pelicula con las siguientes propiedades:
ii. nombre (String)
iii. director (String)
iv. duracion (Number)
v. actor (String)
i. Luego vamos a pedirle al usuario que ingrese la información usando prompts (uno para cada dato) y guardarlos como propiedades de nuestro objeto pelicula.
j. Para mostrar los datos ingresados vamos utilizar la lista desordenada (<ul>) oculta en el archivo HTML (dentro del <div id=”pelicula”>).
k. Recuerda desocultar la lista una vez que el usuario haya cargado los datos. */

window.addEventListener("DOMContentLoaded", () => {
    alert("Bienvenidos a mi sitio.");

    if (confirm("¿Está seguro de querer avanzar?")) {
        let titulo = document.querySelector("h2");
        titulo.innerText = "Que alegria que quieras continuar tu visita.";
        let nombre = prompt("Introduzca su nombre:");
        let titulo2 = document.querySelector("h1");
        titulo2.innerText = `Bienvenido ${nombre}`;
        let edad = prompt("Introduzca su edad");

        if (edad > 17) {
            if (confirm("Te gusta la programacion?")) {
                let background = document.querySelector(".background-img");
                background.style.backgroundImage = "url('img/programmer.jpeg')";
                console.log(background);
            } else {
                let background = document.querySelector(".background-img");
                background.style.backgroundImage = "url('img/gatito.jpeg')";
            }
        } else {
            let ocultada = document.querySelector(".container-general");
            ocultada.style.display = "none";
            let mostrada = document.querySelector("#accesoDenegado");
            mostrada.style.display = "block";
        }
    } else {
        titulo.innerText = "Lamentamos que no quieras continuar tu visita.";
    }

    let pelicula = {
        nombre: "",
        director: "",
        duracion: 0,
        actor: ""
    };

    pelicula.nombre = prompt("introduce nombre de la pelicula");
    pelicula.director = prompt("Introduce el director de la pelicula");
    pelicula.duracion = prompt("Introduce el director de la pelicula");
    pelicula.actor = prompt("Introduzca el actor de la pelicula");

    let divPeli = document.querySelector('#pelicula');
    divPeli.style.display = "block";

    let nombrePeli = document.querySelector('#nombre');
    nombrePeli.innerText = pelicula.nombre;
    let directorPeli = document.querySelector('#director');
    directorPeli.innerText = pelicula.director;
    let duracionPeli = document.querySelector('#duracion');
    duracionPeli.innerText = pelicula.duracion;
    let actorPeli = document.querySelector('#actor');
    actorPeli.innerText = pelicula.actor;


});
