import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//Vamos a importar dos funciones del módulo de Firebase. 
//initializeApp = la voy a usar para crear la conexión con Firebase. 
//getFirestore = se utiliza para obtener una instancia de Firestore. 

//Este es un objeto con toda nuestra información de la cuenta. 
//Acá se incluye la key personal para acceder a la base de datos. 

const firebaseConfig = {
  apiKey: "AIzaSyArHySRsCybiafmEUmmnIyTRqc_ridPkog",
  authDomain: "nuevaescuela--chat.firebaseapp.com",
  projectId: "nuevaescuela--chat",
  storageBucket: "nuevaescuela--chat.appspot.com",
  messagingSenderId: "350408584069",
  appId: "1:350408584069:web:60dd161ffb6346564332ec"
};

//incializamos Firebase y se pasa la configuración como argumento. Esto me retorna una instancia de Firebase. 
const app = initializeApp(firebaseConfig); 

//Ahora uso esa instancia para obtener los servicios de FireStore: 

export const db = getFirestore(app); 
//No se olviden de exportarla asi la pueden usar en cualquier componente. 
