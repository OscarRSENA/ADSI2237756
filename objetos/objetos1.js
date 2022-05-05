// Objetos literales son objetos unicos que no necesitan de una clase para ser generados, por mismo cada vez que quiera crear un objeto similar lo tendre que hacer una y otra vez o generar la clase
var ob={
    nombre : "Oscar Rodriguez",
    documento : 1074808283,
    programa : "adsi",
    informacion:function(){
        return `${this.nombre} estudia ${this.programa}
        y su identificacion es ${this.documento}`
    },

};
ob.ficha=2237756;

console.log (typeof(ob));
console.log (ob.informacion())
console.log (ob)

// Ejercicio de practica

var arreglo={
    arr : [7, 8, 9, 11, 1, 2, 4, 6],
    mayor:function(){
        console.log(`El valor mayor es de: ${Math.max(...this.arr)}`)
    },
    menor:function(){
        console.log(`El valor menor es de: ${Math.min(...this.arr)}`)
    },
    promedio:function(){
        var sum = 0

    for (i = 0; i< this.arr.length; i++) {
        sum += this.arr[i];
        var prom = sum/this.arr.length
    }

    console.log(`El promedio de todos los numeros del arreglo es de: ${prom}`)
    }
}
arreglo.mayor();
arreglo.menor();
arreglo.promedio();


var fraccionario={
    n1:4,
    d1:8,
    n2:7,
    d2:6,

    suma:function(){
        a = (this.n1 * this.d2) + (this.d1 * this.n2)
        b = (this.d1 * this.d2)
        for (i=2; i<=7; i++) {
            if (a%i == 0 && b%i == 0){
                console.log (i)
                var simp = i
            }
        }
        ar= a/simp
        br= b/simp
        console.log(`${ar}/${br}`)
    },
    resta:function(){
        a = (this.n1 * this.d2) - (this.d1 * this.n2)
        b = (this.d1 * this.d2)
        for (i=2; i<=7; i++) {
            if (a%i == 0 && b%i == 0){
                console.log (i)
                var simp = i
            }
        }

        console.log(`${a}/${b}`)
    },
    multiplicar:function(){
        a = (this.n1 * this.n2)
        b = (this.d1 * this.d2)
        for (i=2; i<=7; i++) {
            if (a%i == 0 && b%i == 0){
                console.log (i)
                var simp = i
            }
        }

        console.log(`${a}/${b}`)
    },
    dividir:function(){
        a = (this.n1 * this.d2)
        b = (this.d1 * this.n2)
        for (i=2; i<=7; i++) {
            if (a%i == 0 && b%i == 0){
                console.log (i)
                var simp = i
            }
        }

        console.log(`${a}/${b}`)
    }

}

fraccionario.suma()
fraccionario.resta()
fraccionario.multiplicar()
fraccionario.dividir()

// Indice de masa corporal

imc={
    peso:100,
    altura:1.79,
    imc:function(){
        imc = this.peso/(Math.pow(this.altura, 2))
        if(imc<18.50){
            console.log("Usted de encuentra bajo de peso")
        }else if(imc<24.99){
            console.log("Su peso es el ideal")
        }else if(imc<30.00){
            console.log("Usted se encuentra en sobrepeso")
        }else{
            console.log("Usted se encuentra con obesidad")
        }
        console.log(imc)
    }
}

imc.imc();