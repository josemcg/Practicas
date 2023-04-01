"use strict";

window.addEventListener("DOMContentLoaded", function () {
    const queryString = location.search;
    const queryStringObject = new URLSearchParams(queryString);

    const apiKey = "068c11e1952149f3e26da6fafc7231c0";
    const fileSize = "https://image.tmdb.org/t/p/w500/";
    let ids = "";
    const idsString = localStorage.getItem("id");
    const arrayIds = JSON.parse(idsString);

    for (let i = 0; i < arrayIds.length; i++) {
        if (i === arrayIds.length - 1) {
            ids += arrayIds[i];
        } else {
            ids += `${arrayIds[i]},`;
        }
    }

    let endPointMultiId = `https://api.themoviedb.org/3/multi/${ids}?api_key=${apiKey}&language=es-ES`;

    fetch(endPointMultiId)
        .then(function (response) {
            return response.json();
        })

        .then(function (data) {
            let contenedor = document.querySelector(".contenedorTarjetas");
            let pintarEnHtml = `
                        <figure>
                            <a href="#">
                                <img src="${fileSize}${data.poster_path}" alt="" />
                            </a>
                            <figcaption>${data.title}</figcaption>
                            <p>${data.release_date}</p></br>
                            <p>Resumen: ${data.overview}</p>
                        </figure>`;
            contenedor.innerHTML = pintarEnHtml;
        })
        .catch(function (error) {
            console.log("El error es: " + error);
        });
});
