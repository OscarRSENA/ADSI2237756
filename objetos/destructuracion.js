const literal={
    nombre:"Martha",
    aprellido:"Suarez",
    funcion:()=>{
        return`Esta es la funcion`
    }
}

console.log(literal.nombreCompleto())

// const {nombre, apellido, funcion} = literal

const {apellido} = literal
const {funcion} = literal
//console.log(nombre)
conosle.log(apellido)
console.log(funcion())