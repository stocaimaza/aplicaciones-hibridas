import { useState, useEffect } from "react"; 

const LoaderApi = () => {
    const [loader, setLoader] = useState(true); 
    const [usuarios, setUsuarios] = useState([]); 

    useEffect( () => {
        setTimeout( () => {
            fetch("https://jsonplaceholder.typicode.com/users")
                .then(respuesta => respuesta.json())
                .then(data => {
                    setUsuarios(data); 
                    setLoader(false); 
                })
                
        }, 4000)
    }, [])

  return (
    <div>
        <h2>Usuarios de JSONPlaceHolder</h2>

        {loader ? <h2> Cargado Data! </h2> : <h2> Usuarios generados! </h2>}

        <ul>
            {
                usuarios.map(usuario => (
                    <li key={usuario.id}> {usuario.name} </li>
                ))
            }
        </ul>
    </div>
  )
}

export default LoaderApi