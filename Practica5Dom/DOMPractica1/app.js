alert("Bienvenidos a mi sitio.")
if (confirm("“¿Está seguro de querer avanzar?”.")){
    let titulo = document.querySelector("h2");
    titulo.innerText = "Que alegria que quieras continuar tu visita.";
    let nombre = prompt('Introduzca su nombre:');
    let titulo2 = document.querySelector("h1");
    titulo2.innerText = `Bienvenido ${nombre}`;
    let edad = prompt('Introduzca su edad');
    if (edad > 17){

    }
    else {
        let ocultada = document.querySelector('.container-general')
        ocultada.style.display = 'none'
        let mostrada = document.querySelector('#accesoDenegado')
        mostrada.style.display = 'block'

    }

    }

else {
    titulo.innerText = "Lamentamos que no quieras continuar tu visita." 
}

