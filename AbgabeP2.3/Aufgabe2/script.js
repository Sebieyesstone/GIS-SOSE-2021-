"use strict";
// in Zusammenarbeit mit Anna-Lara, Benjamin und Tabea
var Aufgabe02;
(function (Aufgabe02) {
    //const save: HTMLElement = document.getElementById("save");                            //wird später verwendet
    const anzeigeflaeche = document.getElementById("anzeigeflaeche");
    class Tier {
        setHead(_head) {
            this.head = _head; // spätere Var.name setzen wir mit einer Id fest
        }
        setBody(_body) {
            this.body = _body;
        }
        setLegs(_legs) {
            this.legs = _legs;
        }
        setName(_name) {
            this.name = _name;
        }
    }
    let tier = new Tier(); // ini Tierobjekt
    for (let i = 0; i < kopfBilder.length; i++) {
        const imgElem = document.createElement("img"); //wir erstellen Bilder mit dem img-tag -> const = konstante 
        imgElem.src = kopfBilder[i]; //für jedes bild erstellen wir ein img - v -> mit img tag kommt von unserem images Ordner (Dateipfad)
        imgElem.className = "auswahlbilder"; //geben allen Bilder eine Klasse
        imgElem.id = String(i + 1); //übergabe einer id (geht einmal alle bilder durch) damit man 
        anzeigeflaeche.appendChild(imgElem); //geht auf die Anfl. zeigt neue Bilder an
    }
    const optionsHead = document.querySelectorAll(".auswahlbilder"); // neue V obH -> alle HTML El. die Klasse Auswahlbilder haben
    function highlightSelection(element) {
        optionsHead.forEach(element => {
            element.style.border = "4px solid transparent"; //gehört ins CSS                               // für jedes E. soll das ausgeführt werden
            element.style.boxShadow = "2px 3px 7px rgb(188,143,143)";
        });
        element.style.border = "4px solid rgb(188,143,143)"; // Wenn man Bild anklickt -> Rahmenfarbe
        element.style.boxShadow = "3px 4px 7px rgb(188,143,143)"; // leuchtet
    }
    optionsHead.forEach(element => {
        element.addEventListener("click", function () {
            tier.setHead(element.id); // Person bekommt setHead Methode + id  (id des Kopfes wird übergeben)
            highlightSelection(element); // Hervorhebung
            console.log(tier.head); // Zahl des Bildes wird angezeigt (Prüfung)
        });
    });
})(Aufgabe02 || (Aufgabe02 = {}));
//# sourceMappingURL=script.js.map