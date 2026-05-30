

function Reproductor() {
    this.cancion = {
        titulo: "getLucky",
        artista: "Daft Punk"
    };
    estado = "detenido";
    this.play = function () {
        if (estado === "detenido") {
            console.log(`Reproduciendo: "${this.cancion.titulo}" de ${this.cancion.artista}`);
            estado = "reproduciendo";
        }else if (estado === "pausado") {
            console.log(`Reproduciendo: "${this.cancion.titulo}" de ${this.cancion.artista}`);
            estado = "reproduciendo";
        } else {
            console.log(`La canción: "${this.cancion.titulo}" ya se está reproduciendo.`);
        };

    };
    this.pause = function () {        if (estado === "reproduciendo") {
            console.log(`Pausando: "${this.cancion.titulo}" de ${this.cancion.artista}`);
            estado = "pausado";
        } else if (estado === "pausado") {
            console.log(`La canción: "${this.cancion.titulo}" ya está pausada.`);
        } else {
            console.log(`La canción "${this.cancion.titulo}" no se está reproduciendo.`);
        };
    };
    this.detener = function () {
        if (estado === "reproduciendo" || estado === "pausado") {
            console.log(`Deteniendo: "${this.cancion.titulo}" de ${this.cancion.artista}`);
            estado = "detenido";
        } else {
            console.log(`La canción: "${this.cancion.titulo}" ya está detenida.`);
        };
    };

};

let reproductor = new Reproductor();

reproductor.play();
reproductor.pause();
reproductor.play();
reproductor.detener();
reproductor.detener();
reproductor.pause();