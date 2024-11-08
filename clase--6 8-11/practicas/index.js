console.log("Hola mundo, voy a trabajar del lado del backend ahora");

const suma = (a, b) => {
    return a + b;
}

console.log(suma(55,5));

//NPM es mi manejador de paquetes. 
//Me permite instalar herramientas para usar en mi aplicación web. 

//npm init me crea un proyecto nuevo. Me va a preguntar todas las opciones de configuración. 
//npm init --yes te configura un paquete/ proyecto de forma automática. 

//PROYECTO lo creamos con npm init. 

//MODULO: es un archivo de JS que contiene variables y funciones relacionadas. 

//1) MODULOS ESCRITOS POR NOSOTROS MISMOS: 
//Es cuando escribimos nuestros propios archivos con funciones. 

//buenDia(); 

//Para poder conectar los módulos yo tengo que importar/exportar las funciones. 

//Para lograr esto, lo podemos hacer con dos sintaxis: Common JS, ES Modules. 

//Importar con Common JS: 

// const saludos = require("./saludos.js"); 

// saludos.buenDia();
// saludos.buenasTardes();
// saludos.buenasNoches(); 

//Importar con ES Modules: 

import saludos from "../saludos.js"; 

saludos.buenDia(); 
saludos.buenasTardes(); 
saludos.buenasNoches(); 


//MODULOS DE TERCEROS: 
//Para instalar un módulo de terceros tenemos que usar la consola. Usamos los comando de NPM para poder descargar localmente los archivos y usarlos. 

//Express es una herramienta que me permite generar servidores. 
//Se le dice "dependencia" porque mi proyecto lo necesita para funcionar correctamente. 

//Instalamos con npm i express. 
//Borramos con npm uninstall express. 

//Existen tambien "dependencias de desarrollo".

//Nodemon: reinicia el servidor frente a cualquier cambio en el código. 

//MODULOS NATIVOS: 

//Son modulos que vienen incluidos en Node JS. No es necesario instalarlos solo se tienen que importar para usarse. 

//Algunos de los más usados: 
//1) Modulo FileSystem: este me permite trabajar con un sistema de archivos. 
//2) Modulo HTTP: este me permite crear un servidor web. 
//3) Modulo Crypto: me permite trabajar con la encriptación de datos. 
//4) Modulo Path: permite trabajar con rutas de archivos y directorios. 
//5) Modulos Timers: me permite ejecutar tareas de forma asincronica. 

//EJERCICIO: TRABAJAMOS CON ARCHIVOS

//Importamos FileSystem: 

import fs from "fs"; 

//Crear un archivo .txt que tenga un saludito: 

fs.writeFileSync("archivo.txt", "Hola, buenas tardes, este es un archivo generado en clase");

//Y si quisiera leer un archivo: 

const respuesta = fs.readFileSync("./archivo.txt", "utf-8"); 
console.log(respuesta);

//Tambien tenemos un método para borrar: 

fs.unlinkSync("./archivo.txt");

//