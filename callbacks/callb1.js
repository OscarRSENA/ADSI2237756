// un callback es una funcion que se usa como parametro de otra funcion.
// function principal(callback) {
//     console.log(callback());
// }

// function externa(){
//     return "Soy una funcion externa a la principal pasada por un parametro"
// }

// principal(externa);


function principal(num1, num2, callback) {
    let r=num1 + num2
    console.log(callback(r));
}

function impresora(msj){
    return `Imprimiendo ${msj}`
}

principal(23423, 4124, impresora)

// Funcion principal que tenga como parametros dos strings y una callback que los compare en tamaño, la comparacion debe realizarla la funcion externa


function principal(string1,string2, callback){
    console.log(`${string1} - ${string1.length} numero de caracteres
${string2} - ${string2.length} numero de caracteres`)
    str1=string1.length
    str2=string2.length
    console.log(callback(str1, str2))
}

function compara(str1, str2){
    if(str1<str2){
        return "La cantidad de caracteres se la segunda cadena es mayor a la primera"
    }else if(str1>str2){
        return "La cantidad de caracteres de la primera cadena ese mayor a la segunda"
    }else{
        return "Ambas cadenas tienen el mismo numero de caracteres"
    }
}

principal("Hola abc", "Hola mi nombre es oscar", compara)