"use strict";


//4


/* a. Imprime por consola la lista de temas incluídos dentro del siguiente array. Tené en cuenta de hacer que nuestro código se mantenga vigente aún en caso de sacar o agregar elementos al array. */

//a

let healingIsDifficult = [
    "Fear",
    "Drink to Get Drunk",
    "Taken for Granted",
    "Blow It All Away",
    "Get Me",
    "Im Not Important to You",
    "Sober and Unkissed",
    "Healing Is Difficult",
    "Judge Me",
    "Little Man",
    "Insidiously",
];

for (let i = 0; i < healingIsDifficult.length; i++) {
    console.log(healingIsDifficult[i]);
}



/* b. Imprime el mismo array anterior pero ahora modifica el código para que indique también el número de orden del track. Deberías obtener: */

//b

for (let i = 0; i < healingIsDifficult.length; i++) {
    console.log(i + " " + healingIsDifficult[i]);
}