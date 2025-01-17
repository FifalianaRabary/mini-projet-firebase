// Fonction d'inscription
export function signUpWithEmail(firebaseAuth) {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;

    firebaseAuth.createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            const user = userCredential.user;

            // Mise à jour du profil utilisateur
            return user.updateProfile({
                displayName: `${firstName} ${lastName}`
            }).then(() => {
                alert(`Utilisateur créé : ${user.displayName}`);
                console.log("Profil mis à jour :", user);
            });
        })
        .catch(error => {
            console.error("Erreur d'inscription :", error.message);
            alert(error.message);
        });
}



