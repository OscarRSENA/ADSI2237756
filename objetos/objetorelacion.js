// HERENCIA
class Usuario{
    constructor(id, nombre, edad){
        this._id=id;
        this._nombre=nombre;
        this._edad=edad;
    }
    get id(){
        return this._id
    }

    set id(id){
        this._id=id
    }

    get nombre(){
        return this._nombre
    }

    set nombre(nombre){
        this._nombre=nombre
    }

    get edad(){
        return this.edad
    }

    set edad(edad){
        this._edad=edad
    }
}

class Estudiante extends Usuario{
    constructor(id, nombre, edad, ficha, programa){
        super(id, nombre, edad);
        this._ficha=ficha;
        this._programa=programa;
    }

    get ficha(){
        return this._ficha
    }

    set ficha(ficha){
        this._ficha=ficha
    }

    get programa(){
        return this._programa
    }

    set programa(programa){
        this._programa=programa
    }
}

// TIENE UN - FORMATO SENCILLO

class Moto{
    constructor(placa, estudiante){
        this._placa=placa;
        this._estudiante=estudiante
    }
}

// TIENE UN - FORMATO COMPPUESTO

class Grupo{
    constructor(codgrupo, estudiantes){
        this._codgrupo=codgrupo;
        this._estudiantes=estudiantes;
    }
    incorporarEstudiante(estudiante){
        this._estudiantes.push(estudiante)
    }
}

var e1 = new Estudiante('1074', 'Oscar', 18, 2237756, 'ADSI');
var e2 = new Estudiante('107431', 'mario', 19, 2237756, 'ADSI');

var m1 = new Moto('asd-123', e1)

var g1=[]
var grupo1=new Grupo(909, g1);
console.log(grupo1)
grupo1.incorporarEstudiante(e1)
grupo1.incorporarEstudiante(e2)
console.log(grupo1)





console.log(m1)


