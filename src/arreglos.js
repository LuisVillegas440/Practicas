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
/* const subtotal_s = read("Ingrese el subtotal: ");
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
console.log("Monto total:", monto_total);  */

// 1)Ejercicio 1
let numeros = [];

for (let i = 0; i < 5; i++) {
    let numero = parseInt(read(`Ingresa el número ${i + 1}:`));
    numeros.push(numero);
}

console.log("Los números ingresados son:");
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}  

//2)Ejercicio 2
/* let numeros = [];

for(let i = 0; i < 10; i++){
  let numero = parseInt(read(`Ingresar el numero ${i + 1}:`));
  numeros.push(numero);
}

//console.log(`Los numeros ingresados son: ${numeros}`);

for(let i = 0; i < numeros.length; i++){
  if(i % 2 ==0){
    console.log(`${i} es un numero par`);
  }
} */

//3)Ejercicio 3
/* let numeros = [];

for(let i = 0; i < 8; i++){
  let numero = parseInt(read(`Ingresar el numero ${i + 1}:`));
  numeros.push(numero);
} 
let suma = 0;

for(let i = 0; i < numeros.length; i++){
  suma += numeros[i];
}
console.log('la suma es',suma);
 */

//4)Ejercicio

/* let numeros = [];

for(let i = 0; i < 6; i++){
  let numero = parseInt(read(`Ingresar el numero ${i + 1}:`));
  numeros.push(numero);
}

let suma = 0;
for(let i = 0; i < numeros.length; i++){
  suma+= numeros[i];
}
let promedio = suma/numeros.length;
console.log(promedio); */

//5)Ejercicio 5

/* let numeros = [];

for(let i = 0; i < 7; i++){
  let numero = parseInt(read(`Ingresar el numero ${i + 1}:`))
  numeros.push(numero);
}

let mayor = numeros[0];
let menor = numeros[0];

for(let i = 1; i < numeros.length; i++){
  if(numeros[i] > mayor){
    mayor = numeros[i];
  }if (numeros[i] < menor) {
    menor = numeros[i];
  }
}
console.log(`El numero mayor es: ${mayor}`);
console.log(`El numero menor es: ${menor}`);
 */

//6)Ejercicio 6

/* let numeros = [];

for(let i = 0; i < 10; i++){
  let numero = parseInt(read(`Ingresar el numero ${i + 1}:`));
  numeros.push(numero);
}

let positivos = [];
let negativos = [];

//let positvo = numeros[0];
for(let i = 0; i < numeros.length; i++){
  if (numeros[i] > 0){
    //positivos.push(numeros[i]);
    console.log(`Es positivo ${numeros[i]}`);
  }
  
}
for(let i = 0; i < numeros.length; i++){
  if (numeros[i] < 0){
    //negativos.push(numeros[i]);
    console.log(`Es negativo${numeros[i]}`);
  }
  
}
//console.log(`Los numeros positivos:${positivos}`);
//console.log(`Los numeros negativos:${negativos}`);
 */

//7)Ejercicio 7

/* let numeros = [];

for(let i = 0; i < 8; i++){
  let numero = parseInt(read(`Ingresar numero${i + 1}:`));
  numeros.push(numero);
}
const numeroBuscado = read('Que numero quiere sacar del arreglo?:');

let contador = 0;
for(let i = 0; i < numeros.length; i++){
  if (numeros[i] == numeroBuscado ){
    contador++;
  }
}
console.log(`El numero ${numeroBuscado} aparece ${contador} veces en el arreglo`); */

//8)Ejercicio 8

/* let numeros = [];

for(let i = 0; i < 5; i++){
  let numero = parseInt(read(`Ingresar numero ${i + 1}:`));
  numeros.push(numero);
}
//const reverse = numeros.reverse();
//console.log(reverse);
let inverso = [];

for(let i = numeros.length - 1; i >= 0; i--){
  inverso.push(numeros[i]);
}  
console.log(inverso); */

//9)Ejercicio 9

/* let numeros = [];

for(let i = 0; i < 8; i++){
  let numero = parseInt(read(`Ingresar un numero ${i + 1}:`));
  numeros.push(numero);
}

const  valorEspecifico = read('Ingresar un valor especifico:');

let numerosMayores = [];

for (let i = 0; i < numeros.length; i++) {
  if(numeros[i] > valorEspecifico){
    //console.log(`Estos son los valores mayores:${numeros[i]} de ${valorEspecifico}`);
    numerosMayores.push(numeros[i]);
  }
}
console.log(numerosMayores); */

//10)Ejercicio 10

/* let numeros = [];

for(let i = 0; i < 5; i++){
  let numero = parseInt(read(`Ingresar numero${i + 1}:`));
  numeros.push(numero);
}

let ceros = [];

for(let i = 0; i < numeros.length; i++){
  if (numeros[i].toString().includes('0')){
    ceros.push(numeros[i]);
  }
}
console.log(`Numeros que contienen ceros ${ceros}`) 
 */


