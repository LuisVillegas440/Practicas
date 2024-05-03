/* Pedir al usuario el nombre de un estudiante y sus tres notas. Calcule el promedio de sus tres notas, Si el promedio es menor de 70,
el profesor aplico una ayuda de un 5% al total de las notas y lo sumo al promedio
Debera mostrar el nombre del estudiante, las tres notas y el promedio con un mensaje de aprobado o reprobado. 
Un estudiante aprueba si su nota promedio es superior o igual que a 70, de lo contrario es reprobado. */
const read = require("prompt-sync")();
//Pedimos el nombre del usuario
const nombre_estudiante = read("Ingresar nonbre de estudiante: ");
//Pedimos sus 3 notas
const nota_1s = read("Ingresar nota 1: ");
const nota_1 = parseFloat(nota_1s);
const nota_2s = read("Ingresar nota 2: ");
const nota_2 = parseFloat(nota_2s);
const nota_3s = read("Ingresar nota 3: ");
const nota_3 = parseFloat(nota_3s);
//Calculamos su promedio
const promedio_s = (nota_1 + nota_2 + nota_3) / 3;
const promedio = parseFloat(promedio_s);
console.log("Promedio es: ", promedio);
let ayuda = 0;
//Vemos si le damos la ayuda del 5%
if (promedio < 70) {
  ayuda = (promedio * 5) / 100;
}
const promedio_final = ayuda + promedio;
console.log("Nombre del estudiante:", nombre_estudiante);
console.log("Primera nota:", nota_1);
console.log("Segunda nota:", nota_2);
console.log("Tercera Nota:", nota_3);
if (promedio_final >= 70) {
  console.log("Usted ha aprobado con:", promedio_final);
} else {
  console.log("Usted ha reprobado con:", promedio_final);
}
