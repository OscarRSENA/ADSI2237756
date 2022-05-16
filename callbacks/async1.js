// Funcion con dos parametros
// Una funcion y un tiempo

// La funcion nos permite realizar una ejecucion de codigo retrasada a la que se ejecuta desde un prinicipio
setTimeout(() => {
    console.log("Yo amo la programacion (retrasado)")
}, 3000);


console.log("yo amo la programacion")
console.log("yo amo la programacion")
console.log("yo amo la programacion")
console.log("yo amo la programacion")

for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log("Yo amo la programacion (retrasado)" + i)
    }, 3000);

}


// imprimir en orden aleatorio los elementos de una arreglo


