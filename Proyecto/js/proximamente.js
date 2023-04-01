"use strict";

window.addEventListener("DOMContentLoaded", () => {
    const apiKey = "068c11e1952149f3e26da6fafc7231c0"; //mi_clave_de_API_de_TMDb
    const baseUrl = "https://api.themoviedb.org/3";
    const fileSize = "https://image.tmdb.org/t/p/w500/";
    const busquedaProximamente = `${baseUrl}/movie/upcoming?api_key=${apiKey}`;

    // Hacer una solicitud GET a la API de TMDb para obtener información sobre una película
    fetch(busquedaProximamente)
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
                                <a href="#"> Añadir a Favoritos </a>
                            </figure>`;
            });
            contenedor.innerHTML = codigo;

            // console.log(data);
            // console.log(`Título: ${data.results.title}`);
            // console.log(
            //     `Póster: https://image.tmdb.org/t/p/w500/${data.poster_path}`

            //     // const miElemento = document.querySelector('#mi-elemento');
            //     // miElemento.setAttribute('src', 'nueva-imagen.jpg');
            // );
        })

        .catch((error) => {
            // Manejar errores de la solicitud
            console.error(error);
        });
});
