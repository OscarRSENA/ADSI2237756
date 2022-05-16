function principal(vec, callback1, callback2){
    let tam = Math.round(Math.random()*20)
    for (let i = 0; i < tam; i++) {
        vec.push(Math.round(Math.random()*100))
    }
    callback1(vec);
    console.log(callback2(vec));
}

function mostrarvec(vec){
    console.log(vec)
}

function sumar(vec){
    let sum = 0
    for (let i = 0; i < vec.length; i++) {
    sum+=vec[i]
    }
    return sum
}
vector = []
principal(vector, mostrarvec, sumar)

// funcion recibe un callback, callback recibe otro callback
function principal(vec, callback){
    let tam = Math.round(Math.random()*20)
    for (let i = 0; i < tam; i++) {
        vec.push(Math.round(Math.random()*100))
    }
    function callp(vec){
        let sum = 0
        for (let i = 0; i < vec.length; i++) {
        sum+=vec[i]}
            return sum;
    }
    callback(vec, callp);

}

function mostrarvec(vec, callback){
    console.log("El arreglo generado es: " + vec)
    console.log(callback(vec));
}

vector = []
principal(vector, mostrarvec)

// Funcion por fuera de

function principal(vec, callback){
    let tam = Math.round(Math.random()*20)
    for (let i = 0; i < tam; i++) {
        vec.push(Math.round(Math.random()*100))
    }
    function callp(vec){
        let sum = 0
        for (let i = 0; i < vec.length; i++) {
        sum+=vec[i]}
            return sum;
    }
    callback(vec, callp);

}

function mostrarvec(vec, callback){
    console.log("El arreglo generado es: " + vec)
    console.log(callback(vec));
}

vector = []
principal(vector, mostrarvec)

