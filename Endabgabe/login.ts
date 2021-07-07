namespace Endabgabe {
    let buttonEinloggen: HTMLButtonElement = <HTMLButtonElement>document.getElementById("einloggen");
    buttonEinloggen.addEventListener("click", clickEinloggen);
    
    let buttonRegistrieren: HTMLButtonElement = <HTMLButtonElement>document.getElementById("reg");
    buttonRegistrieren.addEventListener("click", clickRegistrieren);
    
    async function clickEinloggen(): Promise<void> {
        let formlog: HTMLFormElement = <HTMLFormElement>document.getElementById("formlog")!;
        let form: FormData = new FormData(document.forms[0]);
        //let url: string = "http://localhost:8100";
        let url: string = "https://sebieyesstonegis2021.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any>form);
        url = url + "/einloggen" + "?" + query.toString();
        let responseL: Response = await fetch(url);
        let responseLT: string = await responseL.text();
        console.log(responseLT);
        if (responseLT == "failure") {
            window.alert("Anmeldung fehlgeschlagen! Bitte überprüfe dein Benutzername und dein Passwort.");
        } 
        else {
            localStorage.setItem("currentUser", responseLT);
            window.alert("Du hast dich erfolgreich eingeloggt.");
            window.location.href = "benutzer.html";
        }
    }
    async function clickRegistrieren (): Promise<void> {
        let formlog: HTMLFormElement = <HTMLFormElement>document.getElementById("formlog")!;
        let form: FormData = new FormData(document.forms[0]);
        //let url: string = "http://localhost:8100";
        let url: string = "https://sebieyesstonegis2021.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any>form);
        url = url + "/registrieren" + "?" + query.toString();
        let responseRegistrieren: Response = await fetch(url);
        let responseRT: string = await responseRegistrieren.text();
        console.log(responseRT);
        if (responseRT == "success") {
            window.alert("Die Registrierung war erfolgreich. Jetzt kannst Du dich einloggen! :-)");
        } 
        else {
            window.alert("Dieser Benutzername ist bereits vergeben.");
        }
        formlog.reset();
    }   
}