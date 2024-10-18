//Vamos a instalar: npm i email-js
import emailjs from 'emailjs-com';
import "./Contacto.css";
import { useState } from "react";

const Contacto = () => {
    const [nombre, setNombre] = useState(""); 
    const [mensaje, setMensaje] = useState("");
    const [enviado, setEnviado] = useState(false); 

    const enviarMensaje = (event) => {
        event.preventDefault(); 
        
        const templateParams = {
            nombre: nombre,
            mensaje: mensaje
        }
        console.log(templateParams);

        emailjs.send("service_jaenmcb", "template_gv5cv5d", templateParams,"a7NJok8cp3c-WIJqv")
            .then(() => {
                setEnviado(true);
                setNombre("");
                setMensaje("");
            })
            .catch((error) => {
                console.log("Error al enviar el mensaje", error);
            })
    }

  return (
    <div className="container">
        <h1> Contacto </h1>
        {enviado && <p className='success-message'> Mensaje enviado con éxito </p>}
        <form onSubmit={enviarMensaje}>
            <input type="text" placeholder="Tu nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}  required />

            <textarea placeholder="Tu mensaje" value={mensaje} onChange={(e) => setMensaje(e.target.value)} required></textarea>

            <button type="submit"> Enviar </button>
        </form>
    </div>
  )
}

export default Contacto