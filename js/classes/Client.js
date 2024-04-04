export class Client {

    #nom;
    #prenom;
    #demande;
    #photo;
    #courriel;
    #message;

    constructor(nom, prenom, demande, photo, courriel, message) {

        this.setNom(nom);
        this.setPrenom(prenom);
        this.setDemande(demande);
        this.setPhoto(photo);
        this.setCourriel(courriel);
        this.setMessage(message);

    }


    setNom(nom) {

        this.#nom = nom;

    }
    setPrenom(prenom) {

        this.#prenom = prenom;

    }
    setDemande(demande) {

        this.#demande = demande;

    }
    setPhoto(photo) {

        this.#photo = photo;

    }
    setCourriel(courriel) {

        this.#courriel = courriel;

    }
    setMessage(message) {

        this.#message = message;

    }

    getNom() {
        return this.#nom;
    }
    getPrenom() {
        return this.#prenom;
    }
    getDemande() {
        return this.#demande;
    }
    getPhoto() {
        return this.#photo;
    }
    getCourriel() {
        return this.#courriel;
    }
    getMessage() {
        return this.#message;
    }




}

