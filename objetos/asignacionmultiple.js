// Los tres puntos en un arreglo podemos asumir que conbierten el arerglo en la lista de variables que permite rellenar como si tuviera parametros o variables distintos

const [a,b,c]=[2,5,6]
const [x,y,...vector]=[1,2,3,4,5,6,78]
console.log(a)
console.log(vector)

function prueba(){
    const a =()=> "valor de a"
    const b =()=> "valor de b"
    const c =()=> "valor de c"
    return [a,b,c]
}

const [p,q,r] = prueba()
console.log(p())
console.log(q())
console.log(r())

function darObjeto(){
    return[
        {nombre:'Oscar',
        documento: 1074808283,
        lenguajes:["php", "js", "java"],
        infototal: function(){
            return `${this.nombre} ${this.documento} ${this.lenguajes}`
        }} ,

        {nombre:'Juan',
        documento: 512312,
        ludicas: {
            nomludica:"Musica",
            dias:['lunes', 'miercoles', 'jueves']
            }
        } 
    ]
}

const [ob1, ob2] = darObjeto()
console.log(ob1.infototal())
console.log(ob2.ludicas.dias)
console.log(darObjeto())
