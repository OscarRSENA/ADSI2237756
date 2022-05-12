// hacer un contador que arranque en el numero que el usuario quiera y de ahi en adelante se incremente en la cantidad que el usuario quieramos

function contador(min, incrementar){
    let cont = min
        function minmax(){
            cont += incrementar
            return cont
        }
        return minmax;
}
const contador1=contador(5, 10);
console.log(contador1())
console.log(contador1())
console.log(contador1())

// secuencia de saludos variando el saludo con un numero random funciones

function saludo(){
    let saludos=["Buenos dias", "Buenas tardes", "Buenas noches", "Hola", "Bienvenido"];
    let cont = 0
    function saludar(nombre){
        var mensaje= `${saludos[Math.round(Math.random()*4)]} ${nombre} eh saludado ${cont+=1} veces`
        return mensaje;
    }

    return saludar;
}

var saludo1= saludo();
console.log(saludo1("Oscar"))
console.log(saludo1("David"))
console.log(saludo1("Juan"))



// La funcion protegida tendra un arreglo de numeros hacer suma promedio mayor y menor el arreglo se debe pasar como parametro

function operaciones(numeros){
    let arreglo=numeros

    function suma(){
        console.log(arreglo)
        var sum = 0
        for(i=0;i<arreglo.length;i++){
                sum=sum + arreglo[i]
        }
        console.log(`La suma de los numeros del arreglo es: ${sum}`)
    }

    function mayor(){
        console.log(`El valor mayor es de: ${Math.max(...arreglo)}`)
    }
    function menor(){
        console.log(`El valor menor es de: ${Math.min(...arreglo)}`)
    }
    function promedio(){
        var sum = 0

    for (i = 0; i< arreglo.length; i++) {
        sum += arreglo[i];
        var prom = sum/arreglo.length
    }

    console.log(`El promedio de todos los numeros del arreglo es de: ${prom}`)
    }

    return [suma, mayor, menor, promedio]
}

var [sum, may, men, prom] = operaciones([1,2,3,4,5,6]);

sum();
may();
men();
prom();


// La funcion protegida es un arreglo, se debe pasar un arreglo y un numero, va a buscar el numero si lo encuentra va a decir cuantas veces y en que posicion esta

function numeroa(a){
    let arreglo=a
    function encontrarnum(num){
        cont = 0
        console.log(arreglo)
        for (let i = 0; i < arreglo.length ; i++) {
            if(num == arreglo[i]){
                console.log(`Se encuentra en la posicion ${i}`)
                cont+=1
            }
        }
        console.log(`Se encontro el  numero ${cont} veces`)
    }

    return encontrarnum;
}

var numarr=numeroa([1,4,8,7,6,12,3,4]);

numarr(4)


// Entregar a la funcion un objeto literal, debe decir cuantos elementro clave valor tiene ese objeto y que tipos  son los elementos.
function objeto(ob){
    let obj=ob
    function elementobjeto(){
        count=0
        for (const elementos in obj) {
            count+=1
            console.log(`El elmento ${count} del objeto es un: ${typeof(obj[elementos])}` );
        }
        console.log(`El objeto tiene ${count} elementos clave valor`)
    }

    return elementobjeto;
}

ob1={
    v1:"Oscar",
    v2:"Rodriguez",
    v3:5,
    v4:"Hola"
}

var primero=objeto(ob1)

primero();

// Construir tres problemas de programacion que se puedan resolver con closures 


function calculadora(num){
    let num1= num
    function suma(num2){
        num1 = (num1+num2)
        console.log(num1)
    }
    function resta(num2){
        num1 = (num1-num2)
        console.log(num1)
    }
    function multiplicacion(num2){
        num1 = (num1*num2)
        console.log(num1)
    }
    function divicion(num2){
        num1 = (num1/num2)
        console.log(num1)
    }

    return [suma, resta, multiplicacion, divicion]
}

var [sum, rest, mult, div]=calculadora(4)
mult(8);
sum(20);

function fechaantigua(fecha){
    fecha1 = new Date(fecha)
    let fechat = fecha1.getFullYear()
    function sumaraños(año){

        fechat+=año
        let fechaactual=new Date();
        if(fechat==fechaactual.getFullYear()){
            console.log("No se pueden sumar mas años, Se encuentra en el año actual " + fechat)
        }else if(fechat>fechaactual.getFullYear()){
            console.log("No se pueden sumar mas años, sobrepasan el año actual")
        }else{
            console.log(`La suma de su año es: ${fechat}`)
        }
    }

    return sumaraños;
}

var fechas=fechaantigua("2000/05/04")
fechas(12)
fechas(1)



function fracciones(numerador1, denominador1 ){
    var n1=numerador1
    var d1=denominador1


    function suma(numerador2, denominador2){

resultadoa=(n1*denominador2)+(numerador2*d1)

resultadob=(d1*denominador2)

console.log(`el resultado de la suma de fracciones es: ${resultadoa}/${resultadob}`)
    }


    function resta(numerador2, denominador2){

        resultadoa=(n1*denominador2)-(numerador2*d1)
        resultadob=(d1*denominador2)
        console.log(`el resultado de la resta de fracciones es: ${resultadoa}/${resultadob}`)
            }

        function multiplicacion(numerador2, denominador2){

                resultadoa=(n1*numerador2)
                resultadob=(d1*denominador2)
                console.log(`el resultado de la multiplicacion de fracciones es: ${resultadoa}/${resultadob}`)
        }

        function divicion(numerador2, denominador2){

            resultadoa=(n1*denominador2)
            resultadob=(numerador2*d1)
                        console.log(`el resultado de la divicion de fracciones es: ${resultadoa}/${resultadob}`)
        }
    return[suma,resta,multiplicacion,divicion]
}

var [sum,rest,mult,div]=fracciones(4,8)

sum(5,8)
sum(5,8)
rest(6,8)
mult(8,9)
div(7,3)

function arreglo(arr){

var arreglo = [4,5,7,6,9]
}
arreglo([1,2,4,5,7,6])