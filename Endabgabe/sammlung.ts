async function rezepteLaden(): Promise<void> {
    console.log("BIN IN DER FUNKTION");
    //let url: string = "http://localhost:8100";
    let url: string = "https://sebieyesstonegis2021.herokuapp.com";
    url = url + "/erhalten" + "?";
    let response: Response = await fetch(url);
    let ausgabe: Rezepte[] = await response.json();
    console.log(ausgabe);
    const datenbank: HTMLElement = document.getElementById("datenbank");
    datenbank.innerHTML = "";
    
    for (const rezept in ausgabe) {
        if (Object.prototype.hasOwnProperty.call(ausgabe, rezept)) {
            const aktuelleRe: Rezepte = ausgabe[rezept]; //1 rezept kein Array
            const div: HTMLDivElement = document.createElement("div");
            const p1: HTMLHeadingElement = document.createElement ("p");
            const p2: HTMLParagraphElement = document.createElement ("p");
            const p3: HTMLParagraphElement = document.createElement ("p");  
            const p4: HTMLParagraphElement = document.createElement ("p");  
            const p5: HTMLParagraphElement = document.createElement ("p");

            // Rezepte Favosieren
            const favButton: HTMLButtonElement = document.createElement("button");

            favButton.addEventListener("click", () => {
                let favorites: string[] = JSON.parse(localStorage.getItem("Favoriten"));  
                
                if (favorites === null || favorites === undefined) {
                    favorites = [];
                    favorites[0] = aktuelleRe._id;
                } else if (favorites.indexOf(aktuelleRe._id) != -1) {
                    favorites.splice(favorites.indexOf(aktuelleRe._id), 1);
                } else {
                    favorites.push(aktuelleRe._id);
                }
                
                localStorage.setItem("Favoriten", JSON.stringify(favorites));
                console.log(favorites);
                rezepteLaden();
            });

            let favorites: string[] = JSON.parse(localStorage.getItem("Favoriten")); 
            console.log(favorites);

            if (favorites !== null && favorites !== undefined && favorites.indexOf(aktuelleRe._id) != -1) {
                favButton.innerHTML = "Nicht mehr Favorisieren";
            } else {
                favButton.innerHTML = "Favorisieren";
            }
            
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
            div.appendChild(favButton);

            datenbank.appendChild(div); //alle enthält
        }
        console.log("ich hab es hier her geschafft");
    }
}
window.addEventListener("load", function(): void {

    rezepteLaden();
    
});