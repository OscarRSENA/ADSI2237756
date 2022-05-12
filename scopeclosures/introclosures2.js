// Closure funcion que retorna a otra funcion, da acceso a los datos que se encuentran dentro de la funcion

function externa (){
    // Comillas francesas = string templates
    let  msg =`Parte externa`
    function interna(){
        return `Soy la parte interna ${msg}`;
    }
    return interna;
}
const prueba=externa();

const externa1=()=>{
    let msg = `Soy funcion externa`
    let interna=()=>{
        return `Soy la parte interna ${msg}`;
    }
    return interna;
}

const proof = externa1();
console.log(proof())