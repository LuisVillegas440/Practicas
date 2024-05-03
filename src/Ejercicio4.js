const read = require("prompt-sync")();
const num = read("Ingresar numero: ");
if ((num % 2 == 0) & (num % 3 == 0) || (num % 5 == 0) & (num % 2 == 0)) {
  console.log("El numero es homogeneo");
} else {
  console.log("El numero no es homogeneo");
}
