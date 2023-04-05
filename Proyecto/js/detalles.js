"use strict";

window.addEventListener("DOMContentLoaded", () => {
    const queryString = location.search;
    const queryStringObject = new URLSearchParams(queryString);
    const id = queryStringObject.get("id");

    const apiKey = "068c11e1952149f3e26da6fafc7231c0";
    const fileSize = "https://image.tmdb.org/t/p/w500/";
    const endPointBusquedaId = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=es-ES`;

    fetch(endPointBusquedaId)
        .then(function (response) {
            return response.json();
        })

        .then(function (data) {
            console.log(data);
            let contenedor = document.querySelector(".contenedorTarjetas");
            let titulo = document.querySelector("h1");
            let pintarEnHtml = `
            <figure>
                <a href="#">
                    <img src="${fileSize}${data.poster_path}" alt="" />
                </a>
                <figcaption>${data.title}</figcaption>
                    <p>${data.release_date}</p></br>
                    <p class="sinopsis">Sinopsis</p>
                    <p>${data.overview}</p>
            </figure>`;
            contenedor.innerHTML = pintarEnHtml;
            titulo.innerText = data.title;
        })

        .catch(function (error) {
            console.log("El error es: " + error);
        });
});
