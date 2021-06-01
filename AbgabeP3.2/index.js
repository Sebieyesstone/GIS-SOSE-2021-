"use strict";
var Aufgabe3_2;
(function (Aufgabe3_2) {
    let buttonJson = document.getElementById("jsonbutton");
    buttonJson.addEventListener("click", handlejson);
    let buttonHTML = document.getElementById("htmlbutton");
    buttonHTML.addEventListener("click", handlehtml);
    let server = document.getElementById("server");
    async function handlehtml() {
        let formData = new FormData(document.forms[0]);
        let _url = "https://sebieyesstonegis2021.herokuapp.com";
        _url += "/html";
        let query = new URLSearchParams(formData);
        _url = _url += "?" + query.toString();
        let response = await fetch(_url);
        let responseText = await response.text();
        server.innerHTML = responseText;
    }
    async function handlejson() {
        let formData = new FormData(document.forms[0]);
        let _url = "https://sebieyesstonegis2021.herokuapp.com";
        _url += "/json";
        let query = new URLSearchParams(formData);
        _url = _url += "?" + query.toString();
        let response = await fetch(_url);
        let responseText = await response.text();
        console.log(responseText);
        let responseJSON = JSON.parse(responseText);
        console.log(responseJSON);
        server.innerHTML = responseText;
        console.log(server);
    }
})(Aufgabe3_2 || (Aufgabe3_2 = {}));
//# sourceMappingURL=index.js.map