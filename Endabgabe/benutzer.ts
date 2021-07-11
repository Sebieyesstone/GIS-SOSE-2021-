let buttonRezeptabschicken: HTMLButtonElement = <HTMLButtonElement>document.getElementById("rezeptabschicken");
buttonRezeptabschicken.addEventListener("click", clickAbschicken);

let buttonRezepterhalten: HTMLButtonElement = <HTMLButtonElement>document.getElementById("rezepterhalten");
buttonRezepterhalten.addEventListener("click", clickErhalten);

interface Rezepte {
    _id: string;
    rezeptname: string;
    anzahl: number;
    zutaten: number;
    kategorie: number;
    zutatenliste: string;
}

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

    const aktuelleRe: Rezepte = ausgabe[ausgabe.length - 1]; //1 rezept kein Array
    const div: HTMLDivElement = document.createElement("div");
    const p1: HTMLHeadingElement = document.createElement("p");
    const p2: HTMLParagraphElement = document.createElement("p");
    const p3: HTMLParagraphElement = document.createElement("p");
    const p4: HTMLParagraphElement = document.createElement("p");
    const p5: HTMLParagraphElement = document.createElement("p");

    //Rezept bearbeiten

    const editButton: HTMLButtonElement = document.createElement("button");
    editButton.innerHTML = "Bearbeiten";

    editButton.addEventListener("click", () => {
        const newRezeptName: HTMLInputElement = document.createElement("input");
        newRezeptName.value = aktuelleRe.rezeptname;

        const newRezeptAnzahl: HTMLInputElement = document.createElement("input");
        newRezeptAnzahl.value = aktuelleRe.anzahl.toString();

        const newRezeptZutaten: HTMLInputElement = document.createElement("input");
        newRezeptZutaten.value = aktuelleRe.zutaten.toString();

        const newRezeptKategorie: HTMLInputElement = document.createElement("input");
        newRezeptKategorie.value = aktuelleRe.kategorie.toString();

        const newRezeptListe: HTMLInputElement = document.createElement("input");
        newRezeptListe.value = aktuelleRe.zutatenliste.toString();

        editButton.hidden = true;

        p1.innerHTML = "Rezeptename: ";
        p1.appendChild(newRezeptName);
        p2.innerHTML = "Anzahl: ";
        p2.appendChild(newRezeptAnzahl);
        p3.innerHTML = "Zutaten: ";
        p3.appendChild(newRezeptZutaten);
        p4.innerHTML = "Kategorie: ";
        p4.appendChild(newRezeptKategorie);
        p5.innerHTML = "Zutatenliste: ";
        p5.appendChild(newRezeptListe);

        const submitEdit: HTMLButtonElement = document.createElement("button");
        submitEdit.innerHTML = "Absenden";

        submitEdit.addEventListener("click", async () => {
            //let url: string = "http://localhost:8100";
            let url: string = "https://sebieyesstonegis2021.herokuapp.com";
            url = url + "/update" + "?" +
                "ID=" + aktuelleRe._id +
                "&rezeptname=" + encodeURI(newRezeptName.value.toString()) +
                "&anzahl=" + encodeURI(newRezeptAnzahl.value.toString()) +
                "&zutaten=" + encodeURI(newRezeptZutaten.value.toString()) +
                "&kategorie=" + encodeURI(newRezeptKategorie.value.toString()) +
                "&zutatenliste=" + encodeURI(newRezeptZutaten.value.toString())
                ;
            console.log("Sende update Anfrage an : " + url);
            let response: Response = await fetch(url);
            console.log("Update anfage hatte rückgabe: ");
            console.log(response);
            favoritenLaden();
        });

        div.appendChild(submitEdit);

    });

    // Rezept löschen
    
    const deleteButton: HTMLButtonElement = document.createElement("button");
    deleteButton.innerHTML = "Löschen";

    deleteButton.addEventListener("click", async () => {
        let url: string = "https://sebieyesstonegis2021.herokuapp.com";
        url = url + "/entfernen" + "?" + "ID=" + aktuelleRe._id;
        let response: Response = await fetch(url);

        datenbank.innerHTML = "Rezept gelöscht.";

        setTimeout(() => {datenbank.innerHTML = ""; }, 1000);

    });

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
    //div.appendChild(favButton);
    div.appendChild(editButton);

    datenbank.appendChild(div); //alle enthält

    console.log("ich hab es hier her geschafft");
}