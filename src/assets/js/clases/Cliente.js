// Creamos clase para Cliente
export default class Cliente {

    // Definimos el constructor con sus atributos
    constructor(nombre, impuesto) {
        this._nombre = nombre;
        this.impuesto = impuesto;
    }

    // Realizamos Getter del atributo nombre
    get nombre() {
        return this._nombre;
    }

    // Realizamos Setter del atributo nombre
    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }

    /* Usamos la Fórmula: ((montobrutoAnual − deducciones) * 0.21%) */
    calcularImpuesto() {
        let totalImpuesto = (this.impuesto._montoBrutoAnual - this.impuesto._deducciones) * 0.21;
        return `Estimado ${this._nombre} el total de su impuesto a pagar es de ${totalImpuesto}`
    }
}
