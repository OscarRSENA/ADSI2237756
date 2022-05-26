//Hacer Sopa 
function aguaHervida(control){
    return new Promise(function(resolve, reject){
        if (control) {
            setTimeout(function(){
                console.log("Proceso de hervimiento de agua terminado")
                resolve();
                }, 3000);
        } else {
            reject(error);
        }
        
    })
}

function agregarIngredientes(){
    console.log("Todos los ingredientes listos")
}

function picarCarne(){
    console.log("Lista la carne")
}

function pelarPapa(){
    console.log("Lista la papa")
}

function lavarVerduras(){
    console.log("Listas las verduras")
}

aguaHervida(true)
.then(agregarIngredientes)
.catch(()=>console.log("No hay gas"))
pelarPapa()
lavarVerduras()
pelarPapa()

//Simular una llamada en espera

function llamada(colgar, nombre){
    return new Promise((resolve, reject) =>{
        if (colgar) {
            reject(error)
        }else{
            setTimeout(()=>{console.log("Llamada en espera por favor no cuelge...")
            resolve();
            }, 1000) 
            
            setTimeout(()=>{console.log("Gracias por esperar "+nombre+" podemos continuar...")}, 8000)
        }
    })
}

function timbre(){
    for (let i = 0; i < 6; i++) {
        setTimeout(()=>{console.log("Piiip...")}, 1000*i)
    }
}

function charla(){
    console.log("¿Disculpe, me puede regalar un momento mientras atiendo otra llamada?")
}

llamada(false, "Oscar")
.then(timbre)
.catch(()=>console.log("*CLick* Llamada finalizada"))
charla();



//proceso de desarrollo de una aplicacion empezando por el back end

function aplicacion(falta){
    return new Promise((resolve, reject) =>{
        if (falta== null) {
            setTimeout(()=>{
                resolve();
            }, 4000)
        }else{
            reject(falta);
        }
        
    })
}

function finalizaBack(){
    console.log("Todos los elementos del back-end de la aplicacion estan listos para ser vinculados al fron-end")
}

function diseños(){
    console.log("Los diseños de la arquitectuara del backend ya estan terminados")
}

function baseDatos(){
    console.log("Base de datos y archivos de conexion creados")
}

function modelos(){
    console.log("Modelos para gestionar las tablas de la base de datos creados")
}

function controladores(){
    console.log("Controladores para vincular funciones a las vistas del usuario generados")
}

function servidores(){
    console.log("Servidores de alojamiento e interpretes configurados")
}

aplicacion()
.then(finalizaBack)
.catch((falta)=>{console.log(`Error: Para completar el back-end falta: ${falta}`)})
//simula que falta un elemento para completar el back-end
diseños();
baseDatos();
modelos();
controladores();