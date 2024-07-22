// Importamos clases al js del index
import Impuesto from "./assets/js/clases/Impuesto.js";
import Cliente from "./assets/js/clases/Cliente.js";

// Crear instancia de Impuesto con valores númericos
let impuesto1 = new Impuesto(1000, 300)
//Crear instancia de Cliente con nombre e impuesto instanciado anterirmente
let cliente1 = new Cliente("Juan", impuesto1);

// Ejecutar funciones para calcular impuestos
cliente1.calcularImpuesto();
console.log(cliente1.calcularImpuesto());