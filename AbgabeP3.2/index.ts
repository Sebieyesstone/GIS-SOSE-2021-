namespace Aufgabe3_2 {
    let buttonjson: HTMLButtonElement = <HTMLButtonElement>document.getElementById("jsonbutton");
    buttonjson.addEventListener("click", handlejson);
    let buttonhtml: HTMLButtonElement = <HTMLButtonElement>document.getElementById("htmlbutton");
    buttonhtml.addEventListener("click", handlehtml);

    let server: HTMLElement = <HTMLElement>document.getElementById("server");

    async function handlehtml(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let _url: string = "https://sebieyesstonegis2021.herokuapp.com";
        _url += "/html";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        _url = _url += "?" + query.toString();
        let response: Response = await fetch(_url);
        let responseText: string = await response.text();
        server.innerHTML = responseText;
    }

    async function handlejson(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let _url: string = "https://sebieyesstonegis2021.herokuapp.com";
        _url += "/json";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        _url = _url += "?" + query.toString();
        let response: Response = await fetch(_url);
        let responseText: string = await response.text();
        console.log(responseText);
        let responseJSON: JSON = JSON.parse(responseText);
        console.log(responseJSON);
        
        server.innerHTML = responseText;
        console.log(server);
    }
}