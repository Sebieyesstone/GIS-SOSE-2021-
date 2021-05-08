"use strict";
// in Zusammenarbeit mit Anna-Lara, Benjamin und Tabea
var Aufgabe02;
(function (Aufgabe02) {
    //const save: HTMLElement = document.getElementById("save");
    const anzeigeflaeche = document.getElementById("anzeigeflaeche");
    class Person {
        setHead(_head) {
            this.head = _head;
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
    let person = new Person();
    //nextHead.addEventListener("click", auswahlKopf); //"Create" als erster Schritt
    for (let i = 0; i < kopfBilder.length; i++) {
        const imgElem = document.createElement("img");
        imgElem.src = kopfBilder[i];
        imgElem.className = "auswahlbilder";
        imgElem.id = String(i + 1);
        anzeigeflaeche.appendChild(imgElem);
    }
    const optionsHead = document.querySelectorAll(".auswahlbilder");
    function highlightSelection(element) {
        optionsHead.forEach(element => {
            element.style.border = "4px solid transparent";
            element.style.boxShadow = "2px 3px 7px rgba(0, 0, 0, 0.3)";
        });
        element.style.border = "4px solid #000";
        element.style.boxShadow = "3px 4px 7px rgba(0, 0, 0, 0.7)";
    }
    optionsHead.forEach(element => {
        element.addEventListener("click", function () {
            person.setHead(element.id);
            highlightSelection(element);
            console.log(person.head);
        });
    });
})(Aufgabe02 || (Aufgabe02 = {}));
//# sourceMappingURL=script.js.map