//Map es un método nativo de JS que me permite recibir un array y retornar uno nuevo pero transformando sus elementos.

//En React lo vamos a usar para pasar un array de datos y crear una lista de componentes o elementos de jsx para renderizar en pantalla. 

const Map = () => {

    //Creamos un array de Productos: 
    const productos = [
        {id: 1, nombre: "Pc Gamer", precio: 1000}, 
        {id: 2, nombre: "Teclado Gamer", precio: 300}, 
        {id: 3, nombre: "Mouse Gamer", precio: 150}, 
        {id: 4, nombre: "Silla Gamer", precio: 1500}
    ]

  return (
    <div>
        <h2> Productos Gamer: </h2>
        <ul>
            {
                productos.map((producto, index) => (
                    <li key={index}>
                        <span> {producto.nombre} - </span>
                        <span> {producto.precio} </span>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Map