namespace Aufgabe08 {
    /*
    let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button");
    button.addEventListener("click", handle);

    async function handle(): Promise<void> {

        let formData: FormData = new FormData(document.forms [0]);
        let url: string = "https://sebieyesstonegis2021.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams (<any>formData);
        url = url + "?" + query.toString();
        console.log(url);

        console.log("Vorname" + formData.get("vname"));
        console.log("Nachname" + formData.get("nname"));
        console.log("Telefon" + formData.get("telefon"));
        console.log("Adresse" + formData.get("adresse"));
    }
    */
    let buttonHTML: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonHTML");
    buttonHTML.addEventListener("click", clickHTML);

    let buttonJSON: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonJSON");
    buttonJSON.addEventListener("click", clickJSON);

    let server: HTMLElement = <HTMLElement>document.getElementById("server");

    async function clickHTML(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://sebieyesstonegis2021.herokuapp.com";
        url += "/html";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();

        let response: Response = await fetch(url);
        let responseText: string = await response.text();


        server.innerHTML = responseText;

    }
    async function clickJSON(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://sebieyesstonegis2021.herokuapp.com";
        url += "/json";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        let response: Response = await fetch(url);
        let responseText: string = await response.text();
        console.log(responseText);
        let responseJSON: JSON = JSON.parse(responseText);

        console.log(responseJSON);
        server.innerHTML = responseText;
        console.log(server);
    }
}