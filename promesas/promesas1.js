function prometedora(num){
    return new Promise(function(resolve,reject){
        resolve(num);
        reject()  //ejecuta solo la primera funcion llamada
    })
}
//----------------------------------------------------------------
let param=100


function prueba(parametro){
    console.log("Soy funcion externa con el parametro " + parametro)
    return parametro
}

function prueba2(){
    let vec=[2,3,4]
    console.log(vec)
}

prometedora(param)
//El parametro es encontrado solamente por la primera funcion, para que las demas lo usen debe retornarse
    .then(prueba)
    .then((parm)=>{console.log(`Se ejecuta el resolve con el parametro ${parm}`)})
    .then(prueba2)