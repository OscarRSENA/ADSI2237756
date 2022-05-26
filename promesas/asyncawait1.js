function promesa(){
    return new Promise(function(resolve, reject){
        setTimeout(()=>{
            console.log("El agua esta lista");
            reject();
        }, 2000)
        
    })
}

async function agregarIngredientes(){
    console.log("Poner olla en el fogon")
    try {
        await promesa();
    } catch (error) {
        console.error("Fallo la funcion")
    }
    
    console.log("Agregar ingredientes")
}

function pelarPapa(){
console.log("Lista la papa")
}

function picarCarne(){
    console.log("Lista la carne")

}

function aderezar(){
    console.log("Listo el aderezo")

}

agregarIngredientes()
pelarPapa()
picarCarne()
aderezar()
