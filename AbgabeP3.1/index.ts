namespace Aufgabe3_1 {
    let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button");
    button.addEventListener("click", handle);

    async function handle(): Promise<void> {

        let formData: FormData = new FormData(document.forms [0]);
        let url: string = "https://sebieyesstonegis2021.herokuapp.com"; 
        let query: URLSearchParams = new URLSearchParams (<any>formData);
        url = url + "?" + query.toString();
        await fetch(url);

        for (let entry of query) {
            console.log(entry);
            console.log("name: " + entry[0]);
            console.log("value: " + entry[1]);
            
        }
    }
}