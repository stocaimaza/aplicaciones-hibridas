import { useEffect, useState } from "react"; 

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        //Consumimos datos de JsonPlaceHolder: 
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.log(error))
    }, [])
  return (
    <div>
        <h1>Bienvenidos a la App</h1>
        <p>Esta es una aplicación que consume datos de una API pública y nos permite interactuar a traves de un chat</p>

        <h2> Ultimos Posts de nuestro Blog </h2>
        <ul>
            {
                posts.map(post => (
                    <li key={post.id}>
                        <h3> {post.title} </h3>
                        <p> {post.body} </p>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Home