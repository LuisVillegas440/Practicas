/* Pedir al usuario su sueldo mensual y determinar su sueldo anual. 
Si el sueldo anual supera los $30,000, aplicar un impuesto del 15% sobre el excedente y mostrar el sueldo neto anual. */
const read = require('prompt-sync')();
const sueldo_mensual_s = read('Ingresar sueldo mensual: ');
const sueldo_mensual = parseFloat(sueldo_mensual_s);
let sueldo_anual = sueldo_mensual * 12;
let iva = 0;
if (sueldo_anual > 30000) {
    iva = (sueldo_anual * 15) / 100;
}
sueldo_anual = sueldo_anual - iva;
console.log('Su sueldo neto anual es:', sueldo_anual);

