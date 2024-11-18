//Consumimos datitos de un backend propio: 

const contenedorProductos = document.getElementById("contenedorProductos"); 

fetch("https://api-productos-production.up.railway.app/productos")
    .then(response => response.json() )
    .then(data => {
        renderizarProductos(data);
    })
    .catch(error => console.log(error))


function renderizarProductos(arrayProductos) {
    const card = document.createElement("card"); 
    
    arrayProductos.forEach(item => {
        card.innerHTML +=`
                        <div class= "caja">
                            <p>ID: ${item.id} </p>
                            <p>Nombre: ${item.nombre} </p>
                            <p>Precio: ${item.precio} </p> 
                            <button class= "btn" > Comprar </button>  
                        </div>    
                        `
    })

    contenedorProductos.appendChild(card);
}