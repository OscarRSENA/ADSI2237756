// NO TIENE PARAMETROS - Con solo una linea de codigo no es necesario añadir los corchetes al igual que el return.
const x=()=> "Hola";

console.log(x());
// TIENE SOLO UN PARAMETRO - se pueden obviar los parentesis
const y=nombre=> `Hola ${nombre}`;

console.log(y("Oscar"));
// TIENE DOS PARAMETROS

const z=(nombre, apellido)=> `Hola ${nombre} ${apellido}`;

console.log(z("Oscar", "Rodriguez"));

// CONDICIONAL TERNARIO
var a = 1, b = 100
a>b?console.log("a es el numero mayor"):console.log("b es el numero mayor")

//FLECHA Y TERNARIO

const rta=(v,n)=>v%n == 0||n%v == 0?"Son factor": "No son factor";
console.log(rta(20,5));

// Ejercicios
// numero es  o no es primo
// solicitar un valor que representeuna cantidad de dinero y un porcentaje de  descuento indicar el valor a pagar aplicando el descuento
// solicitar una fecha determinar si la fecha es anterior actual o posterior al dia que se ejecute el programa (date js)
