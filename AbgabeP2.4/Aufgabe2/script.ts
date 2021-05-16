// in Zusammenarbeit mit Anna-Lara, Benjamin und Tabea
namespace Aufgabe1 {

    const anzeigeflaeche: HTMLElement = document.querySelector(".anzeigeflaeche");
    //const torsoButton: HTMLElement = document.getElementById("showTorso"); //getElementById seems to work best
    //const legButton: HTMLElement = document.getElementById("showLegs");
    const currentStep: string = anzeigeflaeche ? anzeigeflaeche.id : "";
    const selection: HTMLElement = document.getElementById("selection");


    //create img elemente
    function createImgElement(url: string, part?: string): HTMLImageElement {
        const imgElem: HTMLImageElement = document.createElement("img");
        imgElem.src = url;
        imgElem.id = part;
        return imgElem;
    }

    interface property {
        [Data: string]: string[];
    }

    let propertyData: property = JSON.parse(data);

    //data von data.ts einbindung
    function buildPageFromData(buildData: property): void {
        const currentData: string[] = buildData[currentStep];

        for (const bodyPart in currentData) {
            if (Object.prototype.hasOwnProperty.call(currentData, bodyPart)) {
                const bodyPartImgURL: string = currentData[bodyPart];
                const imgElem: HTMLImageElement = createImgElement(bodyPartImgURL, bodyPart);
                imgElem.classList.add("pic-reel");
                anzeigeflaeche.appendChild(imgElem);
            }
        }
    }
    buildPageFromData(propertyData);

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
        const chosenURL: string = propertyData[bodypart][id];
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
    paint();

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