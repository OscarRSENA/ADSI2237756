

const fs = require('fs')

const leer=(ruta, cb)=>{
    fs.readFile(ruta,(err, data)=>{
    const texto = data.toString().toUpperCase()

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

    escribir(__dirname+"/destino.txt", data.toString().toUpperCase() , console.log)
        cb(texto)
    })


   
}

// leer con ruta absoluta
// leer(__dirname+"/animales.json", console.log)
// leer con ruta relativa
leer(__dirname + '/origen.txt', console.log)

