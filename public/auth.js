// Fonction d'inscription
// Fonction d'inscription
export function signUpWithEmail(firebaseAuth) {
    console.log("Bouton S'inscrire cliqué"); // Ajout d'un log pour vérifier si la fonction est appelée

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;

    console.log("Valeurs récupérées :", { email, password, firstName, lastName }); // Log pour vérifier les valeurs

    firebaseAuth.createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            console.log("Utilisateur créé avec succès :", userCredential); // Log pour succès

            const user = userCredential.user;

            // Mise à jour du profil utilisateur
            return user.updateProfile({
                displayName: `${firstName} ${lastName}`
            }).then(() => {
                console.log("Profil utilisateur mis à jour :", user);

                // Sauvegarder le nom d'utilisateur
                sessionStorage.setItem("userName", `${firstName} ${lastName}`);
                
                // Redirection vers dashboard.html
                window.location.href = "dashboard.html";
            });
        })
        .catch(error => {
            console.error("Erreur d'inscription :", error.message); // Log pour les erreurs
            alert(error.message);
        });
}



// Fonction de connexion
export function loginWithEmail(firebaseAuth) {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    firebaseAuth.signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            const user = userCredential.user;
            alert(`Connecté : ${user.displayName || user.email}`);
            console.log(user);
        })
        .catch(error => {
            console.error("Erreur de connexion :", error.message);
            alert(error.message);
        });
}

// Fonction de connexion
export function loginWithEmail(firebaseAuth) {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    firebaseAuth.signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            const user = userCredential.user;
            alert(`Connecté : ${user.displayName || user.email}`);
            console.log(user);
        })
        .catch(error => {
            console.error("Erreur de connexion :", error.message);
            alert(error.message);
        });
}
