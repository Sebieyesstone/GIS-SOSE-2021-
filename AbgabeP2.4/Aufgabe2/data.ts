namespace Aufgabe1 {

    export let parts: object = {
        heads: [
            "images/Heads/AffeKopf.jpg",
            "images/Heads/GiraffeKopf.jpg",
            "images/Heads/LeopardKopf.jpg"
        ],
        torsos: [
            "images/Torso/AffeBody.jpg",
            "images/Torso/GiraffenBody.jpg",
            "images/Torso/LeopardKörper.jpg"
        ],
        legs: [
            "images/Legs/AffeBeine.jpg",
            "images/Legs/GiraffenBeine.jpg",
            "images/Legs/LeopardBeine.jpg"
        ]
    };

    export const data: string = JSON.stringify(parts);
}