namespace Aufgabe3_4 {
    let buttonAbschicken: HTMLButtonElement = <HTMLButtonElement>document.getElementById("datenAbschicken");
    buttonAbschicken.addEventListener("click", clickAbschicken);

    let buttonErhalten: HTMLButtonElement = <HTMLButtonElement>document.getElementById("datenErhalten");
    buttonErhalten.addEventListener("click", clickErhalten);

    let buttonEnfernen: HTMLButtonElement = <HTMLButtonElement>document.getElementById("datenEntfernen");
    buttonEnfernen.addEventListener("click", clickEntfernen);

    async function clickAbschicken(): Promise<void> {
        let form: FormData = new FormData(document.forms[0]);
        let url: string = "https://sebieyesstonegis2021.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any>form);
        url = url + "/abschicken" + "?" + query.toString();
        await fetch(url);
    }
    async function clickErhalten(): Promise<void> {
        let formD: FormData = new FormData(document.forms[0]);
        let url: string = "https://sebieyesstonegis2021.herokuapp.com";
        url = formD + "/erhalten";
        let response: Response = await fetch(url);
        let ausgabe: string = await response.text();
        let console: HTMLElement = <HTMLElement>document.getElementById("serverAntwort");
        console.innerHTML = ausgabe;
    }

    async function clickEntfernen(): Promise <void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://sebieyesstonegis2021.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "/entfernen" + "?" + query.toString();
        let response: Response = await fetch(url);
        let ausgabe: string = await response.text();
        let console: HTMLElement = <HTMLElement>document.getElementById("serverAntwort");
        console.innerHTML = ausgabe; 
    }
}