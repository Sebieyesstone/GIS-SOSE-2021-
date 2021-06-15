"use strict";
var Aufgabe3_4;
(function (Aufgabe3_4) {
    let buttonAbschicken = document.getElementById("datenAbschicken");
    buttonAbschicken.addEventListener("click", clickAbschicken);
    let buttonErhalten = document.getElementById("datenErhalten");
    buttonErhalten.addEventListener("click", clickErhalten);
    let ausgabe = document.getElementById("pResponse");
    async function clickAbschicken() {
        let form = new FormData(document.forms[0]);
        let url = "https://sebieyesstonegis2021.herokuapp.com";
        let query = new URLSearchParams(form);
        url = url + "/insert?" + query.toString();
        await fetch(url);
        console.log("Daten wurden abgeschickt");
    }
    async function clickErhalten() {
        let form = new FormData(document.forms[0]);
        let url = "https://sebieyesstonegis2021.herokuapp.com";
        let query = new URLSearchParams(form);
        url = url + "/get?" + query.toString();
        let serverResponse = await fetch(url);
        let stringResponse = await serverResponse.text();
        ausgabe.innerHTML = stringResponse;
        console.log("Daten wurden erhalten");
    }
})(Aufgabe3_4 || (Aufgabe3_4 = {}));
//# sourceMappingURL=index.js.map