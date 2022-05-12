// Contexto de ejecucion global archivo . js

function a(){
    // Contexto de la ejecucion local a la funcion
x = 0 ;
return x;
}

let i;
for (let i = 0; i < 10; i++) { // contexto de ejecucion en estructura de control
    
    console.log(i)

}