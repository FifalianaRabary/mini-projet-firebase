import { logout } from './auth.js';

// Initialiser Firebase (si ce n'est pas déjà fait)
const firebaseAuth = firebase.auth();

document.addEventListener("DOMContentLoaded", () => {
    const welcomeMessage = document.getElementById("welcomeMessage");
    const logoutButton = document.getElementById("logoutButton");

    // Vérifier si l'utilisateur est connecté
    firebaseAuth.onAuthStateChanged(user => {
        if (user) {
            // Afficher le nom de l'utilisateur
            const displayName = user.displayName || "Utilisateur";
            welcomeMessage.textContent = `Hello ${displayName}`;
        } else {
            // Rediriger vers la page de connexion si déconnecté
            window.location.href = "index.html";
        }
    });

    // Gérer la déconnexion
    logoutButton.addEventListener("click", () => {
        logout(firebaseAuth).then(() => {
            window.location.href = "index.html"; // Redirection après déconnexion
        });
    });
});
