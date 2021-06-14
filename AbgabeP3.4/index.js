"use strict";
var Aufgabe3_4;
(function (Aufgabe3_4) {
    let buttonAbschicken = document.getElementById("datenAbschicken");
    buttonAbschicken.addEventListener("click", clickAbschicken);
    let buttonErhalten = document.getElementById("datenErhalten");
    buttonAbschicken.addEventListener("click", clickErhalten);
    async function clickAbschicken(Promise, , ) { }
     > {
        let, form: FormData = new FormData(document.forms[0]),
        let, url: string = "",
        let,
        query: URLSearchParams = new URLSearchParams(form),
        url, "/abschicken": +"?" + query.toString(),
        await,
        console, : .log("Abschicken")
    };
    async function clickErhalten(Promise, , ) { }
     > {
        let, form: FormData = new FormData(document.forms[0]),
        let, url: String = "",
        let,
        query: URLSearchParams = new URLSearchParams(formData),
        url, "/erhalten": +"?" + query.toString(),
        let, response: Response = await fetch(url, { method: get }),
        let, response1: String = await response.text()
    }(document.getElementById("server")).innerHTML;
    response1;
})(Aufgabe3_4 || (Aufgabe3_4 = {}));
//# sourceMappingURL=index.js.map