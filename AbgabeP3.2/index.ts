namespace Aufgabe3_2 {
    let buttonJSON: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonJSON");
    buttonJSON.addEventListener("click", handlejson);
    let buttonHTML: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonHTML");
    buttonHTML.addEventListener("click", handlehtml);

    let server: HTMLElement = <HTMLElement>document.getElementById("server");

    async function handlehtml(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://sebieyesstonegis2021.herokuapp.com";
        url += "/html";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url += "?" + query.toString();
        let response: Response = await fetch(url);
        let responseText: string = await response.text();
        server.innerHTML = responseText;
    }

    async function handlejson(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://sebieyesstonegis2021.herokuapp.com";
        url += "/json";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url += "?" + query.toString();
        let response: Response = await fetch(url);
        let responseText: string = await response.text();
        console.log(responseText);
        let responseJSON: JSON = JSON.parse(responseText);
        console.log(responseJSON);

        server.innerHTML = responseText;
        console.log(server);
    }
}