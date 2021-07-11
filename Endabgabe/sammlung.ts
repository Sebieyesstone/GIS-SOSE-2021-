window.onload = async () => {
    await clickAnzeigen();
};

interface Rezepte {
    _id: string;
    benutzername: string;
    rezeptname: string;
    anzahl: number;
    zutaten: number;
    kategorie: number;
    zutatenliste: string;
}

async function clickFavorites(_id: string): Promise<void> {
    console.log("funkton wird ausgeführt", _id);

    let form: FormData = new FormData(document.forms[0]);
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    

    form.append("benutzername", currentUser["benutzername"]);
    form.append("favoriten_id", _id);
    //let url: string = "http://localhost:8100";
    let url: string = "https://sebieyesstonegis2021.herokuapp.com";
    let query: URLSearchParams = new URLSearchParams(<any>form);
    
    url = url + + "/addFavoriten" + "?" + query.toString();
    let response: Response = await fetch(url);
    let ausgabe: Rezepte [] = await response.json();
    console.log("ausgabe", ausgabe);   
}
async function clickAnzeigen(): Promise<void> {
    console.log("BIN IN DER FUNKTION");

    //let url: string = "http://localhost:8100";
    let url: string = "https://sebieyesstonegis2021.herokuapp.com";

    url = url + "/erhalten" + "?";
    let response: Response = await fetch(url);
    let ausgabe: Rezepte [] = await response.json();
    console.log("ausgabe", ausgabe);
    const datenbank = document.getElementById("datenbank");

    for (const rezept in ausgabe) {
        if (Object.prototype.hasOwnProperty.call(ausgabe, rezept)) {
            const aktuelleRe: Rezepte = ausgabe[rezept]; //1 rezept kein Array
            const div: HTMLDivElement = document.createElement("div");

            const buttonFav = document.createElement("button");
            const p0: HTMLHeadingElement = document.createElement ("p");
            const p1: HTMLHeadingElement = document.createElement ("p");
            const p2: HTMLParagraphElement = document.createElement ("p");
            const p3: HTMLParagraphElement = document.createElement ("p");  
            const p4: HTMLParagraphElement = document.createElement ("p");  
            const p5: HTMLParagraphElement = document.createElement ("p");
            buttonFav.innerHTML = "Favorisieren";
            buttonFav.onclick = () => {
                console.log("Favorit wird hinzugefügt", aktuelleRe._id);

                clickFavorites(aktuelleRe._id);
            };
            p0.innerHTML = "Benutzername: " + aktuelleRe.benutzername;
            p1.innerHTML = "Rezeptename: " + aktuelleRe.rezeptname;
            p2.innerHTML = "Anzahl: " + aktuelleRe.anzahl;
            p3.innerHTML = "Zutaten: " + aktuelleRe.zutaten;
            p4.innerHTML = "Kategorie: " + aktuelleRe.kategorie;
            p5.innerHTML = "Zutatenliste: " + aktuelleRe.zutatenliste;
            div.className = "boxkomplett";
            
            div.appendChild(p0);
            div.appendChild(p1); //alle infos jeweils
            div.appendChild(p2);
            div.appendChild(p3);
            div.appendChild(p4);
            div.appendChild(p5);
            div.appendChild(buttonFav);

            datenbank.appendChild(div); //alle enthält
        }
        console.log("ich hab es hier her geschafft");
    }
}
