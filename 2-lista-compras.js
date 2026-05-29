const prompt = require('prompt-sync')();

function ListaCompras() {
    this.productos = [];

    this.agregar = function (producto) {
        this.productos.push(producto);
        console.log(`Se ha agregado "${producto}" a la lista de compras.`);
    };

    this.mostrar = function () {
        console.log("Lista de Compras:");

        for (let producto of this.productos) {
           let i = parseInt(this.productos.indexOf(producto));
        console.log(`${i + 1}. ${this.productos[i]}`);
        }
    };
}

const lista = new ListaCompras();
/*
let producto = prompt("Ingrese un producto para agregar a la lista de compras (o '0' para terminar): ");


while (true) {
    
    if(producto == '0') {
       break;
}else {   
     lista.agregar(producto);
    producto = prompt("Ingrese un producto para agregar a la lista de compras (o '0' para terminar): ");
}
}   
*/
 
lista.agregar("Leche");
lista.agregar("Pan");
lista.agregar("pollo");


lista.mostrar();


