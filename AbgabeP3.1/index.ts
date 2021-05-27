namespace Aufgabe3_1 {
    let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button");
    button.addEventListener("click", handle);

    async function handle(): Promise<void> {

        let formData: FormData = new FormData(document.forms [0]);
        let url: string = "https://sebieyesstonegis2021.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams (formData.toString());

        //url + query zusammenfügen
        url = url + "?" + query.toString();
        console.log("url: " + url);

        //Antwort des Servers (zusammengesetztes url+query)
        let response: Response = await fetch (url);
        
        console.log("Antwort des Servers:" + response.toString());
    }
}