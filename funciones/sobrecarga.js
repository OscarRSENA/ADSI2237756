// Hoisting, llamamiento de funcion antes de ser declarada

console.log(suma(3+5))

function suma(a, b){
    return a + b;
}
function suma(a, b, c){
    return "La suma de los tres numeros es:"+ (a + b + c);
}
function suma(){
    return "Funcion sin parametros";
}

// La sobrecarga no es podible debido a que no existe la restriccion de numero de parametros en las funciones de js

