"use strict";
// in Zusammenarbeit mit Anna-Lara, Benjamin und Tabea
var Aufgabe2;
(function (Aufgabe2) {
    const anzeigeflaeche = document.querySelector(".anzeigeflaeche");
    const currentStep = anzeigeflaeche ? anzeigeflaeche.id : "";
    const selection = document.getElementById("selection");
    const heroku = document.getElementById("heroku");
    //async function
    let data;
    async function communicate(_url) {
        let response = await fetch(_url);
        console.log(Response, response);
        let antwort = await response.json();
        data = antwort;
        buildPageFromData(data);
        console.log(antwort);
    }
    communicate("https://sebieyesstone/GIS-SOSE-2021-/AbgabeP2.5/Aufgabe2/data.json");
    //create img elemente
    function createImgElement(url, part) {
        const imgElem = document.createElement("img");
        imgElem.src = url;
        imgElem.id = part;
        return imgElem;
    }
    //data von data.ts einbindung
    function buildPageFromData(buildData) {
        const currentData = buildData[currentStep];
        for (const bodyPart in currentData) {
            if (Object.prototype.hasOwnProperty.call(currentData, bodyPart)) {
                const bodyPartImgURL = currentData[bodyPart];
                const imgElem = createImgElement(bodyPartImgURL, bodyPart);
                imgElem.classList.add("pic-reel");
                anzeigeflaeche.appendChild(imgElem);
            }
        }
        const optionsHead = document.querySelectorAll(".pic-reel");
        function highlightSelection(elem) {
            optionsHead.forEach(elem => {
                elem.classList.remove("highlighted");
            });
            elem.classList.add("highlighted");
        }
        //eventlistener
        optionsHead.forEach(elem => {
            elem.addEventListener("click", function () {
                selectElem(elem.id);
                highlightSelection(elem);
            });
        });
    }
    //select, store and show chosen elements
    function selectElem(id) {
        let _id = Number(id);
        let url = "";
        switch (currentStep) {
            case "heads":
                url = getURL("heads", _id);
                sessionStorage.setItem("head", url);
                break;
            case "torsos":
                url = getURL("torsos", _id);
                sessionStorage.setItem("torso", url);
                break;
            case "legs":
                url = getURL("legs", _id);
                sessionStorage.setItem("legs", url);
                break;
            default:
                break;
        }
        paint();
    }
    function getURL(bodypart, id) {
        const chosenURL = data[bodypart][id];
        return chosenURL;
    }
    function showSelected(url) {
        if (url == null) {
            return null;
        }
        selection.classList.add("show");
        const imgElem = createImgElement(url);
        selection.appendChild(imgElem);
    }
    function paint() {
        selection.innerHTML = "";
        showSelected(sessionStorage.getItem("head"));
        showSelected(sessionStorage.getItem("torso"));
        showSelected(sessionStorage.getItem("legs"));
    }
    if (heroku) {
        async function communicateHeroku(_url) {
            const tier = { head: sessionStorage.getItem("head"), body: sessionStorage.getItem("head"), legs: sessionStorage.getItem("head") };
            let query = new URLSearchParams(tier);
            _url = _url + "?" + query.toString();
            const response = await fetch(_url);
            const stringResponse = await response.json();
            const p = document.createElement("p");
            const h = document.createElement("h3");
            heroku.className = "response";
            heroku.appendChild(h);
            h.innerHTML = "Server Antwort:";
            heroku.appendChild(p);
            if (stringResponse.error) {
                p.className = "error";
                p.innerHTML = stringResponse.error;
            }
            else {
                p.className = "success";
                p.innerHTML = stringResponse.message;
            } //Server Antwort: Konfiguration eingegangen. Server Antwort: Mit ihrer Anfrage ist alles in Ordnung, aber der Server konnte diese derzeit nicht verarbeiten. Auch bekannt als Error 500 (Internal Server Error).
        } //Server Antwort: Daten empfangen. Server Antwort: Alles angekommen.
        communicateHeroku("https://gis-communication.herokuapp.com");
    }
})(Aufgabe2 || (Aufgabe2 = {}));
//# sourceMappingURL=script.js.map