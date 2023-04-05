"use strict";

window.addEventListener("DOMContentLoaded", function () {
    const baseUrl = "https://api.themoviedb.org/3";
    const apiKey = "068c11e1952149f3e26da6fafc7231c0";
    const fileSize = "https://image.tmdb.org/t/p/w500/";

    const idsString = localStorage.getItem("id");
    const arrayIds = JSON.parse(idsString);
    let codigo = "";
    const contenedor = document.querySelector(".contenedorTarjetas");
    let endPointPopular = `${baseUrl}/movie/popular?api_key=${apiKey}`;
    fetch(endPointPopular)
        .then(function (response) {
            return response.json();
        })

        .then(function (data) {
            console.log(data);
            data.results.forEach((pelicula) => {
                arrayIds.forEach(function (favorita) {
                    if (favorita.includes(pelicula.id)) {
                        console.log("ha entrado");
                        codigo += `<figure>
                                <a href="detalles.html?id=${pelicula.id}">
                                    <img src="${fileSize}${pelicula.poster_path}" alt="" />
                                </a>
                                <figcaption>${pelicula.title}</figcaption>
                                <p>${pelicula.release_date}</p></br>
                            </figure>`;
                    }
                });
            });
            contenedor.innerHTML = codigo;
        })
        .catch(function (error) {
            console.log("El error es: " + error);
        });
});
