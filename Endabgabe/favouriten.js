"use strict";
window.onload = async () => {
    await clickAnzeigenFavoriten();
};
async function clickRemoveFavorites(_id) {
    console.log("funkton wird ausgeführt", _id);
    let form = new FormData(document.forms[0]);
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    form.append("benutzername", currentUser["benutzername"]);
    form.append("favoriten_id", _id);
    //let url: string = "http://localhost:8100";
    let url = "https://sebieyesstonegis2021.herokuapp.com";
    let query = new URLSearchParams(form);
    url = url + "/removeFavoriten" + "?" + query.toString();
    let response = await fetch(url);
    let ausgabe = await response.json();
    console.log("ausgabe", ausgabe);
    location.reload();
}
async function clickAnzeigenFavoriten() {
    console.log("BIN IN DER FUNKTION");
    let form = new FormData(document.forms[0]);
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    form.append("benutzername", currentUser["benutzername"]);
    //let url: string = "http://localhost:8100";
    let url = "https://sebieyesstonegis2021.herokuapp.com";
    let query = new URLSearchParams(form);
    url = url + "/favoriten" + "?" + query.toString();
    let response = await fetch(url);
    let ausgabe = await response.json();
    console.log("ausgabe", ausgabe);
    const datenbank = document.getElementById("favoriten");
    for (const rezept in ausgabe) {
        if (Object.prototype.hasOwnProperty.call(ausgabe, rezept)) {
            const aktuelleRe = ausgabe[rezept]; //1 rezept kein Array
            const buttonFav = document.createElement("button");
            const div = document.createElement("div");
            const p0 = document.createElement("p");
            const p1 = document.createElement("p");
            const p2 = document.createElement("p");
            const p3 = document.createElement("p");
            const p4 = document.createElement("p");
            const p5 = document.createElement("p");
            buttonFav.innerHTML = "entfernen";
            buttonFav.onclick = () => {
                console.log("Favorit wird entfernt", aktuelleRe._id);
                clickRemoveFavorites(aktuelleRe._id);
            };
            p0.innerHTML = "Benutzername: " + aktuelleRe.benutzername;
            p1.innerHTML = "Rezeptename: " + aktuelleRe.rezeptname;
            p2.innerHTML = "Anzahl: " + aktuelleRe.anzahl;
            p3.innerHTML = "Zutaten: " + aktuelleRe.zutaten;
            p4.innerHTML = "Kategorie: " + aktuelleRe.kategorie;
            p5.innerHTML = "Zutatenliste: " + aktuelleRe.zutatenliste;
            div.className = "boxkomplett";
            div.appendChild(p0);
            div.appendChild(p1); //alle infos jeweils
            div.appendChild(p2);
            div.appendChild(p3);
            div.appendChild(p4);
            div.appendChild(p5);
            div.appendChild(buttonFav);
            datenbank.appendChild(div); //alle enthält
        }
        console.log("ich hab es hier her geschafft");
    }
}
//# sourceMappingURL=favouriten.js.map