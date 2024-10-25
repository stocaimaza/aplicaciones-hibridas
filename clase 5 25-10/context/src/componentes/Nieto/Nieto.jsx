//UTILIZANDO PROPS: 

// import React from 'react'

// const Nieto = ({herencia}) => {
//   return (
//     <div>
//         <h2>Hola, soy el nieto y me voy a gastar todo</h2>
//         <p>En efectivo, recibi: {herencia.efectivo} </p>
//         <p>En propiedades, recibi: {herencia.propiedades} </p>
//         <p>Y tengo estos autos para chocar: {herencia.vehiculos} </p>
//     </div>
//   )
// }

// export default Nieto

//UTILIZANDO EL CONSUMER

// import React from 'react'
// //Importamos el contexto: 
// import { Contexto } from '../../context/context'; 

// //Para poder acceder a la información utilizamos una función de renderizado. 

// const Nieto = () => {
//   return (
//     <div>
//         <Contexto.Consumer>
//             {
//                 (herencia) => (
//                     <div>
//                         <p>Herencia en efectivo: {herencia.efectivo} </p>
//                         <p>Casas: {herencia.propiedades} </p>
//                         <p>Autos: {herencia.vehiculos} </p>
//                     </div>
//                 )
//             }
//         </Contexto.Consumer>
//     </div>
//   )
// }

// export default Nieto

//UTILIZANDO UN HOOK: En lugar de usar el consumer y una función de renderizado yo puedo utilizar un hook que se llama useContext. 

//1) Importamos el contexto: 
import { Contexto } from "../../context/context"; 

//2) Importamos el Hook: 
import { useContext } from "react";

import React from 'react'

const Nieto = () => {
    const herencia = useContext(Contexto); 
  return (
    <div>
       <h2>Hola, en efectivo gaste este mes: {herencia.efectivo} </h2>
       <h2>Casas regale este mes: {herencia.propiedades} </h2>
       <h2>Autos choque este mes: {herencia.vehiculos} </h2>
    </div>
  )
}

export default Nieto