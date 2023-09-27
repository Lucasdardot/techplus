 
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
 import { getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js";


 const firebaseConfig = {
    apiKey: "AIzaSyBC9GQCLiIgUhXkhKhN_89OGxYL0cng_cw",
    authDomain: "tecplus-7655a.firebaseapp.com",
    databaseURL: "https://tecplus-7655a-default-rtdb.firebaseio.com",
    projectId: "tecplus-7655a",
    storageBucket: "tecplus-7655a.appspot.com",
    messagingSenderId: "392175037155",
    appId: "1:392175037155:web:af2c66b007aaede671f3d6"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app)
 
 const loginform = document.getElementById("loginform")

 loginform.addEventListener("submit", async function(event){
    event.preventDefault()
   
    const senha= document.getElementById("loginsenha").value 
    const email = document.getElementById("loginemail").value
  
    try{
        // o bloco try é usado para envolver o trecho de código que você espera acontecer erros
        const userCredential = await signInWithEmailAndPassword(auth, email, senha)
        const user = userCredential.user

        console.log("Usuáro logado", user)
    } catch (error) { // o bloco catch é usado para capturar e tratar erros que podem ocorrer dentro do bloco try
        
        if(error.code === 'auth/uer-not-found'){
            console.error("email não encontrado", error.message)
        } else if( error.code === 'auth/wrong-password'){
            console.error("senha incorreta", error.message)
        }else { console.error("erro ao fazer login", error.message)}
           
        
    }

    loginform.reset()
 } )