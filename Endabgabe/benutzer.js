"use strict";
let buttonRezeptabschicken = document.getElementById("rezeptabschicken");
buttonRezeptabschicken.addEventListener("click", clickAbschicken);
let buttonRezepterhalten = document.getElementById("rezepterhalten");
buttonRezepterhalten.addEventListener("click", clickErhalten);
async function clickAbschicken() {
    console.log("hier bin ich auch");
    let form = new FormData(document.forms[0]);
    //let url: string = "http://localhost:8100";
    let url = "https://sebieyesstonegis2021.herokuapp.com";
    let query = new URLSearchParams(form);
    url = url + "/abschicken" + "?" + query.toString();
    console.log(url);
    let response = await fetch(url);
    let ausgabe = await response.text();
    let serverA = document.getElementById("datenbank");
    serverA.innerHTML = ausgabe;
    await fetch(url);
    console.log(form.get("kategorie"));
}
async function clickErhalten() {
    console.log("BIN IN DER FUNKTION");
    //let url: string = "http://localhost:8100";
    let url = "https://sebieyesstonegis2021.herokuapp.com";
    url = url + "/erhalten" + "?";
    let response = await fetch(url);
    let ausgabe = await response.json();
    console.log(ausgabe);
    const datenbank = document.getElementById("datenbank");
    const aktuelleRe = ausgabe[ausgabe.length - 1]; //1 rezept kein Array
    const div = document.createElement("div");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    const p4 = document.createElement("p");
    const p5 = document.createElement("p");
    /*// Rezepte Favosieren
    const favButton: HTMLButtonElement = document.createElement("button");

    favButton.addEventListener("click", () => {
        let favorites: string[] = JSON.parse(localStorage.getItem("Favoriten"));

        if (favorites === null || favorites === undefined) {
            favorites = [];
            favorites[0] = aktuelleRe._id;
        } else if (favorites.indexOf(aktuelleRe._id) != -1) {
            favorites.splice(favorites.indexOf(aktuelleRe._id), 1);
        } else {
            favorites.push(aktuelleRe._id);
        }

        localStorage.setItem("Favoriten", JSON.stringify(favorites));
        console.log(favorites);
        rezepteLaden();
    });

    let favorites: string[] = JSON.parse(localStorage.getItem("Favoriten"));
    console.log(favorites);

    if (favorites !== null && favorites !== undefined && favorites.indexOf(aktuelleRe._id) != -1) {
        favButton.innerHTML = "Nicht mehr Favorisieren";
    } else {
        favButton.innerHTML = "Favorisieren";
    }
    */
    //Rezept bearbeiten
    const editButton = document.createElement("button");
    editButton.innerHTML = "Bearbeiten";
    editButton.addEventListener("click", () => {
        const newRezeptName = document.createElement("input");
        newRezeptName.value = aktuelleRe.rezeptname;
        const newRezeptAnzahl = document.createElement("input");
        newRezeptAnzahl.value = aktuelleRe.anzahl.toString();
        const newRezeptZutaten = document.createElement("input");
        newRezeptZutaten.value = aktuelleRe.zutaten.toString();
        const newRezeptKategorie = document.createElement("input");
        newRezeptKategorie.value = aktuelleRe.kategorie.toString();
        const newRezeptListe = document.createElement("input");
        newRezeptListe.value = aktuelleRe.zutatenliste.toString();
        editButton.hidden = true;
        p1.innerHTML = "Rezeptename: ";
        p1.appendChild(newRezeptName);
        p2.innerHTML = "Anzahl: ";
        p2.appendChild(newRezeptAnzahl);
        p3.innerHTML = "Zutaten: ";
        p3.appendChild(newRezeptZutaten);
        p4.innerHTML = "Kategorie: ";
        p4.appendChild(newRezeptKategorie);
        p5.innerHTML = "Zutatenliste: ";
        p5.appendChild(newRezeptListe);
        const submitEdit = document.createElement("button");
        submitEdit.innerHTML = "Absenden";
        submitEdit.addEventListener("click", async () => {
            //let url: string = "http://localhost:8100";
            let url = "https://sebieyesstonegis2021.herokuapp.com";
            url = url + "/update" + "?" +
                "ID=" + aktuelleRe._id +
                "&rezeptname=" + encodeURI(newRezeptName.value.toString()) +
                "&anzahl=" + encodeURI(newRezeptAnzahl.value.toString()) +
                "&zutaten=" + encodeURI(newRezeptZutaten.value.toString()) +
                "&kategorie=" + encodeURI(newRezeptKategorie.value.toString()) +
                "&zutatenliste=" + encodeURI(newRezeptZutaten.value.toString());
            console.log("Sende update Anfrage an : " + url);
            let response = await fetch(url);
            console.log("Update anfage hatte rückgabe: ");
            console.log(response);
            favoritenLaden();
        });
        div.appendChild(submitEdit);
    });
    p1.innerHTML = "Rezeptename: " + aktuelleRe.rezeptname;
    p2.innerHTML = "Anzahl: " + aktuelleRe.anzahl;
    p3.innerHTML = "Zutaten: " + aktuelleRe.zutaten;
    p4.innerHTML = "Kategorie: " + aktuelleRe.kategorie;
    p5.innerHTML = "Zutatenliste: " + aktuelleRe.zutatenliste;
    div.className = "boxkomplett";
    div.appendChild(p1); //alle infos jeweils
    div.appendChild(p2);
    div.appendChild(p3);
    div.appendChild(p4);
    div.appendChild(p5);
    //div.appendChild(favButton);
    div.appendChild(editButton);
    datenbank.appendChild(div); //alle enthält
    console.log("ich hab es hier her geschafft");
}
//# sourceMappingURL=benutzer.js.map