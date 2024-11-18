/** CLASE VIERNES 15 DE NOVIEMBRE - CASI CASI VACACIONES **/

//Servidor: sistema que administra recursos web, como puede ser una pagina html, un video, un juego, o musica. 

//Express: es un framework minimalista que me permite generar un servidor del lado del backend. 

//instalacion: npm install express

//Dependencia: todos esos modulos o paquetes que mi aplicacion necesita para funcionar. 

//1) Importamos express: 
import express from "express";
import cors from "cors";

//2) Creamos nuestra aplicación a partir del módulo de express. 
const app = express(); 

//3) Creamos una constante que almacene el numero de puerto: 
const PUERTO = 8080; 

//Middleware: son funciones que trabajan como mediadores entre la petición del cliente y la respuesta del servidor. 
//Recuerden el ejemplo del guardia de seguridad: 

app.use(express.json()); 
//Acá le estoy diciendo que vamos a manejar notación json en la comunicación con nuestro servidor. 
app.use(cors());
//Habilitamos los CORS

//////////////////////////////////////////////////////////////

//Vamos a crear las rutas: 

//GET: estoy solicitando informacion al servidor.
//POST: estoy creando un nuevo recurso en el servidor. 
//PUT:  actualizando un recurso del servidor.
//DELETE: estoy borrando un recurso del servidor. 

//VAMOS A CREAR NUESTROS PROPIOS PRODUCTOS: 

const misProductos = [
    {id: "1", nombre: "fideos", precio: 160},
    {id: "2", nombre: "arroz", precio: 200},
    {id: "3", nombre: "aceite", precio: 360},
    {id: "4", nombre: "gaseosa", precio: 460},
    {id: "5", nombre: "helado", precio: 500},
    {id: "6", nombre: "vino", precio: 600}
]

app.get("/productos", (req, res) => {
    //req: es "request" y representa el pedido del cliente. 
    //res: es "response" y representa la respuesta del servidor. 

    //res.send("Hola, bienvenido a la sección producto");

    //En lugar de enviar un mensaje, quiero que me envie un array de productos: 
    res.json(misProductos);
})

//NUEVA RUTA: POST, vamos a crear un producto. 

app.post("/crearproductos", (req, res) => {
    //Voy a tomar los datos que llegan desde el cliente. 

    //const {id, nombre, precio} = req.body
    const nuevoProducto = req.body; 
    //Acá estoy capturando la información que me envia POSTMAN. 

    misProductos.push(nuevoProducto);
    //Acá estoy guardando mi nuevo producto en el array. 

    console.log(misProductos); 
    //Muestro todos los productos por consola. 

    res.send("Producto guardado!");
})

//RUTA QUE ME PERMITA OBTENER UN PRODUCTO SEGUN SU ID: 

app.get("/productos/:id", (req, res) => {
    //En primer lugar voy a recuperar el parametro dinamico: 
    let id = req.params.id; 

    const productoBuscado = misProductos.find(item => item.id === id); 

    if(productoBuscado) {
        res.json(productoBuscado); 
    }else {
        res.json({mesaje: "Producto no encontrado"}); 
    }
})

//HACEMOS UN MÉTODO PUT: 

app.put("/productos/:id", (req, res) => {
    let id = req.params.id; 
    let {precio} = req.body; 

    //Voy a buscarlo: 
    const productoIndex = misProductos.findIndex(producto => producto.id === id); 

    if (productoIndex !== -1) {
        //Si el producto existe, lo voy actualizar: 
        misProductos[productoIndex].precio = precio; 
        res.json({mensaje: "Producto actualizado"}); 
    } else {
        res.json({mensaje: "Producto no encontrado"}); 
    }
})

//Delete: voy a borrar un producto.

app.delete("/borrarproducto/:id", (req, res) => {
    //Recupero el id del producto a borrar. 
    let id = req.params.id; 

    const productoIndex = misProductos.findIndex(producto => producto.id === id); 

    if(productoIndex !== -1) {
        //Si el producto existe, lo elimino: 
        misProductos.splice(productoIndex, 1); 
        
        console.log(misProductos);
        res.json({mensaje: "Producto eliminado correctamente "});
    } else {
        res.json({mensaje: "Ese ID no existe, pensa bien lo que pones"});
    }
})




app.get("/contacto", (req, res) => {
    res.send("Hola, esta es la seccion de CONTACTO");
})

app.get("/reclamos", (req, res) => {
    res.send("Hola, esta es la sección de reclamos");
})

//COLOCAMOS EL SERVIDOR A TRABAJAR A PARTIR DEL METODO LISTEN: 

app.listen(PUERTO, () => {
    console.log("Escuchando en el puerto 8080");
})

//Nodemon: herramienta que me permite reiniciar el servidor frente a cualquier cambio en el codigo. 
//Lo instalamos como una dependencia de desarrollo con el siguiente comando: npm i nodemon -D

//Configuramos el script y luego colocamos en consola: npm run dev