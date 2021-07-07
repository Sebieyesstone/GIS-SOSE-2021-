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
    let ausgabe = await response.text();
    let serverA = document.getElementById("datenbank");
    serverA.innerHTML = ausgabe;
    document.getElementById("datenbank").innerHTML = ausgabe;
}
//# sourceMappingURL=benutzer.js.map