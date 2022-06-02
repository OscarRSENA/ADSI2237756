// fs es un modulo que permite leer un archivo de

const fs = require('fs')

const leer=(ruta, cb)=>{
    fs.readFile(ruta,(err, data)=>{
        cb(data.toString())
    })
}

// leer con ruta absoluta
// leer(__dirname+"/animales.json", console.log)
// leer con ruta relativa
leer('./arhivos/animales.json', console.log)


// fs es un modulo que permite leer un archivo de

const fs = require('fs')

const escribir=(ruta, contenido, cb)=>{
    //write file escribe y crea archivo
    //append file crea o adiciona texto a uno ya creado

    fs.appendFile(ruta,contenido,(err)=>{
        if (err) {
            console.log("No se escribio")
        }else{
            console.log("Se escribio correctamente")
        }
    })
}

// Solo se puede escribir con la ruta absoluta
escribir(__dirname+"/archivos.txt", "Hola adsi 2237756", console.log)
