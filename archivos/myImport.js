// Importa las funciones para archivos en html

import {hello, hello2} from './myExport.js';
console.log(hello2())

// Importa las funciones en node

const y = require('./myExport.js')
console.log(y())
