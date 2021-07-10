"use strict";
async function favoritenLaden() {
    console.log("BIN IN DER FUNKTION");
    //let url: string = "http://localhost:8100";
    let url = "https://sebieyesstonegis2021.herokuapp.com";
    url = url + "/erhalten" + "?";
    let response = await fetch(url);
    let ausgabe = await response.json();
    console.log(ausgabe);
    const datenbank = document.getElementById("favoriten");
    datenbank.innerHTML = "";
    if (JSON.parse(localStorage.getItem("Favoriten")) === null || JSON.parse(localStorage.getItem("Favoriten")).length == 0) {
        const div = document.createElement("div");
        div.innerHTML = "Noch keine Favoriten.";
        datenbank.appendChild(div);
    }
    else {
        for (const rezept in ausgabe) {
            if (Object.prototype.hasOwnProperty.call(ausgabe, rezept)) {
                const aktuelleRe = ausgabe[rezept]; //1 rezept kein Array
                const div = document.createElement("div");
                const p1 = document.createElement("p");
                const p2 = document.createElement("p");
                const p3 = document.createElement("p");
                const p4 = document.createElement("p");
                const p5 = document.createElement("p");
                // Rezepte Favosieren
                const favButton = document.createElement("button");
                favButton.addEventListener("click", () => {
                    let favorites = JSON.parse(localStorage.getItem("Favoriten"));
                    console.log(favorites);
                    if (favorites === null || favorites === undefined) {
                        console.log("Undefined!");
                        favorites = [];
                        favorites[0] = aktuelleRe._id;
                    }
                    else if (favorites.indexOf(aktuelleRe._id) != -1) {
                        favorites.splice(favorites.indexOf(aktuelleRe._id), 1);
                    }
                    else {
                        favorites.push(aktuelleRe._id);
                    }
                    localStorage.setItem("Favoriten", JSON.stringify(favorites));
                    console.log(favorites);
                    favoritenLaden();
                });
                let favorites = JSON.parse(localStorage.getItem("Favoriten"));
                console.log("Howdy");
                console.log(favorites);
                if (favorites !== null && favorites !== undefined && favorites.indexOf(aktuelleRe._id) != -1) {
                    favButton.innerHTML = "Nicht mehr Favorisieren";
                }
                else {
                    favButton.innerHTML = "Favorisieren";
                }
                p1.innerHTML = "Rezeptename: " + aktuelleRe.rezeptname;
                p2.innerHTML = "Anzahl: " + aktuelleRe.anzahl;
                p3.innerHTML = "Zutaten: " + aktuelleRe.zutaten;
                p4.innerHTML = "Kategorie: " + aktuelleRe.kategorie;
                p5.innerHTML = "Zutatenliste: " + aktuelleRe.zutatenliste;
                div.className = "boxkomplett";
                if (favorites.indexOf(aktuelleRe._id) != -1) {
                    div.appendChild(p1); //alle infos jeweils
                    div.appendChild(p2);
                    div.appendChild(p3);
                    div.appendChild(p4);
                    div.appendChild(p5);
                    div.appendChild(favButton);
                    datenbank.appendChild(div); //alle enthält
                }
            }
            console.log("ich hab es hier her geschafft");
        }
    }
}
window.addEventListener("load", function () {
    favoritenLaden();
});
//# sourceMappingURL=favouriten.js.map