/* Solicitar al usuario el precio de un producto y el porcentaje de descuento aplicado. 
Calcular y mostrar el precio final luego de aplicar el descuento. */
const read = require('prompt-sync')();
const precio_s = read('Ingresar precio del producto: ');
const precio = parseFloat(precio_s);
const descuento_s = read('Ingresar descuento a aplicar: ');
const descuento = parseFloat(descuento_s);
const descuento_aplicado = (descuento / 100) * precio;
const precio_final = precio - descuento_aplicado;
console.log('El precio final es:', precio_final);


