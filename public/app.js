// Importation des modules Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { signUpWithEmail , loginWithEmail } from "./auth";

// Configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCYMBmAK_2_np0lmyVZTIQijaiNUJ_0zCM",
  authDomain: "my-first-firebase-projec-87a48.firebaseapp.com",
  projectId: "my-first-firebase-projec-87a48",
  storageBucket: "my-first-firebase-projec-87a48.appspot.com",
  messagingSenderId: "973856885122",
  appId: "1:973856885122:web:44ebcde21fd6212d70679b",
};

// Initialisation de Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Fonction de connexion avec Google
function googleLogin() {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      document.getElementById("status").innerHTML = `
        <p>Bienvenue, ${user.displayName}!</p>
        <p>Email: ${user.email}</p>
        <img src="${user.photoURL}" alt="Photo de profil">
      `;
      console.log("Utilisateur connecté avec Google :", user);
    })
    .catch((error) => {
      console.error("Erreur de connexion Google :", error);
    });
}

// Fonction de connexion avec Facebook
function loginWithFacebook() {
  const provider = new FacebookAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      document.getElementById("status").innerHTML = `
        <p>Bienvenue, ${user.displayName}!</p>
        <p>Email: ${user.email}</p>
        <img src="${user.photoURL}" alt="Photo de profil">
      `;
      console.log("Utilisateur connecté avec Facebook :", user);
    })
    .catch((error) => {
      console.error("Erreur de connexion Facebook :", error);
    });
}

// Ajout des écouteurs d'événements aux boutons
document.getElementById("googleLoginBtn").addEventListener("click", googleLogin);
document.getElementById("facebookLoginBtn").addEventListener("click", loginWithFacebook);

document.getElementById("signUpBtn").addEventListener("click", () => signUpWithEmail(auth));
document.getElementById("loginBtn").addEventListener("click", () => loginWithEmail(auth));

