"use strict";

window.addEventListener("DOMContentLoaded", () => {
    let diaSemana = prompt("que dia de la semana es?");

    if (diaSemana === "domingo") {
        let pRespuesta = document.querySelector(".respuesta");
        pRespuesta.innerText = "Pongamos la olla, hoy se come pasta!";
    } else {
        let pRespuesta = document.querySelector(".respuesta");
        pRespuesta.innerText = "Mejor lo dejamos para el domingo";
    }
});
