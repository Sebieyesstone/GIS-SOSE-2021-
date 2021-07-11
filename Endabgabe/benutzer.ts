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
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));

    form.append("benutzername", currentUser["benutzername"]);
    let url: string = "http://localhost:8100";
    // let url: string = "https://sebieyesstonegis2021.herokuapp.com";
    let query: URLSearchParams = new URLSearchParams(<any>form);

    url = url + "/abschicken" + "?" + query.toString();
    console.log(url);
    let response: Response = await fetch(url);
    let ausgabe: string = await response.text();
    let serverA: HTMLElement = <HTMLElement>document.getElementById("nutzer_rezepte");
    serverA.innerHTML = ausgabe;

    await fetch(url);
    console.log(form.get("kategorie"));
}

async function clickErhalten(): Promise<void> {
    console.log("BIN IN DER FUNKTION");

    let currentUser = JSON.parse(localStorage.getItem("currentUser"));

    let form: FormData = new FormData();
    form.append("benutzername", currentUser["benutzername"]);
    let url: string = "http://localhost:8100";
    // let url: string = "https://sebieyesstonegis2021.herokuapp.com";
    let query: URLSearchParams = new URLSearchParams(<any>form);

    url = url + "/erhalten" + "?" + query.toString();
    let response: Response = await fetch(url);
    let ausgabe: Rezepte[] = await response.json();
    console.log(ausgabe);
    const datenbank: HTMLElement = document.getElementById("nutzer_rezepte");

    for (const rezept in ausgabe) {
        if (Object.prototype.hasOwnProperty.call(ausgabe, rezept)) {
            const aktuelleRe: Rezepte = ausgabe[rezept]; //1 rezept kein Array
            const div: HTMLDivElement = document.createElement("div");
            const p0: HTMLHeadingElement = document.createElement("p");
            const p1: HTMLHeadingElement = document.createElement("p");
            const p2: HTMLParagraphElement = document.createElement("p");
            const p3: HTMLParagraphElement = document.createElement("p");
            const p4: HTMLParagraphElement = document.createElement("p");
            const p5: HTMLParagraphElement = document.createElement("p");

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
            

            datenbank.appendChild(div); //alle enthält

            console.log("ich hab es hier her geschafft");

            // Rezept bearbeiten

            const editButton: HTMLButtonElement = document.createElement("button");
            editButton.innerHTML = "Bearbeiten";

            editButton.addEventListener("click", () => {
                if (document.getElementById("buttons") ) {
                    if (document.getElementById("edit_button")) {
                        document.getElementById("buttons").removeChild(document.getElementById("edit_button"));
                    }
                    if (document.getElementById("rezeptabschicken")) {
                        document.getElementById("buttons").removeChild(document.getElementById("rezeptabschicken"));
                    }
                }

                for (var key in aktuelleRe) {
                    const rezeptValue: any = aktuelleRe[key as keyof Rezepte];

                    if (key === "zutatenliste" && rezeptValue.length) {
                        for (let index = 0; index < rezeptValue.length; index++) {
                            const element = rezeptValue[index];
                            let formField: HTMLInputElement = <HTMLInputElement>document.getElementById("zutatenliste_" + index);
                            if (formField) {
                                formField.value = element;
                            }
                        }
                        continue;
                    }
                    let formField = <HTMLInputElement>document.getElementById(key);
                    if (formField) {
                        formField.value = rezeptValue;
                    }
                }
                
                const submitEdit: HTMLButtonElement = document.createElement("button");
                submitEdit.innerHTML = "Bearbeitung absenden";
                submitEdit.id = "edit_button";

                submitEdit.addEventListener("click", async function() {
                    let form: FormData = new FormData(document.forms[0]);
                    form.append("ID", aktuelleRe._id);

                    let url: string = "http://localhost:8100";
                    //   let url: string = 'https://sebieyesstonegis2021.herokuapp.com';
                    let query: URLSearchParams = new URLSearchParams(<any>form);
                    url = url + "/update" + "?" + query.toString();
                    console.log(url);
                    let response: Response = await fetch(url);
                    let ausgabe: string = await response.text();
                    let serverA: HTMLElement = <HTMLElement>document.getElementById("datenbank");
                    serverA.innerHTML = ausgabe;

                    await fetch(url);
                    // await clickErhalten();
                });
                
                document.getElementById("buttons").appendChild(submitEdit);
            });

            // Rezept löschen

            const deleteButton: HTMLButtonElement = document.createElement("button");
            deleteButton.innerHTML = "Löschen";

            deleteButton.addEventListener("click", async function() {
                let url: string = "https://sebieyesstonegis2021.herokuapp.com";
                url = url + "/entfernen" + "?" + "ID=" + aktuelleRe._id;
                let response: Response = await fetch(url);
                console.log(response);
                datenbank.innerHTML = "Rezept gelöscht.";

                setTimeout(() => {
                    datenbank.innerHTML = "";
                },         1000);
            });

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
            div.appendChild(editButton);
            div.appendChild(deleteButton);

            datenbank.appendChild(div); //alle enthält

            console.log("ich hab es hier her geschafft");
        }
    }
}
