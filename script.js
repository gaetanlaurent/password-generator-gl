// Fonction mot de passe random
function generatePassword() {
    const lengthInput = document.getElementById("length");                                                   // Champ pour la longueur
    const passwordField = document.getElementById("password");                                               // Champ du mot de passe

    //Longueur du mot de passe
    let length = parseInt(lengthInput.value, 10);       // On lit la valeur entré par l'utilisateur et l'envoie dans la variable "length"

    //Vérif de la longueur
    if (isNaN(length) || length < 12 || length > 128) {                             // Vérifie si la valeur est comprise entre 12 et 128
        alert("Veuillez entrer une longueur entre 12 et 128 caractères.");          // Si la valeur est pas entre 12 et 128, envoie une alerte
        return;
    }

    //Caractères dispos
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+<>?";   // Définie les caractères possibles
    let password = "";                                      //On prépare la variable "password" en la laissant vide pour l'utiliser plus tard

    //Génération du mot de passe
    for (let i = 0; i < length; i++) {      //On crée une variable "i" égal a 0 puis on vérifie si elle est inférieur a la variable "length"
        const randomIndex = Math.floor(Math.random() * charset.length);                   //Crée un entier entre 0 et "charset.length"
        password += charset[randomIndex];                       // On définie le mot de passe dans les caractères aléatoires du charset
    }

    //Affichage du mdp
    passwordField.value = password;                   //On envoie la valeur du mot de passe dans le champ avec l'id "password"
}
