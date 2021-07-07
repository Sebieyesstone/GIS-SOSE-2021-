let buttonRezeptabschicken: HTMLButtonElement = <HTMLButtonElement>document.getElementById("rezeptabschicken");
buttonRezeptabschicken.addEventListener("click", clickAbschicken);

let buttonRezepterhalten: HTMLButtonElement = <HTMLButtonElement>document.getElementById("rezepterhalten");
buttonRezepterhalten.addEventListener("click", clickErhalten);

async function clickAbschicken(): Promise<void> {
    console.log("hier bin ich auch");
    let form: FormData = new FormData(document.forms[0]);
    //let url: string = "http://localhost:8100";
    let url: string = "https://sebieyesstonegis2021.herokuapp.com";
    let query: URLSearchParams = new URLSearchParams(<any>form);
    url = url + "/abschicken" + "?" + query.toString();
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
    let ausgabe: string = await response.text();
    let serverA: HTMLElement = <HTMLElement>document.getElementById("datenbank");
    serverA.innerHTML = ausgabe;

    (<HTMLElement>document.getElementById("datenbank")).innerHTML = ausgabe;
}