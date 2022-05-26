const prueba=require('./animales.json');
console.log(typeof (prueba));
for(const Key in prueba) {
    console.log(Key);
}

const pruebaString = JSON.stringify(prueba);
console.log(pruebaString.includes("name"));