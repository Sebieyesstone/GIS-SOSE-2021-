// in Zusammenarbeit mit Anna-Lara, Benjamin und Tabea
namespace Aufgabe01 {

    document.addEventListener("DOMContentLoaded", function (): void { // addEv sitzt drauf + realiseren das was passiert + geladen werden
        
        const newRec: HTMLElement = document.getElementById("newRec");   //button 1 - durch die id
        const recContainer: HTMLElement = document.querySelector(".recContainer");  //erster recContainer wird gewählt (Zeichenfläche) qS. er wählt das erste Objekt hinter in der Klammer durch die Klasse
        const reset: HTMLElement = document.getElementById("reset"); //button 2 - Verknüpfung

        class Rectangle {
            width: number;
            height: number;

            createRandomRec(): void { //Methode - Aufgabe davor - zufällige Werte
                this.width = Math.floor(Math.random() * 100 + 20); // weite und höhe = ganze Zahl (nimmt sich das Ergebnis)
                this.height = Math.floor(Math.random() * 100 + 20); // m.r zufällige zahl zwischen 0 und 1 (100 = größere Zahl) + 20 wegen Pixel mindestens 20px
            }

            drawRandom(rec: Rectangle): void { // Übergabe einer V Datentyp Rectangle 
                let x: number = Math.floor(Math.random() * 700); // Größen kann man ändern angepasst Zeichenfläche
                let y: number = Math.floor(Math.random() * 300 + 100); 
                let recDiv: HTMLDivElement  = document.createElement("div"); // neues div 
                recDiv.style.width = rec.width + "px"; // div erstellt zuweisen
                recDiv.style.height = rec.height + "px";
                recDiv.style.top = y + "px";
                recDiv.style.left = x + "px";
                recDiv.style.position = "absolute";
                recDiv.style.backgroundColor = "rgba(139, 0, 0, 0.7)";
                recContainer.appendChild(recDiv); //jetzt hängen wir es an einem Body an + malen es an die Fläche (hintendran) append flexibler (appC = auf Obj/El ein von der Klammer)
            }
        }

        function addNewRec(): void { // re hinzufügen 
            let rec: Rectangle = new Rectangle(); // ini 
            rec.createRandomRec(); //neue werte + malen
            rec.drawRandom(rec); //Ausgabe
        }

        function clearRecContainer(): void { //recC ALLES vom Html wird überschrieben mit einem leeren string  / ausleeren
            recContainer.innerHTML = ""; // ersetzen durch nichts
        }

        newRec.addEventListener("click", addNewRec); //Funktion click
        reset.addEventListener("click", clearRecContainer); 
        
    });
}