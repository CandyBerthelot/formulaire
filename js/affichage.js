import { Client } from "./classes/Client.js";
// Charger les données sauvegardéer lors du chargement de la page
window.addEventListener('load', function () {



    let nomElement = document.getElementById("nom");
    let prenomElement = document.getElementById("prenom");
    let demandeElement = document.getElementById("demande");
    let courrielElement = document.getElementById("mail");
    let messageElement = document.getElementById("message");
    let image = document.querySelector('img');
    let client = new Client(localStorage.getItem('nom'), localStorage.getItem('prenom'), localStorage.getItem('selectType'), localStorage.getItem('selectPhoto'), localStorage.getItem('courriel'), localStorage.getItem('message'),);

    // Afficher les données récupérées sur la page HTML
    nomElement.innerText = `Nom : ${client.getNom()}`;
    prenomElement.innerText = `Prénom : ${client.getPrenom()}`;
    demandeElement.innerText = `Demande : ${client.getDemande()}`;
    courrielElement.innerText = `Courriel : ${client.getCourriel()}`;
    messageElement.innerText = `Message : ${client.getMessage()}`;
    image.setAttribute('src', `./photos/${client.getPhoto()}.jpg`);

});