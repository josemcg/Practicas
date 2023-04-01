"use strict";

window.addEventListener("DOMContentLoaded", () => {
    const apiKey = "068c11e1952149f3e26da6fafc7231c0";
    const fileSize = "https://image.tmdb.org/t/p/w500/";

    const queryString = location.search;
    const queryStringObject = new URLSearchParams(queryString);
    const textoBusqueda = queryStringObject.get("busqueda");

    const endPointBusqueda = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=es-ES&query=${textoBusqueda}&page=1&include_adult=false`;

    fetch(endPointBusqueda)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            let searchResults = document.querySelector(".contenedorTarjetas");
            console.log(searchResults);
            let titulo = document.querySelector("h1");
            let peliculas = "";

            data.results.forEach(function (pelicula) {
                peliculas += `
                                <figure>
                                <a href="#">
                                    <img src="${fileSize}${pelicula.poster_path}" alt="" />
                                </a>
                                <figcaption>${pelicula.title}</figcaption>
                                <p>${pelicula.release_date}</p></br>
                                <a href="#"> Añadir a Favoritos </a>
                            </figure>
                `;
                searchResults.innerHTML = peliculas;
            });
            console.log(searchResults);
            titulo.innerText = `Búsqueda: "${textoBusqueda}"`;
            //searchResults.innerHTML = peliculas;
        })

        .catch(function (error) {
            console.log(error);
        });
});
