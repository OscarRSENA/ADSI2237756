// arreglo de 20 numeros aleatorios, calcular media, cuadrado a la distnacia de la media,  suma de los valores, dividir numero de datos, sacar la raiz cuadrada

function DesviacionEstandar() {
    return new Promise(function(resolve, reject){

        setTimeout(function(){
            console.log("Resultado encontrado: ")
            resolve();
        },2000)
    })
}


function arreglo(cantidad){
let numeros=[]
for (let i = 0; i < cantidad; i++) {
    let numero = Math.round(Math.random() * 99)
    numeros.push(numero)
}
console.log("El arreglo generado es: "+ numeros)
return numeros;
}


function media(arreglo){
    var sum = 0

for (i = 0; i< arreglo.length; i++) {
    sum += arreglo[i];
    var med = sum/arreglo.length
}
    console.log("Su media es: "+ med)
    return med;
}

function cuadrado(arreglo, media){
    let cuadrados=[]
for (let i = 0; i < arreglo.length; i++) {
    let cuadrado=Math.pow((arreglo[i]-media),2)
    cuadrados.push(cuadrado)
}
console.log("Los cuadrados de los numeros del arreglo son: " + cuadrados)
return cuadrados;
}

function sumaCuadrados(cuadrados){
    let sum= 0
    for (let i = 0; i < cuadrados.length; i++) {
        sum+=cuadrados[i]
    }
    console.log("La suma de los cuadrados resultantes es: "+sum)
    return sum
}

function divicionTerminos(arreglo, totalc){
    let resultado = totalc/arreglo.length
    console.log("La divicion de las suma de los cuadrados entre la cantidad de numeros ingresados es: "+ resultado)
    return resultado;
}

function raiz(divicion){
    let resultado = Math.sqrt(divicion)
    setTimeout(function(){
        console.log(resultado)
    }, 3000)
    
    return resultado
}


async function calcularDesviacion(){
    try {
       console.log("El resultado de la desviación estandar sera encontrado...")
       await DesviacionEstandar()
    } catch (error) {
        console.log("Alguno de los valores no es valido")
    }
   }

calcularDesviacion();
let arreglo1=arreglo(5)
let media1=media(arreglo1)
let cuadrados1=cuadrado(arreglo1, media1)
let sumacuadrados1=sumaCuadrados(cuadrados1)
let divicion1=divicionTerminos(arreglo1, sumacuadrados1)
let raiz1=raiz(divicion1)
