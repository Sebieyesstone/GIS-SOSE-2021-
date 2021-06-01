"use strict";
var Aufgabe3_2;
(function (Aufgabe3_2) {
    let buttonjson = document.getElementById("jsonbutton");
    buttonjson.addEventListener("click", handlejson);
    let buttonhtml = document.getElementById("htmlbutton");
    buttonhtml.addEventListener("click", handlehtml);
    let server = document.getElementById("server");
    async function handlehtml() {
        let formData = new FormData(document.forms[0]);
        let _url = "https://sebieyesstonegis2021.herokuapp.com";
        _url += "/html";
        let query = new URLSearchParams(formData);
        _url = _url += "?" + query.toString();
        let response = await fetch(_url);
        let responseText = await response.text();
        let server = document.getElementById("server");
        server.innerText = responseText;
    }
    async function handlejson() {
        let formData = new FormData(document.forms[0]);
        let _url = "https://sebieyesstonegis2021.herokuapp.com";
        _url += "/json";
        let query = new URLSearchParams(formData);
        _url = _url += "?" + query.toString();
        let response = await fetch(_url);
        let responseText = await response.text();
        let responseJSON = JSON.parse(responseText);
        console.log(responseJSON);
        console.log(responseText);
        server.innerHTML = responseText;
        console.log(server);
    }
})(Aufgabe3_2 || (Aufgabe3_2 = {}));
//# sourceMappingURL=index.js.map