const read = require('prompt-sync')();
/* let n = 1;
while (n <= 5){
    console.log(`Luis`);
    n++;
} 
console.log('Fin del ciclo'); */

/* let i = 0;
let n = 14
while (i < 3) {
    console.log('Es multiplo');
    i++;
} */
function multiplosde7(n){
    let i =1;
    while(i <= n){
        if(i % 7 == 0){
            console.log(i);
        }
    }
    i++;
}
multiplosde7(10);
console.log('hola');