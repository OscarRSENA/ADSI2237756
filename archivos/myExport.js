function hello(){
    return "hello 1"
}
function hello2(){
    return "hello 2"
}

export {hello, hello2}; //exporta ambas funciones
// export {hello}; solo exporta la primera funcion
// module.exports = hello; //exporta funcionando en node