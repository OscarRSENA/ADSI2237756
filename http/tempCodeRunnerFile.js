
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