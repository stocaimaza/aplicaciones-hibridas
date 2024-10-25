import React from 'react'
//useParams: este es un hook, que me permite acceder a los parámetros de las URL. 

//Por ejemplo: https: //www.cellshop.com/sillas/100
//Y yo me puedo capturar ese 100 y usarlo en mi aplicación. 

//Importamos el Hook: 
import { useParams } from "react-router-dom";

const Sillas = () => {
    const { id } = useParams(); 

  return (
    <div>
        <h2>Sillas</h2>
        <p>Mirando el producto ID: {id} </p>
    </div>
  )
}

export default Sillas