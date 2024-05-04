/* Pedir al usuario el subtotal de una factura, el procentaje del IVA aplicar y el porcentaje de descuento siempre y cuando el subtotal de la factura exceda de 100$.
 Luego, calcular y mostrar el subtotal, el descuento, el IVA y el monto total. */
const read = require("prompt-sync")();
const subtotal_s = read("Ingresar el subtotal: ");
const subtotal = parseFloat(subtotal_s);
const iva_s = read("Ingresar el iva a aplicar: ");
const iva_aplicar = parseFloat(iva_s);
let descuento_aplicar = 0;
if (subtotal > 100) {
  let descuento_s = read("Ingresar descuento: ");
  let porcentaje_descuento_aplicar = parseFloat(descuento_s);
}
const iva = (subtotal * iva_aplicar) / 100;
const descuento = (subtotal * descuento_aplicar) / 100;
const total_final = subtotal + iva - descuento;
console.log("Este es el subtotal:", subtotal);
console.log("Este es el descuento:", descuento);
console.log("Este es el iva aplicado:", iva);
console.log("Este el monto total final:", total_final);
