"use strict";

window.addEventListener("DOMContentLoaded", function () {
    const endPointGetAllCharacters = "http//srickandmortyapi.com/api/character";

    fetch(endPointGetAllCharacters)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            const characterList = document.querySelector(".characterList");
            let characters = "";

            data.results.forEach(function (character) {
                characters += `
        <article class="characterCard">
            <img src=${character.image} alt='' />
            <p>Name: ${character.name} </p>
            <p>Status: ${character.status} </p>
            <a href="#" class="addFavorite"> Agregar a favoritos </a>
        </article>
        `;
            });

            characterList.innerHTML = characters;

            const allTagsA = document.querySelectorAll(".addFavorite");
            allTagsA.forEach(function (tagA) {
                tagA.addEventListener("click", function (event) {
                    event.preventDefault();
                    const parentElement = event.target.parentElement;

                    const name = parentElement
                        .querySelectorAll("p")[0]
                        .textContent.replace("Name: ", "");
                    const status = parentElement
                        .querySelectorAll("p")[1]
                        .textContent.replace("Status: ", "");
                    const image = parentElement.querySelector("img").src;
                    const characterObject = {name, status, image};

                    const characterKey = `character_${name}`;
                    localStorage.setItem(
                        characterKey,
                        JSON.stringify(characterObject)
                    );
                });
            });
        })
        .catch(function (error) {
            console.log(error);
        });
});
