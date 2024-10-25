import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './componentes/Menu/Menu';
import Celulares from './componentes/Celulares/Celulares';
import Computadores from './componentes/Computadoras/Computadores';
import Sillas from './componentes/Sillas/Sillas';
import Home from './componentes/Home/Home';
//React-Router: Es una librería de enrutamiento para React. 
//Nos permite navegar entre componentes sin tener que recargar la página. 

//¿Como la utilizamos? 
//1) Instalamos: npm install react-router-dom
//2) Importar en nuestra aplicación componentes pre armandos por la librería.
//BrowserRouter, Route, Routes. 

//BrowserRouter: envuelve a todos los componentes de mi aplicación y habilita la navegación entre ellos. 
//Routes: Nos permite definir las rutas de navegación. 
//Route: define una ruta en particular. 
//Al componente Route, le tenemos que pasar el "path", esta propiedad recibe la ruta a vincular. Y el elemento que queremos renderizar. 

const App = () => {
  return (
    <div>
       <BrowserRouter>
          <Menu/>
          <Routes>
            <Route path='/celulares' element={<Celulares />} />
            <Route path='/computadoras' element={<Computadores />} />
            <Route path='/sillas/:id' element={<Sillas />} />
            <Route path='/' element={<Home />} />
            <Route path='*' element={<h2> Sección en construcción </h2>} />
          </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App

//Ejemplo de enlaces: 

{/* <h1>Hola Mundo - Bienvenidos a la clase 5</h1>
<h2> Enlaces </h2>

<h3>Enlaces Absolutos </h3>
<a href="https://www.mercadolibre.com.ar" target='_blank'> MercadoLibre </a>
<br />
<a href="https://www.infobae.com" target='_blank'> Diario Online </a>

<h3>Enlaces Relativos </h3>
<a href=""> Al footer </a> */}