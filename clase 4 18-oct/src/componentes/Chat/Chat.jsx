import { useState, useEffect } from "react"; 
//Traemos los Hooks que necesitamos. 

import { db } from "../../services/firebase";
//Nos conectamos con nuestra base de datos por medio de db. 

import { collection, addDoc, onSnapshot } from "firebase/firestore";
//Necesitamos algunas funciones de Firebase. 

const Chat = () => {
    //Definimos dos estados: 
    const [mensajes, setMensajes] = useState([]); //Este guarda mi historial de mensajes
    const [nuevoMensaje, setNuevoMensaje] = useState(""); //Este guarda mi mensaje nuevo que estoy enviando al chat. 

    useEffect( () =>{
        const escuchador = onSnapshot(collection(db, "mensajes"), (snapshot) => {
            //Cuando hay cambios, obtenemos los datos: 
            const datosMensajes = snapshot.docs.map(doc => ({id: doc.id, ...doc.data() })); 
            setMensajes(datosMensajes); //Actualizamos el estado "mensajes" con la información de Firebase. 
        })

        return () => escuchador(); 
    }, [])

    //Vamos a crear una función para enviar un mensaje: 

    const enviarMensaje = async (event) => {
        event.preventDefault();
        //Acá evitamos que se recargue el formulario de la pagina. 
        if(nuevoMensaje.trim()) {
            //Agregamos un nuevo mensaje a la colección:
            await addDoc(collection(db, "mensajes"), {text: nuevoMensaje});
            //Reiniciamos o limpiamos el "nuevoMensaje". 
            setNuevoMensaje(""); 
        }
    }


    //Renderizado del componente:
  return (
    <div>
        <h1>Chat Comunitario</h1>
        {
            /* Mapeamos los mensajes y los mostramos por pantalla*/
            mensajes.map(mensaje => (
                <div key={mensaje.id}> {mensaje.text} </div>
                //Renderizamos cada mensaje
            ))
        }
        <form onSubmit={ enviarMensaje }>
            <input type="text" value={nuevoMensaje} onChange={(e) => setNuevoMensaje(e.target.value) } placeholder="Escribe un mensaje... " />
            <button type="submit"> Enviar </button>
        </form>

    </div>
  )
}

export default Chat