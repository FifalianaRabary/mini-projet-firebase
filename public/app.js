import { initializeApp } from "firebase/app";
import { getAuth, FacebookAuthProvider, signInWithPopup } from "firebase/auth";
document.addEventListener("DOMContentLoaded", event => {
    const app = firebase.app();
    console.log("Firebase initialized:", app);
});

// Fonction de connexion avec Google
function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider(); // Correction ici
    firebase.auth().signInWithPopup(provider)
        .then(result => {
            const user = result.user;
            document.body.innerHTML = `<h1>Hello ${user.displayName}</h1>`;
            console.log("Utilisateur connecté:", user);
        })
        .catch(error => {
            console.error("Erreur de connexion:", error);
        });
}

// Configurer Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCYMBmAK_2_np0lmyVZTIQijaiNUJ_0zCM",
    authDomain: "my-first-firebase-projec-87a48.firebaseapp.com",
    projectId: "my-first-firebase-projec-87a48",
    storageBucket: "my-first-firebase-projec-87a48.appspot.com",
    messagingSenderId: "VOTRE_SENDER_ID",
    appId: "1:973856885122:web:44ebcde21fd6212d70679b"
  };

  // Initialiser Firebase
  const app = firebase.initializeApp(firebaseConfig);

  // Fonction pour s'authentifier avec Facebook
  function loginWithFacebook() {
    const auth = firebase.auth();
    const provider = new firebase.auth.FacebookAuthProvider();

    auth.signInWithPopup(provider)
      .then((result) => {
        const user = result.user; // Utilisateur connecté
        console.log("Utilisateur connecté :", user);

        // Afficher les détails de l'utilisateur
        document.getElementById("status").innerHTML = `
          <p>Bienvenue, ${user.displayName}!</p>
          <p>Email: ${user.email || "Non disponible"}</p>
          <img src="${user.photoURL}" alt="Photo de profil">
        `;
      })
      .catch((error) => {
        console.error("Erreur d'authentification :", error);
        document.getElementById("status").innerText = "Erreur d'authentification.";
      });
  }