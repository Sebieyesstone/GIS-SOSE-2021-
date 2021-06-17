"use strict";
var Aufgabe3_4;
(function (Aufgabe3_4) {
    let buttonAbschicken = document.getElementById("datenAbschicken");
    buttonAbschicken.addEventListener("click", clickAbschicken);
    let buttonErhalten = document.getElementById("datenErhalten");
    buttonErhalten.addEventListener("click", clickErhalten);
    let buttonEnfernen = document.getElementById("datenEntfernen");
    buttonEnfernen.addEventListener("click", clickEntfernen);
    async function clickAbschicken() {
        let form = new FormData(document.forms[0]);
        let url = "https://sebieyesstonegis2021.herokuapp.com";
        let query = new URLSearchParams(form);
        url = url + "/abschicken" + "?" + query.toString();
        await fetch(url);
    }
    async function clickErhalten() {
        let formD = new FormData(document.forms[0]);
        let url = "https://sebieyesstonegis2021.herokuapp.com";
        url = formD + "/erhalten";
        let response = await fetch(url);
        let ausgabe = await response.text();
        let console = document.getElementById("serverAntwort");
        console.innerHTML = ausgabe;
    }
    async function clickEntfernen() {
        let formData = new FormData(document.forms[0]);
        let url = "https://sebieyesstonegis2021.herokuapp.com";
        let query = new URLSearchParams(formData);
        url = url + "/entfernen" + "?" + query.toString();
        let response = await fetch(url);
        let ausgabe = await response.text();
        let console = document.getElementById("serverAntwort");
        console.innerHTML = ausgabe;
    }
})(Aufgabe3_4 || (Aufgabe3_4 = {}));
//# sourceMappingURL=index.js.map