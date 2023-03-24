"use strict";

/* 8. Crea un objeto literal producto con las siguientes propiedades:

● nombre
● precio
● stock Implementa los siguientes métodos en el objeto producto:
● vender(cantidad): recibe una cantidad como parámetro y disminuye el
stock del producto en esa cantidad. Si la cantidad es mayor al stock
disponible, muestra un mensaje de error.
● agregarStock(cantidad): recibe una cantidad como parámetro y
aumenta el stock del producto en esa cantidad.
Prueba agregar y quitar stock utilizando los métodos correspondientes y muestra en consola el stock actualizado. */

const producto = {
    nombre: "Producto",
    precio: 100,
    stock: 10,
    vender(cantidad) {
        if (cantidad > this.stock) {
            console.log("No hay suficiente stock.");
        } else {
            this.stock -= cantidad;
        }
    },
    agregarStock(cantidad) {
        this.stock += cantidad;
    },
};

console.log(producto.stock); // 10
producto.vender(3);
console.log(producto.stock); // 7
producto.agregarStock(5);
console.log(producto.stock); // 12
