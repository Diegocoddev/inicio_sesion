// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSQzjZR9B7RI3yUQ9-mr9VZNz-W6g51gc",
  authDomain: "formulario-prueba-e1ee4.firebaseapp.com",
  projectId: "formulario-prueba-e1ee4",
  storageBucket: "formulario-prueba-e1ee4.appspot.com",
  messagingSenderId: "917603825581",
  appId: "1:917603825581:web:1206438964757e17481324",
  measurementId: "G-RPWQPVQCEV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (evento)=> {
    evento.preventDefault()
    let correo = evento.target.correo.value 
    let contraseña = evento.target.contraseña.value
    signInWithEmailAndPassword(auth, correo, contraseña)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        //console.log(user);
        //console.log("Inició Sesión");

        window.location.href = "./Bienvenida/index.html"
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
}  )

