// Creamos clase para Impuesto
export default class Impuesto {

    // Definimos el constructor con sus atributos
    constructor(montoBrutoAnual, deducciones) {
        this._montoBrutoAnual = montoBrutoAnual;
        this._deducciones = deducciones
    }

    // Realizamos Getters de ambos atributos
    get montoBrutoAnual() {
        return this._montoBrutoAnual;
    }

    get deducciones() {
        return this._deducciones;
    }

    // Realizamos Setters de ambos atributos
    set montoBrutoAnual(nuevoMonto) {
        this._montoBrutoAnual = nuevoMonto;
    }

    set deducciones(nuevasDeducciones) {
        this._deducciones = nuevasDeducciones;
    }
}