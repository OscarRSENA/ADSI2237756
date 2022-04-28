console.log("funciones en js");
function saludo(){
    return "Hola";
}
s
var s = " Un gusto saludarle"

console.log(saludo() + s);

// Funcion con argumentos
function saludo(nombre){
    return `Hola ${nombre}`;
}
console.log(saludo("Oscar"));

// Escriba una funcion que reciba dos numeros y determine cual de ellos es mayor, si son iguales indiquelo en un mensaje de

function mayor (num1, num2){
    if(num1>num2){
        return "El primer numero es el mayor"
    }else if(num2>num1){
        return "El segundo numero es el mayor"
    }else if(num1==num2){
        return "Ambos numeros son iguales"
    }else{
        return "El valor ingresado no es valido"
    }
}

console.log (mayor(6, 3))





















