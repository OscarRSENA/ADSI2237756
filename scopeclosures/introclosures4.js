//En este caso estamos retornando no solo una sino dos funciones dentro de un objeto literal

function simulaclase(){
    let atributos= "Sin iniciar";
    return {
        setAtributos: (a)=>atributos=a,
        getAtributos: ()=>atributos,
    }
}

const objeto=simulaclase();
console.log(objeto.getAtributos())
objeto.setAtributos("Atributo cambiado");
console.log(objeto.getAtributos())