// completar las variables para que el programa funcione

window.addEventListener("load", function () {
    //capturar HTML
    let titulo = document.querySelector("#titulo");
    titulo.addEventListener("mouseover", (e) => {
        let nombre = prompt("Como te llamas?");
        let saludo = document.querySelector("#saludo");

        if (nombre.length > 0) {
            saludo.innerText = `Bienvenido ${nombre}`;
        } else {
            saludo.innerText = "Bienvenido usuario";
        }
        
    });

    //  let span =

    /* Capturar pesonajes + Asignarles a cada uno su evento correspondiente, 
    así como también su funcionalidad */

    /* Asignarle evento a la variable boton */
    //  let boton =
});
