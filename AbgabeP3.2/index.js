"use strict";
var Aufgabe3_2;
(function (Aufgabe3_2) {
    let buttonJSON = document.getElementById("buttonJSON");
    buttonJSON.addEventListener("click", handlejson);
    let buttonHTML = document.getElementById("buttonHTML");
    buttonHTML.addEventListener("click", handlehtml); //gibt den jeweiligen Buttons den passenden EventListener (html, json) bei Click:
    let server = document.getElementById("server");
    async function handlehtml() {
        let formData = new FormData(document.forms[0]); //generiert FormData Objekt aus <form> im Dokument
        let url = "https://sebieyesstonegis2021.herokuapp.com";
        url += "/html";
        let query = new URLSearchParams(formData);
        url = url += "?" + query.toString();
        let response = await fetch(url);
        let responseText = await response.text();
        server.innerHTML = responseText; // füllt HTML auf der index.html Seite aus
    }
    async function handlejson() {
        let formData = new FormData(document.forms[0]);
        let url = "https://sebieyesstonegis2021.herokuapp.com";
        url += "/json";
        let query = new URLSearchParams(formData);
        url = url += "?" + query.toString();
        let response = await fetch(url);
        let responseText = await response.text();
        console.log(responseText);
        /**
                interface IResponse {
                    [key: string]: string;
                }
         */
    }
})(Aufgabe3_2 || (Aufgabe3_2 = {}));
//# sourceMappingURL=index.js.map