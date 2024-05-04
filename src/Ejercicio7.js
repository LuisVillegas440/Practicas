/* Solicitar al usuario el precio de venta de un vehículo nuevo y su año de fabricación. Si el año de fabricación es anterior a 2010, aplicar un descuento del 10% sobre el precio de venta y mostrar el precio final. */
const read = require("prompt-sync")();
let precio_vehiculo_s = read("Ingresar precio del vehiculo: ");
let precio_vehiculo = parseFloat(precio_vehiculo_s);
const ano_s = read("Ingresar anio del vehiculo: ");
const ano = parseFloat(ano_s);
let descuento = 0;
if (ano <= 2010) {
  descuento = (precio_vehiculo * 10) / 100;
}
precio_vehiculo = precio_vehiculo - descuento;
console.log("Precio final:", precio_vehiculo);
