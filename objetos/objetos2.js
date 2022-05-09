// Los objetos tambien  pueden ser declarados a traves de funciones generando en este caso una funcion anidada

function Auto(marca="chevrolet", modelo="spark"){  // Si le asigno un valor a los parametros de la funcion cuando instancie la clase automaticamente se le asignaran esos valores de lo contrario seran indefinidos.
// function Auto(marca, modelo){
    this.marca=marca;
    this.modelo=modelo;
    this.setMarca=function(marca){
        this.marca=marca;
    }
}
var a=new Auto("Ford", "explorer");
a.setMarca("Dodge");
var b= new Auto();
b.setMarca("Hyundai")
console.log(a);
console.log(b);

// Ejercicios de practica - objeto con un solo atributo (arreglo de numeros), hacer un metodos para contar pares, y sumar impares.

function Arreglo(arr){
    this.arr=arr;

    this.pares=function(){
        var npares = 0
        for(i=0;i<this.arr.length;i++){
            if(this.arr[i]%2==0){
                npares++
            }
        }
        return `El arreglo tiene ${npares} numeros pares`
    }

    this.sumimpar=function(){
        var sumimpares = 0
        for(i=0;i<this.arr.length;i++){
            if(this.arr[i]%2!=0){
                sumimpares+=this.arr[i]

            }
        }
        return `${typeof(sumimpares)}La suma de todos los numeros impares del arreglo es de ${sumimpares}`;

    }
}

var a = new Arreglo([2,4,6,5,8,10,9]);
console.log(a.pares())
console.log(a.sumimpar())

// Usar misma funcion de los automoviles capacidad del tanque, cilindraje. Con metodos para tanquear, cuantos kilometros puede recorrer con la cantidad de cilindraje

function Auto(marca, modelo, capacidad, cilindraje){
    this.marca=marca;
    this.modelo=modelo;
    this.capacidad=capacidad;
    this.cilindraje=cilindraje
    this.tanquear=function(cantidad){
        if(cantidad>this.capacidad){
            return `La cantidad de litros que desea ingresar excede el tanque del auto`
        }else if(cantidad<this.capacidad){
            return `Ah rellenado el tanque con ${cantidad} litros quedan ${this.capacidad-cantidad} para rellenar el tanque `
        }else{
            return `El tanque esta lleno`
        }
    }
    this.recorrido=function(){
        if(this.cilindraje <= 4){
            return `Con ese cilindraje su auto podra recorrer de 12 a 17 kilometros por litro de combustible`
        }else if(this.cilindraje <= 6){
            return `Con ese cilindraje su auto podra recorrer de 9 a 12 kilometros por litro de combustible`
        }else if(this.cilindraje <= 8){
            return `Con ese cilindraje su auto podra recorrer de 8 a 10 kilometros por litro de compustible`
        }
    }
}

var a = new Auto("chevrolet", "Spark", 120, 4 )
console.log(a.tanquear(12))
console.log(a.recorrido())

// Funcion para instanciar libros, titulo, N de paginas, el año de impresion, cuantas paginas se lee por minuto, cuanto se demoraria en leer el libro, de acuerdo a la fecha de impresion si tiene mas de dos años emitir un mensaje de que ese libro ya se debe remplazar, si tiene menos cuanto tiempo de vida utilizar
function Libro(titulo, npaginas, año){
    this.titutlo=titulo;
    this.npaginas=npaginas;
    this.año=año;
    this.tiempoL=function(paginamin){
        var tiempo = this.npaginas/paginamin
        return `Usted tardara ${Math.trunc(tiempo)} minutos en acabar de leer el libro, si lee ${paginamin} paginas por minuto de ${this.npaginas} paginas que tiene su libro`
    }

    this.tiempoV=function(){
        var t = new Date();
        var a = (t.getFullYear()-this.año)
        if(a>10){
            return`Su libro tiene un tiempo de vida de ${a} años, deberia remplazarlo`
            }else if (a=10){
                return`Su libro esta a punto de exceder el tiempo de vida comun de los libros`
                }else{
                    return`Su libro tiene un tiempo de vida de ${a} años, le faltan ${10-a} años para cumplir su tiempo de vida`
                    }
    }
}

var a= new Libro("El imperio final", 541, 2006)
console.log (a.tiempoL(2))
console.log (a.tiempoV())