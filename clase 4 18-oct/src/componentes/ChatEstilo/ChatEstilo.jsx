import { useState, useEffect } from "react";
import { db } from "../../services/firebase";
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import './ChatEstilo.css';
//Conectamos la hoja de estilo

const ChatEstilo = () => {
    //Definimos los estados: 
    const [mensajes, setMensajes] = useState([]); //Este guarda mi historial de mensajes
    const [nuevoMensaje, setNuevoMensaje] = useState(""); //Este guarda mi mensaje nuevo que estoy enviando al chat. 
    const [nombre, setNombre] = useState(""); //Aca guardamos el nombre del usuario.
    const [usuarioValido, setUsuarioValido] = useState(false);

    const manejarNombre = (e) => {
        setNombre(e.target.value); 
    }

    const ingresarChat = (e) => {
        e.preventDefault();
        if(nombre.trim()) {
            setUsuarioValido(true); 
        }
    }

    useEffect(() => {
        const escuchador = onSnapshot(collection(db, "mensajes"), (snapshot) => {
            //Cuando hay cambios, obtenemos los datos: 
            const datosMensajes = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            //Ordenamos los mensajes por fechas, para que los ultimos queden abajo
            const mensajesOrdenados = datosMensajes.sort((a, b) => a.timestamp - b.timestamp);
            setMensajes(mensajesOrdenados);
        })

        return () => escuchador();
    }, [])

    //Vamos a crear una función para enviar un mensaje: 

    const enviarMensaje = async (event) => {
        event.preventDefault();
        //Acá evitamos que se recargue el formulario de la pagina. 
        if (nuevoMensaje.trim()) {
            //Agregamos un nuevo mensaje a la colección:
            await addDoc(collection(db, "mensajes"), {
                text: nuevoMensaje,
                usuario: nombre,
                timestamp: new Date()
            });
            //Reiniciamos o limpiamos el "nuevoMensaje". 
            setNuevoMensaje("");
        }
    }


    //Renderizado del componente:
    return (
        <div className="chat-container">
            {!usuarioValido ? (
                <form onSubmit={ingresarChat} className="nombre-form">
                    <h1>Chat Comunitario</h1>
                    <input type="text" value={nombre} onChange={manejarNombre} placeholder="Ingresa tu nombre... " required/>
                    <button type="submit"> Enviar </button>
                </form>

            ) : (
                <>
                    <h1>Chat Comunitario</h1>
                    <div className="mensajes-container">
                        {mensajes.map(mensaje => (
                            <div key={mensaje.id} className="mensaje">
                                <strong> {mensaje.usuario} dice: </strong>
                                {mensaje.text}
                            </div>
                        ))}
                    </div>
                    <form onSubmit={enviarMensaje}>
                        <input
                            type="text"
                            value={nuevoMensaje}
                            onChange={(e) => setNuevoMensaje(e.target.value)}
                            placeholder="Escribe un mensaje... "
                            required
                        />
                        <button type="submit"> Enviar </button>
                    </form>
                </>
            )}
        </div>
    )
}

export default ChatEstilo