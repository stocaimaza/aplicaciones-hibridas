import { useState, useEffect } from "react"
import { db } from "../../services/config";
//Importamos el objeto que tiene mi conexión a la base de datos. 

//Importamos algunas herramientas de Firebase: 
import { getDocs, collection, query } from "firebase/firestore";

const Productos = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const misProductos = query(collection(db, "productos"));

        getDocs(misProductos)
            .then(respuesta => {
                setProductos(respuesta.docs.map(doc => ({ id: doc.id, ...doc.data() })))
            })
    }, [])
    return (
        <div>
            <h2>Mis Productos desde Firebase</h2>
            <div>
                {
                    productos.map(producto => (
                        <div>
                            <h3> {producto.nombre} </h3>
                            <p> Precio: {producto.precio} </p>
                            <p> Stock: {producto.stock} </p>
                            <button> Comprar </button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Productos