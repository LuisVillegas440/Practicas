/* Escribe	un	programa	en	C++	que	nos	diga	cuál	es	el	volumen	de	un	cono	con	un	
radio	de	la	base	de	14,5	y	una	altura	de	26,79.	La	fórmula	que	debes	usar	es:	
3
2   radio  altura
Recuerda	que	el	valor	(aproximado)	de	ԉ	es	3,141592. */
/* const read = require("prompt-sync")();
const nombre = read("Ingresar nombre: ");
console.log(`Hola ${nombre} que tal`); */

/* Escribe	 un	 programa	 en	 C++	 que	 lea	 del	 teclado	 un	 número	 (real)	 de	 grados	
Fahrenheit	y	lo	convierta	a	Celsius	mostrando	el	resultado	en	la	pantalla.	
ºC = 5 / 9 x (ºF ‐ 32) */
//= 5 / 9 x (ºF ‐ 32)
function convertir_f_c(grados_f) {
  const celsius = (5 / 9) * (grados_f - 32);
  return celsius;
}

function ejercicio12() {
  const read = require("prompt-sync")();
  const grados_f = read("Ingresar grado fahrenheit: ");
  const celsius = convertir_f_c(grados_f);
  console.log(
    `${grados_f} grados fahrenheit convertidos en grados celsius es: ${celsius}`
  );
} 
ejercicio12()