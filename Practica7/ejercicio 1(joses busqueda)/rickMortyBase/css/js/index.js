let url = 'https://rickandmortyapi.com/api/character';

fetch(url)
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        //Acá ya tenemmos los datos finales y es donde debemos escribir nuestro código.
        console.log(data);
        let arrayDePersonajes = data.results;

        //1 Donde: Capturo el elemento html en donde quiero hacer una modificación
        let seccion = document.querySelector('.container');
        let allCharacters = [];

        //2 Qué: recorro la información de la api y la organizo para mostarla en el html
        for(let i=0; i<arrayDePersonajes.length; i++){
            //Dentro del for voy acumulando en la variable una estructura html por cada personaje del array.
            allCharacters += `<article>
                                <img src=${arrayDePersonajes[i].image} alt='${arrayDePersonajes[i].name}' />
                                <p>Name: ${arrayDePersonajes[i].name} </p>
                                <p>Status: ${arrayDePersonajes[i].status} </p>
                            </article>`
        }
        //Con toda la estructura html completa ahora la paso al DOM
        seccion.innerHTML = allCharacters;

    })
    .catch( function(e){
        console.log(e)
    })

//     Query String desde formularios
// Volvamos a la home del proyecto de clase en donde trajiste 20 personajes de
// Rick&Morty.
// ● Agregá en la página una sección que contenga un buscador, Te damos una pista
// de cómo armar el código. Sí, la pista es una captura de pantalla 😉. Escribir el
// código por vos mismo ayuda a afianzar conocimientos.

// ● Creá la página results.html. En ella deberás crear la estructura básica HTML y
// dentro del body colocar una sección con la clase “search-results”.
// ● Creá y vinculá el un archivo results.js al archivo results.html
// ● Dentro del archivo results.js captura el elemento “search-results”.
// ● Cuando el usuario envíe el formulario obtené y guardá en una variable el
// contenido de la query string que figura en el url de “results.html”. Luego
// procesalo siguendo los pasos de clase:
// ○ primero creá un objeto literal.
// ○ luego obtené la información del atributo “q” con el método .get(). No
// olvides de ir guardando la información en variables.

// ● Utilizá el valor de búsqueda que ingresó el usuario (sí, ese que guardaste en la
// última variable del paso anterior) para hacer un pedido fetch a la api de Rick And
// Morty al endpoint filter characters. La url para fetch() debería quedar parecida a
// esta
// https://rickandmortyapi.com/api/character/?name=loquevengadelformulario
// ● Una vez obtengas la respuesta de la API, mostrá dentro del elemento
// search-results los resultados obtenidos. Para cada uno de los resultados
// deberás usar la estructura html que usaste en home para mostrar un personaje:
// <article>
// <img src= _ _ _ _ _ alt='' />
// <p>Name: _ _ _ _ _ </p>
// <p>Status: _ _ _ _ _ </p>
// </article>