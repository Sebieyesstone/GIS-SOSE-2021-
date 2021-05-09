// in Zusammenarbeit mit Anna-Lara, Benjamin und Tabea
namespace Aufgabe02 {
    
    //const save: HTMLElement = document.getElementById("save");           //wird später verwendet
    const anzeigeflaeche: HTMLElement = document.getElementById("anzeigeflaeche");
    class Tier {
        head: string;
        body: string;
        legs: string;
        name: string;

        setHead(_head: string): void {                                                        // Zahl wird gespeichert von dem Kopf den ich auswähle - Zwischenspeicher meiner ersten Auswahl
            this.head = _head;                                                                // spätere Var.name setzen wir mit einer Id fest
        }

        setBody(_body: string): void {                                                        // später für die nächsten Aufgaben relevant
            this.body = _body; 
        }

        setLegs(_legs: string): void {
            this.legs = _legs;
        }

        setName(_name: string): void {
            this.name = _name;
        }
    }
    let tier: Tier = new Tier();                                                               // ini Tierobjekt

    for (let i: number = 0; i < kopfBilder.length; i++) { 
        const imgElem: HTMLImageElement = document.createElement("img");                       //wir erstellen Bilder mit dem img-tag -> const = konstante 
        imgElem.src = kopfBilder[i];                                                           //für jedes bild erstellen wir ein img - v -> mit img tag kommt von unserem images Ordner (Dateipfad)
        imgElem.className = "auswahlbilder";                                                   //geben allen Bilder eine Klasse
        imgElem.id = String(i + 1);                                                            //übergabe einer id (geht einmal alle bilder durch) damit man 
        anzeigeflaeche.appendChild(imgElem);                                                   //geht auf die Anfl. zeigt neue Bilder an
    }

    const optionsHead: NodeListOf<HTMLElement> = document.querySelectorAll(".auswahlbilder");  // neue V obH -> alle HTML El. die Klasse Auswahlbilder haben

    function highlightSelection(element: HTMLElement): void {                                  //Kopfbilder
        optionsHead.forEach(element => {                                                       // => bedeutet Pfeil. Liste mit allen El. von dieser Klasse (alle BILDER die wir erstellt haben)
            element.style.border = "4px solid transparent";                                    // für jedes E. soll das ausgeführt werden
            element.style.boxShadow = "2px 3px 7px rgb(188,143,143)";                          
        });

        element.style.border = "4px solid rgb(188,143,143)";                                    // Wenn man Bild anklickt -> Rahmenfarbe
        element.style.boxShadow = "3px 4px 7px rgb(188,143,143)";                               // leuchtet
    }
    
    optionsHead.forEach(element => {                                                            // muss alles wieder ausgeführt werden
        element.addEventListener("click", function (): void {                                   // beim Anklicken soll eine Funktion ausgeführt werden
            tier.setHead(element.id);                                                           // Person bekommt setHead Methode + id  (id des Kopfes wird übergeben)
            highlightSelection(element);                                                        // Hervorhebung
            console.log(tier.head);                                                             // Zahl des Bildes wird angezeigt (Prüfung)
        });
    });
}