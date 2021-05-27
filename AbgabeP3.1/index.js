"use strict";
var Aufgabe3_1;
(function (Aufgabe3_1) {
    let button = document.getElementById("button");
    button.addEventListener("click", handle);
    async function handle() {
        let formData = new FormData(document.forms[0]);
        let url = "https://sebieyesstonegis2021.herokuapp.com";
        let query = new URLSearchParams(formData.toString());
        //url + query zusammenfügen
        url = url + "?" + query.toString();
        console.log("url: " + url);
        //Antwort des Servers (zusammengesetztes url+query)
        let response = await fetch(url);
        console.log("Antwort des Servers:" + response.toString());
    }
})(Aufgabe3_1 || (Aufgabe3_1 = {}));
//# sourceMappingURL=index.js.map