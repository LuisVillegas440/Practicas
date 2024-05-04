/* La asociación de vinicultores tiene como política fijar un precio inicial al kilo de banano, la cual se clasifica en tipos A y B, y además en tamaños 1 y 2. Cuando se realiza la venta del producto, ésta es de un solo tipo y tamaño, se requiere determinar cuánto recibirá un productor por el banano que entrega en un embarque, considerando lo siguiente:
Si es de tipo A, se le cargan $2 al precio inicial cuando es de tamaño 1; y $3 si es de tamaño 2.
Si es de tipo B, se rebajan $3 cuando es de tamaño 1, y $5 cuando es de tamaño 2.
Realice un algoritmo para determinar la ganancia obtenida. */
const read = require("prompt-sync")();
const precio_incial_s = read("Ingresar precio inicial del kilo del banano: ");
const precio_incial = parseFloat(precio_incial_s);
const tipo = read("Ingresar si es de tipo A o B: ");
const tamano_s = read("Ingresar si es de tamano 1 o 2: ");
const tamano = parseInt(tamano_s);
let precio_final = 0;
if (tipo == "A") {
  if (tamano == 1) {
    precio_final = precio_incial + 2;
  } else {
    precio_final = precio_incial + 3;
  }
} else {
  if (tipo == "B") {
    if (tamano == 1) {
      precio_final = precio_incial - 3;
    } else {
      precio_final = precio_incial - 5;
    }
  }
}
console.log("Precio final por el kilo del banano es:", precio_final);
