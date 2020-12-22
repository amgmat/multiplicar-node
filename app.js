// paquete file System ya viene por defecto al instalar node
// require s
// const fs = require('fs');  paquete nativos 
// const fs = require('express'); require para paquete que no son nativos de node
// const fs = require('./fs'); requiere para archivos que nosotros hemos hecho

// let base = 5;

// let data = '';

// for (let i = 1; i <= 10; i++) {
//     // console.log(`${base} * ${i} = ${i * base}`);
//     data += `${base} * ${i} = ${i * base}\n`;
// }

// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//     if (err) throw err;
//     console.log(`El archivo tabla-${base} ha sido creado`);
// })


// Modulos
// console.log(module);
// console.log(process);

// const multiplicar = require('./multiplicar/multiplicar');


// multiplicar.crearArchivo
const argv = require('./config/yargs').argv;
// const colors = require('colors');
let colors = require('colors/safe');


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        console.log('listar');
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: `, colors.cyan(archivo)))
            .catch(e => console.log(e));
        console.log('crear');
        break;
    default:
        console.log('Comando no reconocido');
}

// let base = 'abc';

// console.log(multiplicar)

// console.log(process.argv);
// let argv2 = process.argv;

// console.log(argv);
console.log(argv.base, 'Limite', argv.limite);

// console.log(argv2);
// let parametro = argv[2];
// let base = parametro.split('=')[1];

// console.log(base);

// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${ archivo}`))
//     .catch(e => console.log(e));