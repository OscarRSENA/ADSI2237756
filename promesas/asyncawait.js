function promesa(){
    return new Promise(function(resolve, reject){
        console.log("Desde la funcion promesa");
        resolve();
    })
}

// Ejemplo funcion flecha
// const flecha=async()=>{}

function prueba1(){
    console.log("Soy prueba1")
}

function prueba2(){
    console.log("Soy prueba2")

}

function prueba3(){
    console.log("Soy prueba3")

}

// La unica funcion que debe llevar el async es la funcion que utiliza la propiedad await

async function main(){
    promesa()
    await prueba1()
    await prueba2()
    await prueba3()
}

main();

// promesa()
//     .then(prueba1)
//     .then(prueba2)
//     .then(prueba3)