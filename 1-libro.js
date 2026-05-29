const prompt = require('prompt-sync')();


function Libro(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
    prestado = false;
    
    this.prestar = function () {
        if (!prestado) {
            prestado = true;
            console.log(`El libro "${this.titulo}" ha sido prestado.`);
        } else {
            console.log(`El libro "${this.titulo}" esta disponible.`);
            prestado = false;
        }
    };


}

const libro1 = new Libro("El Arte de la Guerra", "Sun Tzu");
const libro2 = new Libro("Meditaciones", "Marco Aurelio");

console.log(`Libro 1: ${libro1.titulo} por ${libro1.autor}`);
console.log(`Libro 2: ${libro2.titulo} por ${libro2.autor}`);

libro1.prestar();
libro1.prestar();
libro1.prestar(); 

libro2.prestar();
libro2.prestar();