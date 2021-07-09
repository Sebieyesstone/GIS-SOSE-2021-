let buttonRezeptabschicken: HTMLButtonElement = <HTMLButtonElement>document.getElementById("rezeptabschicken");
buttonRezeptabschicken.addEventListener("click", clickAbschicken);

let buttonRezepterhalten: HTMLButtonElement = <HTMLButtonElement>document.getElementById("rezepterhalten");
buttonRezepterhalten.addEventListener("click", clickErhalten);

interface Rezepte {
    rezeptname: string;
    anzahl: number;
    zutaten: number;
    kategorie: number;
    zutatenliste: string;
}
/*interface Login {
    benutzername: string;
    passwort: string;
}*/

async function clickAbschicken(): Promise<void> {
    console.log("hier bin ich auch");
    let form: FormData = new FormData(document.forms[0]);
    //let url: string = "http://localhost:8100";
    let url: string = "https://sebieyesstonegis2021.herokuapp.com";
    let query: URLSearchParams = new URLSearchParams(<any>form);
    url = url + "/abschicken" + "?" + query.toString();
    console.log(url);
    let response: Response = await fetch(url);
    let ausgabe: string = await response.text();
    let serverA: HTMLElement = <HTMLElement>document.getElementById("datenbank");
    serverA.innerHTML = ausgabe;

    await fetch(url);
    console.log(form.get("kategorie"));
}

async function clickErhalten(): Promise<void> {
    console.log("BIN IN DER FUNKTION");
    //let url: string = "http://localhost:8100";
    let url: string = "https://sebieyesstonegis2021.herokuapp.com";
    url = url + "/erhalten" + "?";
    let response: Response = await fetch(url);
    let ausgabe: Rezepte[] = await response.json();
    console.log(ausgabe);
    const datenbank: HTMLElement = document.getElementById("datenbank");
    /*for (const benutzer in ausgabeb) {
        if (Object.prototype.hasOwnProperty.call(ausgabe, benutzer)) {
            const aktuellerBe: Login = ausgabeb[benutzer];
            const div2: HTMLDivElement = document.createElement("div");
            const p8: HTMLHeadingElement = document.createElement ("p");
            
            p8.innerHTML = "Benutzername: " + aktuellerBe.benutzername;

            div2.className = "benutzerBox";

            div2.appendChild(p8);
            datenbank.appendChild(div2);

        }
    }*/
    for (const rezept in ausgabe) {
        if (Object.prototype.hasOwnProperty.call(ausgabe, rezept)) {
            const aktuelleRe: Rezepte = ausgabe[rezept]; //1 rezept kein Array
            const div: HTMLDivElement = document.createElement("div");
            const p1: HTMLHeadingElement = document.createElement ("p");
            const p2: HTMLParagraphElement = document.createElement ("p");
            const p3: HTMLParagraphElement = document.createElement ("p");  
            const p4: HTMLParagraphElement = document.createElement ("p");  
            const p5: HTMLParagraphElement = document.createElement ("p");

            p1.innerHTML = "Rezeptename: " + aktuelleRe.rezeptname;
            p2.innerHTML = "Anzahl: " + aktuelleRe.anzahl;
            p3.innerHTML = "Zutaten: " + aktuelleRe.zutaten;
            p4.innerHTML = "Kategorie: " + aktuelleRe.kategorie;
            p5.innerHTML = "Zutatenliste: " + aktuelleRe.zutatenliste;
            div.className = "boxkomplett";
            
            div.appendChild(p1); //alle infos jeweils
            div.appendChild(p2);
            div.appendChild(p3);
            div.appendChild(p4);
            div.appendChild(p5);

            datenbank.appendChild(div); //alle enthält
        }
        console.log("ich hab es hier her geschafft");
    }
    

}