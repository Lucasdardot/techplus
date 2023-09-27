 
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
 import { getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js";
 import { getDatabase, ref, set, push } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-database.js";

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
  const database = getDatabase(app)
 
 const form = document.getElementById("cadastroform")

 form.addEventListener("submit", async function(event){
    event.preventDefault()
    const cpf= document.getElementById("cpf").value
    const senha= document.getElementById("senha").value 
    const email = document.getElementById("e-mail").value
    const endereco = document.getElementById("endereco").value
    
    try{
        // o bloco try é usado para envolver o trecho de código que você espera acontecer erros
        const userCredential = await createUserWithEmailAndPassword(auth, email, senha)
        const user = userCredential.user

        //salve informações adicionais no banco de dados associados ao usuário
        const userRef = ref(database,"users")
        const newUserRef = push(userRef, user.uid)
        set(newUserRef, {
            cpf: cpf,
            email: email,
            endereco: endereco
        })
        console.log("Usuáro cadastrado", user)
    } catch (error) { // o bloco catch é usado para capturar e tratar erros que podem ocorrer dentro do bloco try
        console.error("erro ao cadastrar o usuário", error)
    }

    form.reset()
 } )