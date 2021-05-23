// in Zusammenarbeit mit Anna-Lara, Benjamin und Tabea
namespace Aufgabe2 {

    const anzeigeflaeche: HTMLElement = document.querySelector(".anzeigeflaeche");
    const currentStep: string = anzeigeflaeche ? anzeigeflaeche.id : "";
    const selection: HTMLElement = document.getElementById("selection");
    const heroku: HTMLElement = document.getElementById("heroku");

    //async function
    let data: BData;
    async function communicate(_url: RequestInfo): Promise<void> {
        
        let response: Response = await fetch(_url);
        console.log(Response, response);
        let antwort: BData = await response.json();
        data = antwort;
        buildPageFromData(data);
        console.log(antwort);
    }

    communicate("https://sebieyesstone/GIS-SOSE-2021-/AbgabeP2.5/Aufgabe2/data.json");

    //create img elemente
    function createImgElement(url: string, part?: string): HTMLImageElement {
        const imgElem: HTMLImageElement = document.createElement("img");
        imgElem.src = url;
        imgElem.id = part;
        return imgElem;
    }

    //data von data.ts einbindung
    function buildPageFromData(buildData: BData): void {
        const currentData: string[] = buildData[currentStep];

        for (const bodyPart in currentData) {
            if (Object.prototype.hasOwnProperty.call(currentData, bodyPart)) {
                const bodyPartImgURL: string = currentData[bodyPart];
                const imgElem: HTMLImageElement = createImgElement(bodyPartImgURL, bodyPart);
                imgElem.classList.add("pic-reel");
                anzeigeflaeche.appendChild(imgElem);
            }
        }
        const optionsHead: NodeListOf<HTMLElement> = document.querySelectorAll(".pic-reel");

        function highlightSelection(elem: HTMLElement): void {
            optionsHead.forEach(elem => {
                elem.classList.remove("highlighted");
            });
            elem.classList.add("highlighted");
        }

        //eventlistener
        optionsHead.forEach(elem => {
            elem.addEventListener("click", function (): void {
                selectElem(elem.id);
                highlightSelection(elem);
            });
        });
    }

    //select, store and show chosen elements

    function selectElem(id: string): void {
        let _id: number = Number(id);
        let url: string = "";
        switch (currentStep) {
            case "heads":
                url = getURL("heads", _id);
                sessionStorage.setItem("head", url);
                break;
            case "torsos":
                url = getURL("torsos", _id);
                sessionStorage.setItem("torso", url);
                break;
            case "legs":
                url = getURL("legs", _id);
                sessionStorage.setItem("legs", url);
                break;
            default:
                break;
        }
        paint();
    }

    function getURL(bodypart: string, id: number): string {
        const chosenURL: string = data[bodypart][id];
        return chosenURL;
    }

    function showSelected(url: string): void {
        if (url == null) {
            return null;
        }
        selection.classList.add("show");
        const imgElem: HTMLImageElement = createImgElement(url);
        selection.appendChild(imgElem);
    }

    function paint(): void {
        selection.innerHTML = "";
        showSelected(sessionStorage.getItem("head"));
        showSelected(sessionStorage.getItem("torso"));
        showSelected(sessionStorage.getItem("legs"));
    }

    if (heroku) {
        
        interface HirokuResponse {
            [key: string]: string;
        }

        async function communicateHeroku(_url: RequestInfo): Promise<void> {
            const tier: object = { head: sessionStorage.getItem("head"), body: sessionStorage.getItem("head"), legs: sessionStorage.getItem("head") };
            let query: URLSearchParams = new URLSearchParams(<any>tier);
            _url = _url + "?" + query.toString();

            const response: Response = await fetch(_url);
            const stringResponse: HirokuResponse = await response.json();
            const p: HTMLParagraphElement = document.createElement("p");
            const h: HTMLParagraphElement = document.createElement("h3");

            heroku.className = "response";
            heroku.appendChild(h);
            h.innerHTML = "Server Antwort:";
            heroku.appendChild(p);

            if (stringResponse.error) {
                p.className = "error";
                p.innerHTML = stringResponse.error;
            } else {
                p.className = "success";
                p.innerHTML = stringResponse.message;
            } //Server Antwort: Konfiguration eingegangen. Server Antwort: Mit ihrer Anfrage ist alles in Ordnung, aber der Server konnte diese derzeit nicht verarbeiten. Auch bekannt als Error 500 (Internal Server Error).
        }  //Server Antwort: Daten empfangen. Server Antwort: Alles angekommen.
        communicateHeroku("https://gis-communication.herokuapp.com");
    }
}