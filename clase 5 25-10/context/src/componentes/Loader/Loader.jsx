import React from 'react'
import { useState, useEffect } from 'react';

//Un loader o spinner es un componente visual qeu se usa para indicar que estamos realizando una actividad en segundo plano y que estamos esperando la respuesta. 

const Loader = () => {
    const [loader, setLoader] = useState(true); 

    useEffect( () => {
        setTimeout( () => {
            setLoader(false); 
        }, 3000)
    }, [])


  return (
    <div>
        { loader ? <h2> Cargando Data! </h2> : <h2> Contenido Listo! </h2>}
    </div>
  )
}

export default Loader