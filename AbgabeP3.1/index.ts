namespace Aufgabe08 {
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
}