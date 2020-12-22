const fs = require('fs');
const colors = require('colors');
//De esta forma exportar la función
// module.exports.crearArchivo
let listarTabla = (base, limite = 10) => {
    console.log('========================'.green);
    console.log(`====Tabla de ${base}====`.red);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base}*${i}=${i*base}`);

    }
}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            // console.log(`${base} * ${i} = ${i * base}`);
            data += `${base} * ${i} = ${i * base}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
            // console.log(`El archivo tabla-${base} ha sido creado`);
        })
    })
}

//Forma recomentada
module.exports = {
    crearArchivo,
    listarTabla
}

// Modulos
// console.log(module);
// console.log(process);