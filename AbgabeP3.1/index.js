"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const url_1 = require("url");
var Aufgabe3_1;
(function (Aufgabe3_1) {
    let button = document.getElementById("button");
    button.addEventListener("click", handle);
    async function handle() {
        let formData = new FormData(document.forms[0]);
        let _url = "https://sebieyesstonegis2021.herokuapp.com";
        let query = new url_1.URLSearchParams(formData);
        _url = _url + "?" + query.toString();
        await fetch(_url);
        for (let entry of query) {
            console.log(entry);
            console.log("name: " + entry[0]);
            console.log("value: " + entry[1]);
        }
        let response = await fetch(_url);
        let answer = await response.text();
        console.log(answer);
        let paragraph = document.createElement("p");
        paragraph.innerText = answer;
        document.body.appendChild(paragraph);
    }
})(Aufgabe3_1 || (Aufgabe3_1 = {}));
//# sourceMappingURL=index.js.map