'use strict'

window.addEventListener('DOMContentLoaded', () => {

    // const searchResult = document.querySelector('.search-results')

    const queryString = location.search
    const queryStringObject = new URLSearchParams(queryString)
    const textoBusqueda = queryStringObject.get('q')
    const endpointBusqueda = `https://rickandmortyapi.com/api/character/?name=${textoBusqueda}`

    console.log(textoBusqueda)

    fetch(endpointBusqueda)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {

        const searchResult = document.querySelector('.search-results')
        let characters = "";


        data.results.forEach(function (character) {
            characters += `
                <article>
                    <img src=${character.image} alt='' />
                    <p>Name: ${character.name} </p>
                    <p>Status: ${character.status} </p>
                </article>
            `;

        });

        searchResult.innerHTML = characters;

    })
    .catch(function (error) {
        console.log(error);
    });

})