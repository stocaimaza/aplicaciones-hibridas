/** SERVIDOR WEB **/

//¿Que es un servidor?
//Protocolo HTTP
//Express JS
//Objeto Request

//Servidor: software o hardware que almacena y administra recursos web. 
//Estos pueden ser: imagenes, archivos, sitios web, datos. 

//Cuando me conecto a : https://www.infobae.com/
//Le pido al servidor que almacena todos estos datos que me los envie. 

//El protocolo de transferencia de hipertexto (HTTP) es un conjunto de reglas que permite la comunicación entre navegadores y servidores web. 

//MODELO CLIENTE - SERVIDOR. 

//El cliente hace un pedido al servidor. 
//El servidor escucha ese pedido y responde. 

// el cliente hace un = request (req)
// el servidor responde = response (res)

//Vamos a usar un framework para crear un servidor: 
//Express JS: es un framework minimalista que me permite crear un servidor web. 

//1) Instalamos express: 
//npm i express

//2) Importamos: 
import express from "express"; 

//3) Crear una app. 
const app = express(); 

//4) Creamos una constante en donde guardamos el puerto. 
const PUERTO = 8080; 

//5) Creamos una ruta. 

//Creamos un array con productos: 

const misProductos = [
    {id: "1", nombre: "Fideos", marca: "Marolio", precio: 150},
    {id: "2", nombre: "Arroz", marca: "Marolio", precio: 250},
    {id: "3", nombre: "Aceite", marca: "Marolio", precio: 350},
    {id: "4", nombre: "Harina", marca: "Marolio", precio: 450},
    {id: "5", nombre: "Pan", marca: "Elaboración Propia", precio: 550},
    {id: "6", nombre: "Gaseosa", marca: "Coca Cola", precio: 650}
]

app.get("/productos", (req, res) => {
    //Cada vez que un cliente ingrese a "/productos" se ejecuta la función callback. 
    //Trabajamos con dos parametros: req para el pedido del cliente y res para la respuesta del servidor. 

    res.send(misProductos);

})

//Quiero crear una nueva ruta en donde tomo por parametro un ID y voy a mostrar ese producto en pantalla: 

//PARAMS: 

app.get("/productos/:id", (req, res) => {
    //Vamos a capturar un id de la url: 
    //Voy a tomar el id que viene en el objeto "req", el dato viene adentro de la propiedad "params"    
    let id = req.params.id; 

    let productoBuscado = misProductos.find(producto => producto.id === id); 

    if(productoBuscado) {
        res.send(productoBuscado); 
    } else {
        res.send("Producto no encontrado"); 
    }

})

//QUERY: Hace referencia a las multiples consultas que se pueden hacer en determinada ruta: 

app.get("/clientes", (req, res) => {
    //Voy a recuperar de la URL el nombre y el apellido de un cliente.

    let nombre = req.query.nombre; 
    let apellido = req.query.apellido; 

    res.send(`Bienvenido ${nombre} ${apellido}`); 
})

//Métodos más usados: 
//GET = lo uso para pedir información al servidor. 
//POST = lo uso para subir información al servidor. 
//PUT = lo uso para actualizar información del servidor. 
//DELETE = lo uso para eliminar información del servidor. 

//otras rutas: 

app.get("/contacto", (req, res) => {
    res.send("Sección CONTACTO");
})

app.get("/preguntas", (req, res) => {
    res.send("Sección Preguntas Frecuentes"); 
})

//PARA ACCEDER AL HOME: 

app.get("/", (req, res) => {
    res.send("Home, la página de inicio");
})

//6) Tengo que inicializar el servidor y dejarlo escuchando en un puerto: 
//Utilizamos el método "listen". 

app.listen(PUERTO, () => {
    console.log("Escuchando en el puerto: " + PUERTO);
})
