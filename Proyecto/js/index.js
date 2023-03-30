"use strict";

window.addEventListener("DOMContentLoaded", () => {
    let endpoint =
        "https://api.themoviedb.org/3/movie/550?api_key=068c11e1952149f3e26da6fafc7231c0";

    fetch(endpoint)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
        .catch(function (error) {
            console.log("El error es: " + error);
        });
});
