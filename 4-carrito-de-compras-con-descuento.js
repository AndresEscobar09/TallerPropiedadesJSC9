

function Carrito() {
    this.productos = [];
    total = 0;
    
    this.agregarProducto = function (producto,precio) {
        this.productos.push({nombre: producto, precio: precio});
        console.log(`Producto agregado: ${producto} - Precio: $${precio}`);
        
    };
    this.calcularDescuento = function () {
        
        total = 0;

        for (let i = 0; i < this.productos.length; i++) {
            total += this.productos[i].precio;
            //console.log(`Producto: ${this.productos[i].nombre} - Precio: $${this.productos[i].precio}`);
        };

        console.log(`Total sin descuento: $${total}`);

        if (total < 100 && total > 50) {
            console.log(`descuento: 5% ${total * 0.05}`);
            console.log(`Total con descuento: $${total - (total * 0.05)}`);
        } else if (total >= 100) {
            console.log(`descuento: 10% ${total * 0.1}`);
            console.log(`Total con descuento: $${total - (total * 0.1)}`);
        } else {
            console.log('sin descuento');
            console.log(`Total: $${total}`);
        }
    };
}

let carrito1 = new Carrito();
let carrito2 = new Carrito();
let carrito3 = new Carrito();

carrito1.agregarProducto("Camisa", 30);
carrito1.agregarProducto("Pantalón", 40);
carrito1.agregarProducto("Zapatos", 50);

carrito1.calcularDescuento();

/*
console.log(`Total sin descuento: $${total}`);
console.log(`Descuento aplicado: $${carrito1.calcularDescuento()}`);
console.log(`Total con descuento: $${total - carrito1.calcularDescuento()}`);
*/

carrito2.agregarProducto("Vestido", 10);
carrito2.agregarProducto("Bolso", 20);
carrito2.agregarProducto("Gafas", 15);

carrito2.calcularDescuento();
/*
console.log(`Total sin descuento: $${total}`);
console.log(`Descuento aplicado: $${carrito2.calcularDescuento()}`);
console.log(`Total con descuento: $${total - carrito2.calcularDescuento()}`);
*/
carrito3.agregarProducto("Reloj", 90);

carrito3.calcularDescuento();

/*
console.log(`Total sin descuento: $${total}`);
console.log(`Descuento aplicado: $${carrito3.calcularDescuento()}`);
console.log(`Total con descuento: $${total - carrito3.calcularDescuento()}`);
*/