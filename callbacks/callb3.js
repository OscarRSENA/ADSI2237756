function saludar(nombre, callback, callback1){
    setTimeout( ()=>{console.log("Hola " + nombre)
    callback(nombre, callback1)}
    //callback1();}
    , 3000)

}

function hablar(nombre){
    setTimeout( ()=>{console.log(nombre + " Bla, Bla, Bla...")}, 2000)
}
function despedirse( ){
    setTimeout( ()=>{console.log("Adios")}, 1000)
}

saludar("Marta", hablar, despedirse);
