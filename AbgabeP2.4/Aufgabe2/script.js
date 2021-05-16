"use strict";
// in Zusammenarbeit mit Anna-Lara, Benjamin und Tabea
var Aufgabe1;
(function (Aufgabe1) {
    const anzeigeflaeche = document.querySelector(".anzeigeflaeche");
    //const torsoButton: HTMLElement = document.getElementById("showTorso"); //getElementById seems to work best
    //const legButton: HTMLElement = document.getElementById("showLegs");
    const currentStep = anzeigeflaeche ? anzeigeflaeche.id : "";
    const selection = document.getElementById("selection");
    //create img elemente
    function createImgElement(url, part) {
        const imgElem = document.createElement("img");
        imgElem.src = url;
        imgElem.id = part;
        return imgElem;
    }
    let propertyData = JSON.parse(Aufgabe1.data);
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
    }
    buildPageFromData(propertyData);
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
        const chosenURL = propertyData[bodypart][id];
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
    paint();
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
})(Aufgabe1 || (Aufgabe1 = {}));
//# sourceMappingURL=script.js.map