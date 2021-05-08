// in Zusammenarbeit mit Anna-Lara, Benjamin und Tabea
namespace Aufgabe02 {
    
    //const save: HTMLElement = document.getElementById("save");
    const anzeigeflaeche: HTMLElement = document.getElementById("anzeigeflaeche");
    class Person {
        head: string;
        body: string;
        legs: string;
        name: string;

        setHead(_head: string): void {
            this.head = _head;
        }

        setBody(_body: string): void {
            this.body = _body;
        }

        setLegs(_legs: string): void {
            this.legs = _legs;
        }

        setName(_name: string): void {
            this.name = _name;
        }
    }
    let person: Person = new Person();

    //nextHead.addEventListener("click", auswahlKopf); //"Create" als erster Schritt
    for (let i: number = 0; i < kopfBilder.length; i++) {
        const imgElem: HTMLImageElement = document.createElement("img");
        imgElem.src = kopfBilder[i];
        imgElem.className = "auswahlbilder";
        imgElem.id = String(i + 1);
        anzeigeflaeche.appendChild(imgElem);
    }

    const optionsHead: NodeListOf<HTMLElement> = document.querySelectorAll(".auswahlbilder");

    function highlightSelection(element: HTMLElement): void {
        optionsHead.forEach(element => {
            element.style.border = "4px solid transparent";
            element.style.boxShadow = "2px 3px 7px rgba(0, 0, 0, 0.3)";
        });

        element.style.border = "4px solid #000";
        element.style.boxShadow = "3px 4px 7px rgba(0, 0, 0, 0.7)";
    }
    
    optionsHead.forEach(element => {
        element.addEventListener("click", function (): void {
            person.setHead(element.id);
            highlightSelection(element);
            console.log(person.head);
        });
    });
}