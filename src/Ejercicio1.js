/* Pida al usuario que ingrese un numero y determine si es un numero especial o no. 
Un numero es especial cuando es solo divisible por 3, 7 y 11 */
const read = require("prompt-sync")();
const num = read("Ingresar numero: ");
if ((num % 3 == 0) & (num % 7 == 0) & (num % 11 == 0)) {
  console.log("El numero es especial");
} else {
  console.log("EL numero no es especial");
}
