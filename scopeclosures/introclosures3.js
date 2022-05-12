// function ahorro(dinero){
//     let capital = 0 ;
//     capital= capital + dinero
//     return capital
// }
// console.log(ahorro(1000))
// console.log(ahorro(1000))
// console.log(ahorro(1000))

// De esta forma podremos editar la variablre led de la funcion ahorro sin que sea destruida tras ejecutar su funcion

function ahorro(){
    let capital = 0 ;
    function deposito(dinero){
        capital= capital + dinero
        return capital
    }
    return deposito
}

let miahorro = ahorro();
console.log(miahorro(1000))
console.log(miahorro(2000))
console.log(miahorro(3000))