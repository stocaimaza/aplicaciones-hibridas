// import React from 'react'
// import Abuelo from './componentes/Abuelo/Abuelo'

//Aprendimos en estas clases que podemos enviar información entre componentes a traves de las props. Pero estas se envían de forma unidireccional desde un componente padre a un componente hijo. 
//En las aplicaciones grandes con muchas capas de componentes esto se convierte en una tarea tediosa. 

//Ejemplo: "La Herencia Familiar"; 

///////////////////////////////////////////////////////////////

//Para solucionar esto React me presenta la herramienta llamada "Context". 
//En el contexto podemos almacenar datos o funciones que esten disponibles para toda la app. 

//El context trabaja con dos partes: El proveedor y el consumidor. 

//El provider es un componente que proporciona los datos que vamos a compartir y el consumer es quien utiliza los datos proporcionados por el Provider. 

// import { Contexto } from './context/context'

// const App = () => {

//   const herencia = {
//     efectivo: 95202123, 
//     propiedades: 35, 
//     vehiculos: 40
//   }


//   return (
//     <div>
//       <Contexto.Provider value={herencia}>
//         <h1>Context</h1>
//         <Abuelo />
//       </Contexto.Provider>
//     </div>
//   )
// }

// export default App

///Ejemplo con el Loader: 

import React from 'react'
import Loader from './componentes/Loader/Loader';
import LoaderApi from './componentes/LoaderApi/LoaderApi';

const App = () => {
  return (
    <div>
      <LoaderApi/>
    </div>
  )
}

export default App