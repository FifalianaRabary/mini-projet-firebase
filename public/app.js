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