/* Pedir al usuario el subtotal de una factura, el porcentaje del iva aplicar y el porcentaje de descuento siempre y cuando el subtotal de la factura exceda de 100$.
Luego, calcular y mostrar el subtotal, el descuento, el iva y el monto total */

/* Pedir subtotal
Pedir el iva que se va a aplicar
subtotal * iva (15=1.15)
Pedir el descuento
sacar descuento = el porcentaje % 100 * precio
Y si el subtotal sobre pasa la factura de 100$ se le aplica descuento
Caculamos el subtotal con el iva
Y si sobre pasa los 100 se le aplica el descuento
Y mostramos el monto total con todo aplicado */

const read = require("prompt-sync")();
// Pedir informacion
const subtotal_s = read("Ingrese el subtotal: ");
const porcentaje_iva_s = read("Ingrese el porcentaje de IVA a aplicar: ");
const subtotal = parseFloat(subtotal_s);
const porcentaje_iva = parseFloat(porcentaje_iva_s);
let porcentaje_descuento = 0;
// Validar si aplica descuento
if (subtotal > 100) {
  const porcentaje_descuento_s = read("Ingrese el porcentaje de descuento: ");
  porcentaje_descuento = parseFloat(porcentaje_descuento_s);
}
// Realizar cálculos
const iva = (subtotal * porcentaje_iva) / 100;
const descuento = (subtotal * porcentaje_descuento) / 100;
const monto_total = subtotal + iva - descuento;
// Presentar resultados
console.log("Subtotal:", subtotal);
console.log("IVA:", iva);
console.log("Descuento:", descuento);
console.log("Monto total:", monto_total);
