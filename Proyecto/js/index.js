"use strict";

window.addEventListener("DOMContentLoaded", () => {
    const apiKey = "068c11e1952149f3e26da6fafc7231c0"; //mi_clave_de_API_de_TMDb
    const baseUrl = "https://api.themoviedb.org/3";
    const fileSize = "https://image.tmdb.org/t/p/w500/";
    const busquedaPopular = `${baseUrl}/movie/popular?api_key=${apiKey}`;

    // Hacer una solicitud GET a la API de TMDb para obtener información sobre una película
    fetch(busquedaPopular)
        .then((response) => response.json())
        .then((data) => {
            // Utilizar la información de la respuesta JSON
            let codigo = "";
            const contenedor = document.querySelector(".contenedorTarjetas");

            data.results.forEach((pelicula) => {
                codigo += `<figure>
                                <a href="detalles.html?id=${pelicula.id}">
                                    <img src="${fileSize}${pelicula.poster_path}" alt="" />
                                </a>
                                <figcaption>${pelicula.title}</figcaption>
                                <p>${pelicula.release_date}</p></br>
                                <p class="ocultar"> ${pelicula.id}</p>
                                <a href="#" class="addFavorite"> Añadir a Favoritos </a>
                            </figure>`;
            });
            contenedor.innerHTML = codigo;

            var arrayIds = [];
            let idsString = "";
            const allTagsA = document.querySelectorAll(".addFavorite");
            allTagsA.forEach(function (tagA) {
                tagA.addEventListener("click", function (event) {
                    event.preventDefault();
                    const previousSibling = tagA.previousElementSibling;

                    if (arrayIds.includes(previousSibling.innerText)) {
                        console.log("ya esta en favoritos");
                        console.log(idsString);
                    } else {
                        arrayIds.push(previousSibling.innerText);
                        console.log(arrayIds);
                        console.log(localStorage);
                    }
                    idsString = JSON.stringify(arrayIds);
                    console.log(arrayIds);
                    console.log(idsString);
                    localStorage.setItem("id", idsString);
                    console.log(localStorage);
                });
            });
        })

        .catch((error) => {
            // Manejar errores de la solicitud
            console.error(error);
        });
});
