// CLASES
// Se recomienda a los atributos de la clase añadirles un _ para no saturar el llamado de las variables
class Libro{
constructor(titulo, editorial){
    console.log("Se activo el constructor")
    this._titulo= titulo
    this._editorial= editorial
}

get titulo(){
    return this._titulo
}

set titulo(titulo){
    this._titulo=titulo
}

get editorial(){
    return this._editorial
}

set editorial(titulo){
    this._editorial=titulo
}

infoLibro=function(){
    return `El nombre del libro es ${this._titulo} de la editorial ${this._editorial}`
}
}
// var lib1= new Libro(); //no permite sobrecarga por lo que una vez declarado el constructor no se pueden hacer mas
// console.log(lib1)
var lib2= new Libro('La Voragine', 'planeta');
console.log(lib2.titulo)
console.log(lib2.editorial)
lib2.titulo="El imperio final"
lib2.editorial= "Norma"
console.log(`
Objeto modificado: `)
console.log(lib2.titulo)
console.log(lib2.editorial)
// console.log(typeof(lib1))



// EJERCICIOS
// Clase ahorro que tiene un atributo que tiene un valor en el que estoy guardando el dinero, metodos para incrementar o decrementar el ahorro
class Ahorro{
    constructor(ahorro){
        this._ahorro=ahorro
    }

    set ahorro(ahorro){
        this._ahorro=ahorro
    }

    get ahorro(){
        return this._ahorro
    }

    ingresoAhorro(valor){
        var a = (this._ahorro + valor)
        this._ahorro=a;
        return `Ah ingresado $ ${valor} a su cuenta de ahorros, actualmente Tiene $ ${this._ahorro}`
    }

    retirAhorro(valor){

        if(valor>this._ahorro){
            return `El valor que desea retirar es mayor al que tiene en su cuenta de ahorros`
        }else if(valor<this._ahorro){
            var b = this._ahorro-valor;
            this._ahorro = b
            return `La cantidad retirada fue de $ ${valor} a dejado su cuenta de ahorros en $ ${b}`
        }
    }
}

var c1= new Ahorro(500000);
console.log(c1.ahorro)
console.log(c1.ingresoAhorro(40000))
console.log(c1.ahorro)
console.log(c1.retirAhorro(500000))
console.log(c1.ahorro)