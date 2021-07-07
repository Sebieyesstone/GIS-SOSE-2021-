"use strict";
var Endabgabe;
(function (Endabgabe) {
    let buttonEinloggen = document.getElementById("einloggen");
    buttonEinloggen.addEventListener("click", clickEinloggen);
    let buttonRegistrieren = document.getElementById("reg");
    buttonRegistrieren.addEventListener("click", clickRegistrieren);
    async function clickEinloggen() {
        let formlog = document.getElementById("formlog");
        let form = new FormData(document.forms[0]);
        let url = "http://localhost:8100";
        //let url: string = "https://sebieyesstonegis2021.herokuapp.com";
        let query = new URLSearchParams(form);
        url = url + "/einloggen" + "?" + query.toString();
        let responseL = await fetch(url);
        let responseLT = await responseL.text();
        console.log(responseLT);
        if (responseLT == "failure") {
            window.alert("Anmeldung fehlgeschlagen! Bitte überprüfe dein Benutzername und dein Passwort.");
        }
        else {
            localStorage.setItem("currentUser", responseLT);
            window.alert("Du hast dich erfolgreich eingeloggt.");
            window.location.href = "benutzer.html";
        }
        formlog.reset();
    }
    async function clickRegistrieren() {
        let formlog = document.getElementById("formlog");
        let form = new FormData(document.forms[0]);
        let url = "http://localhost:8100";
        //let url: string = "https://sebieyesstonegis2021.herokuapp.com";
        let query = new URLSearchParams(form);
        url = url + "/registrieren" + "?" + query.toString();
        let responseRegistrieren = await fetch(url);
        let responseRT = await responseRegistrieren.text();
        console.log(responseRT);
        if (responseRT == "success") {
            window.alert("Die Registrierung war erfolgreich. Jetzt kannst Du dich einloggen! :-)");
        }
        else {
            window.alert("Dieser Benutzername ist bereits vergeben.");
        }
        formlog.reset();
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=login.js.map