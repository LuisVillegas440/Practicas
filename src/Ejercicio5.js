/* Pedir al usuario el monto total de una factura y el porcentaje de IVA aplicado. 
Luego, calcular y mostrar el monto total a pagar incluyendo el IVA.
 */
const read = require("prompt-sync")();
const monto_s = read("Ingresar monto: ");
const monto = parseFloat(monto_s);
const iva_s = read("Ingresar iva: ");
const iva = parseFloat(iva_s);
const impuesto = (monto * iva) / 100;
const monto_total = monto + impuesto;
console.log("El monto total incluyendo iva es:", monto_total);
