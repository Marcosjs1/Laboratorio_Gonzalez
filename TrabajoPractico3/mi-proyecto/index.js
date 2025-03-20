const fs = require('fs');
const yargs = require("yargs")
const argv = yargs
    .command("saludar","Muestra un saludo",{
        nombre:{
            describe:"Nombre de la persona a saludar",
            demandOption:true,
            type:"string"
        }
    })
    .command("despedir","Muestra una despedida",{
        nombre:{
            describe:"Nombre de la persona al despedir",
            demandOption:true,
            type:"string"
        }
    })
    .command("sumar","Muestra la suma de 2 numeros",{
        num1: {
            describe: "numero 1",
            demandOption: true,
            type: "number"
        },
        num2: {
            describe: "numero 2",
            demandOption: true,
            type: "number"
        }
    })
    .command("leer archvo","Lee un archivo JSON",{
        archivo:{
            describe:"ruta del archivo",
            demandOption:true,
            type:"string"
        }
    })

    .help()
    .argv;

const rutaJson = argv.archivo
if (rutaJson) {
    try {
        const data = fs.readFileSync(rutaJson, "utf-8");
        const jsonData = JSON.parse(data);
        console.log("Contenido del JSON:", jsonData);
    } catch (error) {
        console.error("Error al leer el archivo JSON:", error.message);
    }
}

if(argv._.includes('saludar')){
    console.log(`Hola, ${argv.nombre}`)
}

if(argv._.includes('despedir')){
    console.log(`Adios,${argv.nombre}`)
}
console.log(`La suma del numero ${argv.num1} y el numero ${argv.num2} es ${argv.num1 + argv.num2}`)