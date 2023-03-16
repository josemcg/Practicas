"use strict";

// Ejercicio 1

/* 1. Crear un array que contenga el árbol genealógico de una familia que incluya abuelos, padres, hijos y nietos con la siguiente estructura:
a. La primer posición tendrá los nombres de los abuelos
b. La segunda posición a los padres
c. La tercera a los hijos
d. La cuarta a los nietos


Además debe cumplir con las siguientes condiciones:
i. El array de los abuelos debe ser creado conteniendo a los abuelos.
ii. El array de los padres debe ser creado vacío y luego insertar a los padres.
iii. El array de los hijos debe ser creado conteniendo a los hijos.
iv. El array de los nietos debe ser creado vacio y luego insertar a los nietos.
v. Se debe imprimir en consola la cantidad de abuelos, padres,hijos y nietos.
vi. Imprimir en consola el primer abuelo, el primer padre, el primer
hijo y el primer nieto. */

let arbolGenealogico = [];

let abuelos = ["abuelo", "abuela"];

let padres = [];
padres.push("padre");
padres.push("madre");
padres.push("otro padre");

let hijos = ["hijo", "hija", "hijo2", "hijo3"];

let nietos = [];
nietos.push("nieto");
nietos.push("nieta");

arbolGenealogico = [abuelos, padres, hijos, nietos];

console.log(arbolGenealogico);

console.log(`El numero de abuelos es ${abuelos.length}`);
console.log(`El numero de padres es ${padres.length}`);
console.log(`El numero de hijos es ${hijos.length}`);
console.log(`El numero de nietos es ${nietos.length}`);

console.log(arbolGenealogico[0][0]);
console.log(arbolGenealogico[1][0]);
console.log(arbolGenealogico[2][0]);
console.log(arbolGenealogico[3][0]);
