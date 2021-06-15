namespace Aufgabe3_4 {
    let buttonAbschicken: HTMLButtonElement = <HTMLButtonElement>document.getElementById("datenAbschicken");
    buttonAbschicken.addEventListener("click", clickAbschicken);

    let buttonErhalten: HTMLButtonElement = <HTMLButtonElement>document.getElementById("datenErhalten");
    buttonErhalten.addEventListener("click", clickErhalten);

    let ausgabe: HTMLElement = <HTMLElement>document.getElementById("pResponse");

    async function clickAbschicken(): Promise<void> {
        let form: FormData = new FormData(document.forms[0]);
        let url: string = "https://sebieyesstonegis2021.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any>form);
        url = url + "/insert?" + query.toString();
        await fetch(url);
        console.log("Daten wurden abgeschickt");
    }
    async function clickErhalten(): Promise<void> {
        let form: FormData = new FormData(document.forms[0]);
        let url: string = "https://sebieyesstonegis2021.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any>form);

        url = url + "/get?" + query.toString();
        
        let serverResponse: Response = await fetch(url);
        let stringResponse: string = await serverResponse.text();
        ausgabe.innerHTML = stringResponse;
        console.log("Daten wurden erhalten");
    }
}