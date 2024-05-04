/* Realice un algoritmo para determinar la ganancia obtenida.
“Somos más” es una empresa dedicada a ofrecer banquetes; sus tarifas son las siguientes:
El costo de platillo por persona es de $20.00, pero si el número de personas es mayor a 100 pero menor o igual a 200, el costo es de $15.00.  Para más de 200 personas el costo por platillo es de $10.00.
Se requiere un algoritmo que ayude a determinar el presupuesto que se debe presentar a los clientes que deseen realizar un evento, considerando que al total hay que agregarle el 15% del iva
 */
const read = require("prompt-sync")();
const personas_s = read("Cuantas personas iran: ");
const personas = parseInt(personas_s);
let costo_platillo = 20;
if (personas > 100) {
  if (personas <= 200) {
    costo_platillo = 15;
  } else {
    costo_platillo = 10;
  }
}
const subtotal = personas * costo_platillo;
const iva = (subtotal * 15) / 100;
const total = subtotal + iva;
console.log('EL presupuesto final, incluyendo el iva es:', total);
