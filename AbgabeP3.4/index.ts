namespace Aufgabe3_4 {
    let buttonAbschicken: HTMLButtonElement = <HTMLButtonElement>document.getElementById("datenAbschicken");
    buttonAbschicken.addEventListener("click", clickAbschicken);

    let buttonErhalten: HTMLButtonElement = <HTMLButtonElement>document.getElementById("datenErhalten");
    buttonAbschicken.addEventListener("click", clickErhalten);

    async function clickAbschicken(: Promise<void> {
        let form: FormData = new FormData(document.forms[0]);
        let url: string ="";
        let query: URLSearchParams = new URLSearchParams(<any>form);

        url += "/abschicken" + "?" + query.toString();
        await fetch(url);
        console.log("Abschicken");
    }
    async function clickErhalten(: Promise<void> {
        let form: FormData = new FormData(document.forms[0]);
        let url: String = "";
        let query: URLSearchParams = new URLSearchParams(<any>formData);

        url += "/erhalten" + "?" + query.toString();
        
        let response: Response = await fetch(url, {method: get});
        let response1: String = await response.text();

        (<HTMLElement>document.getElementById("server")).innerHTML = response1;
    }
}