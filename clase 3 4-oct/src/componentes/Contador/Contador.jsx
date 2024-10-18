//Para crear un contador necesito tener una "variable" que almacene el numerito de productos. Y esto lo puedo lograr invocando al Hook "useState". 

//1) Lo tengo que importar: 
import { useState, useEffect } from "react"

//2) UseState me retorna un array, y este array tiene en su interior 2 elementos. 
//El primero de los elementos es el "estado". El segundo es una función, que me permite modificar el valor del estado. 

//UseEffect me permite manipular los efectos secundarios de los cambios de estado. 

//let retornoUseState = [estado, funcionQueCambiaDatosEnEstado]; 

const Contador = () => {
    const [contador, setContador] = useState(1);
    //el valor inicial del contador se pasa como parametro al useState. 

    //Creamos las funciones para aumentar y disminuir el contador. 
    let stock = 15;

    //Practicamos con el UseEffect: 
    useEffect(() => {
        document.title = `Contador ${contador}`;

    }, [contador])
    //El useEffect trabaja con dos parametros, el primero es una función con la lógica de la acción que debe desarrollar, y el segundo, es un array de dependencias. 

    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if (contador > 1) {
            setContador(contador - 1);

        }
    }

    return (
        <div>
            <button onClick={decrementar}> - </button>
            <p> {contador} </p>
            <button onClick={incrementar}> + </button>
        </div>
    )
}
//Incrementar y decrementar van sin parentesis sino se ejecutarian al momento de renderizar el componente. 
export default Contador