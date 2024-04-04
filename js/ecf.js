let listeType = ["Votre demande concerne", "Information articles", "Commande & paiement", "Expédition & livraison", "Retour, échange & remboursement", "Code promo & Bon d'achat", "Newsletters", "Problème technique", "Autres demandes", "Protection des données personnelles"];
let listePhoto = ["Choisir photo", "alain", "albert", "alfred", "alphonse", "alphonsine", "berth", "elisabeth", "gertrude", "gilbert", "gilberte", "hugh", "jacques", "john"];

let form = document.getElementById("formClient");
// déclaration de variables à tester
let demande = document.getElementById("selectType");
let message = document.getElementById("message");
let nom = document.getElementById("nom");
let prenom = document.getElementById("prenom");
let courriel = document.getElementById("courriel");
let photo = document.getElementById("selectPhoto");
let image = document.getElementById("image");
//déclaration des variables de renvoi d'erreurs
let erreurDemande = document.getElementById("demandeError");
let erreurMessage = document.getElementById("messageError");
let erreurNom = document.getElementById("nomError");
let erreurPrenom = document.getElementById("prenomError");
let erreurCourriel = document.getElementById("courrielError");
let erreurPhoto = document.getElementById("photoError");

//regex de vérification 
let regexString = /^[\w-]{3,}$/;
let regexCourriel = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;  //doit etre ==

let option0Photo = listePhoto[0]; //doit etre !== 
let option0Demande = listeType[0];

// ajout des options aux Combobox
listeType.forEach(element => {
    let demandeOption = document.createElement('option');
    demandeOption.innerText = element;
    demande.appendChild(demandeOption);

});

listePhoto.forEach(element => {
    let photoOption = document.createElement('option');
    photoOption.innerText = element;
    photo.appendChild(photoOption);


});
// listener
// click photo
photo.addEventListener('click', () => {
    if (photo.value !== option0Photo) {
        image.setAttribute('src', `./photos/${photo.value}.jpg`);
    } else {
        image.setAttribute('src', `./photos/neutre.jpg`);
    }
    console.log(photo.value);
})


function verifForm() {
    let nbErreur = 0;


    nbErreur += testSelection(demande, "Vous devez selectionner votre Demande", option0Demande, erreurDemande);
    nbErreur += testSelection(photo, "Vous devez selectionner votre photo", option0Photo, erreurPhoto);
    nbErreur += testInput(message, "Vous devez saisir votre message", regexString, erreurMessage);
    nbErreur += testInput(nom, "Vous devez saisir votre nom", regexString, erreurNom);
    nbErreur += testInput(prenom, "Vous devez saisir votre prénom", regexString, erreurPrenom);
    nbErreur += testInput(courriel, "Vous devez saisir un email valide", regexCourriel, erreurCourriel);

    return nbErreur == 0 ? true : false;
};

function testInput(input, message, regex, erreurDiv) {
    let erreur = 0
    if (!regex.test(input.value)) {
        erreurDiv.innerText = message;
        erreur = 1;
    } else {
        erreurDiv.innerText = "";
    }
    console.log(erreur);
    return erreur
};

function testSelection(selection, message, option, erreurDiv) {
    let erreur = 0
    if (selection.value == option) {
        erreurDiv.innerText = message;
        erreur = 1;
    } else {
        erreurDiv.innerText = "";
    }
    return erreur
};
// Fonction pour sauvegarder les données dans le localStorage
function sauvegarderDonnees() {

    localStorage.setItem("nom", nom.value);
    localStorage.setItem("prenom", prenom.value);
    localStorage.setItem("selectType", demande.value);
    localStorage.setItem("selectPhoto", selectPhoto.value + ".jpg");
    localStorage.setItem("courriel", courriel.value);
    localStorage.setItem("message", message.value);

};

//listener
form.addEventListener("submit", (event) => {

    if (!verifForm()) {
        event.preventDefault()
    } else {
        client.sauvegarderDonnees()
    }
    console.log(form);
    console.log(client);
});

let btnReset = document.getElementById("btnReset");
btnReset.addEventListener('click', () => {
    let erreurs = document.querySelectorAll('.erreur');
    erreurs.forEach(erreur => {
        erreur.innerText = "";
    });
});
