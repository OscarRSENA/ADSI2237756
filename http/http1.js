const http=require('http')

http.createServer(function(req, res){
console.log("Nueva peticion");
console.log(req.url);
res.end()
}).listen(3000)
console.log("Escuchando desde el puerto 3000")

// Ahora con un mensaje

const http=require('http')

http.createServer(function(req, res){
console.log("Nueva peticion");
console.log(req.url);
res.write("Ya se usar http con Node")
res.end()
}).listen(3000)
console.log("Escuchando desde el puerto 3000")

// Ahora con mensaje en la cabecera del protocolo

const http=require('http')

http.createServer(function(req, res){
console.log("Nueva peticion");
console.log(req.url);
res.writeHead(201, {'Content-Type':'text/html'}) //Text/plain solo recibe texto plano no interpreta los lenguajes
res.write("<h2>Ya se usar http con Node</h2>")
res.end()
}).listen(3000)
console.log("Escuchando desde el puerto 3000")

// traer archivo html

const http=require('http');
const fs=require('fs');
http.createServer(function(req, res){
    res.setHeader('Content-Type','text/html');
    fs.readFile(__dirname+'/index.html',(err, data)=>{
        if (err) {
            console.log(err)
            res.end();
        }else{
            res.write(data)
            res.end()
        }
        res.end()
    })
}).listen(3000);
console.log("escuchando http en puerto 3000")