// getters y setters con herencia y clases
// clase padre con propiedades y metodo get/set
class Propietario {
    constructor(nombre, dirección, telefono) {
        this.nombre = nombre;
        this.dirección = dirección;
        this.telefono = telefono;
    }

    // metodo de clase Propietario
    datosPropietario() {
        return `salida del metodo: ${this.nombre}, su dirección: ${this.dirección} y su telefono: ${this.telefono}`;
    }

}

// Clase hija hereda de class Propietario, tiene propiedades y metodos propios
class Animal extends Propietario {
    constructor(nombre, dirección, telefono, tipo) {
        super(nombre, dirección, telefono);
        this._tipo = tipo;
    }

// metodo de clase Animal
    datosAnimal() {
    return `tipo de animal: ${this.tipo}`;
}

    get tipo() {
        return this._tipo;
    }

}

// clase hija que  hereda de class Animnal, tiene propiedades y metodos propios

class Mascota extends Animal {

    constructor(nombre, dirección, telefono, tipo, nombremascota, enfermedad) {
        super(nombre, dirección, telefono, tipo);
        this._nombremascota = nombremascota;
        this._enfermedad = enfermedad;
    }

// metodo de clase Animal
    datosMascota() {
    return `nombre mascota: ${this.nombremascota} y motivo consulta: ${this.enfermedad}`;
}

    get tipo() {
        return this._tipo;
    }

    get nombremascota() {
        return this._nombremascota;
    }

    set nombremascota(nombrenuevo) {
        this._nombremascota = nombrenuevo;
    }

    
}

// instanciamos a las clases hijas de class Propietario
let motorCC = new CC('133DGH', 'GE', '2000W', 'CC', '220CC', 'Shunt');
let motorCA = new CA('7566DGD', 'ABB', '2HP', 'CA', 'Monofasico', '50Hz');