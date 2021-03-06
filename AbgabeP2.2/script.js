"use strict";
/*
namespace Abgabe2_2 {
    // Aufgabe 1 - Mehr "langweilige" Konsolenausgaben
    // a)
    function min(...args: number[]): number { // args = Name arguments = Befehl.
        return Math.min.apply(Math, args); // apply = Array zu übergeben anstatt einzelne Parameter, Math.min kann nur einzelne Parameter bekommen
    }
    //console.log(min(5, 3, 1, 8); // Test

    // b)
    function isEven(n: number): boolean {
        if (n == 0) // geht nochmal durch
            return true;
        if (n == 1) // endet hier und wird false Reste = 1
            return false;
        if (n < 0)
            return isEven(-n); //Vorzeichenwechsel wird von - zu plus
        else
            return isEven(n - 2);
    }
   // Test
    console.log(isEven(50)); //true     Ergebnis = 0
    console.log(isEven(75)); //false    Ergebnis = 1
    console.log(isEven(-1)); //false    Ergebnis = -5
    // Bsp: mit 5 : 5 ist nicht 0 u. 1, 5-2 = 3, 3 ist nicht 0 u. 1, 3-2 = 1 -> 1 ist nicht 0, aber 1 -> false
    // Die -5 bei -1 entsteht, weil die if-Statements nie true sind, aber das else-Statement bei ihr zutrifft.
    // Die Lösung dafür wäre die Konsolenausgabe oder den Datentyp der Rückgabe so verändern, sodass negative Zahlen zurückgegeben werden können

    // c) 1 - 4
    interface Student {
        nameStudent: String;
        matrikelnummer: number;
        studiengang: String;
    }

    let st1: Student = {
        nameStudent: "Maja",
        matrikelnummer: 213721,
        studiengang: "OMB"
    }; // Bei einer Variablendeklaration macht man ein Komma auch am Ende
    let st2: Student = {
        nameStudent: "Helena",
        matrikelnummer: 213732,
        studiengang: "MIB"
    };
    let st3: Student = {
        nameStudent: "Thomas",
        matrikelnummer: 213743,
        studiengang: "MKB"
    };

    let stA: Array<Student> = [st1, st2, st3]; // Erstelle ich ein Array aus meinen Studenten und mache eine Liste draus

    function addStudent(nameStudent: string, matrikelnummer: number, studiengang: string): void {
        let st4: Student = { nameStudent, matrikelnummer, studiengang }; // neuer Student anlegen
        stA.push(st4); // push hängt die angegebenen Elemente an das letzte Array an und gibt die Länge des neuen Arrays zurück
    }


    addStudent("Romina", 213754, "SSB");
    showInfo(213754);

    function showInfo(matrikelnummer: number): boolean {
        for (let i: number = 0; i < stA.length; i++) { // wenn i = 0 , i kleiner Array Länge, immer +1
            if (matrikelnummer == stA[i].matrikelnummer) {  // eingebene Matrikelnummer und die im array gleich sind
                console.log(stA[i].nameStudent, stA[i].matrikelnummer, stA[i].studiengang); //Konsolenausgabe
                return true; // zurückgeben
            }
        }
        console.log("Student nicht gefunden!"); // wenn nicht -> Konsolenausgabe
        return false; // zurückgeben
    }


    addStudent("Tabea", 213765, "OMB"); // Methode
    showInfo(213721);
    showInfo(213732);
    showInfo(213743);
    showInfo(213765);

    // 5.
    class Student2 implements Student { // von dem meinem Interface Student implementiert
        nameStudent: String;
        matrikelnummer: number;
        studiengang: String;

        constructor(nameStudent: string, martikelnummer: number, studiengang: string) { // Erstellung
            this.nameStudent = nameStudent; // constructor Aufruf
            this.matrikelnummer = martikelnummer;
            this.studiengang = studiengang;
        }
        showInfo(matrikelnummer: number): boolean { // Methode
            for (let i: number = 0; i < stA.length; i++) {
                if (matrikelnummer == stA[i].matrikelnummer) {
                    console.log(stA[i].nameStudent, stA[i].matrikelnummer, stA[i].studiengang);
                    return true;
                }
            }
            console.log("Student nicht gefunden!");
            return false;
        }
    }

    // Aufgabe 2 - Arrays
    // a)

    let b: number[] = [1, 2, 3, 4, 5]; // Initialisierung b number mit dem Wert [] (Array)
    function backwards(b: number[]): void {
        for (let i: number = b.length - 1; i >= 0; i--) { //rückwarts immer 1 zurück
            console.log(b[i]);
        }
    }
    backwards(b); // 5, 4, 3, 2, 1 beginnt im Array von hinten nach vorne

    // b)
    let j: number[] = [6, 7, 8, 9, 10]; // Initialisierung j number mit dem Wert [] (Array)
    function join(baseArray: number[], addingArray: number[]): number[] { // fasst alle E eines Arrays zu einer Zeichenfolge zusammen
        for (let i: number = 0; i < addingArray.length; i++) { // +1
            baseArray.push(addingArray[i]);
        }
        console.log(baseArray);
        return baseArray;
    }

    join(b, j);

    // c)

    function split(array: number[], left: number, right: number): number[] {
        let reihe: number[] = [];
        if (left > right) {
            return reihe;
        }

        for (let i: number = left; i <= right; i++) { // left = unterer Gw, rechts = oberer Gw -> dadurch wird die Obergrenze mit engeschlossen. Die Untergrenze ist automatisch immer eingeschlossen
            reihe.push(array[i]);
        }
        console.log(reihe);
        return reihe;
    }
    console.log(split(b, 2, 5));

     // (Array, Untergrenze, Obergrenze) - Wenn Zf leer ist, gibt split ein Array zurück, das eine leere Zf anstelle eines leeren Arrays enthält

    /*let arr: number[] = [5, 42, 17, 2018, -10, 60, -10010];
    let arrBack: number[] = backwards(arr); //aufruf backwardsmethode
    console.log(arr);
    console.log(arrBack);
    console.log(join(arr, [15, 9001, -440] ));
    console.log(join([123, 666, -911], arr, [15, 9001, -440, 1024] )); // Bonus b)
    arr = split(arr, 0, 4); // neue Zuweisung
    console.log(arr);
    console.log(split(arr, 1, 2));
    console.log(split(arr, 2, 0));     // Bonus c)
    console.log(split(arr, -1, 2));    // Bonus c)
    console.log(split(arr, 0, 7));     // Bonus c)
    */
// Aufgabe 3 - Endlich was visuelles!
// a)
/*
let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("myFirstCanvas");
let context: CanvasRenderingContext2D = canvas.getContext("2d");
context.fillStyle = "rgb(135,206,255)";  //Himmel
context.fillRect(0, 0, 500, 400); //Position von Himmel x y weite höhe
context.fillStyle = "rgb(155,205,155)";   //Wiese
context.fillRect(0, 250, 500, 300);

context.beginPath();   //Baumstamm
context.lineWidth = 3;
context.fillStyle = "rgb(139,69,19)";
context.moveTo(370, 210);
context.lineTo(350, 300);
context.lineTo(410, 300);
context.lineTo(390, 210);
context.lineTo(370, 210);
context.stroke();
context.fill();

context.beginPath();    //Blätter
context.lineWidth = 1;
context.strokeStyle = "black";
context.fillStyle = "rgb(110,139,61)";
context.arc(360, 210, 30, 0, Math.PI * 2);
context.fill();
context.stroke();

context.beginPath();    //Blätter
context.lineWidth = 1;
context.strokeStyle = "black";
context.fillStyle = "rgb(110,139,61)";
context.arc(380, 180, 30, 0, Math.PI * 2);
context.fill();
context.stroke();

context.beginPath();    //Blätter
context.lineWidth = 1;
context.strokeStyle = "black";
context.fillStyle = "rgb(110,139,61)";
context.arc(400, 210, 30, 0, Math.PI * 2);
context.fill();
context.stroke();

context.lineWidth = 0.5; //Haus
context.fillStyle = "rgb(238,213,183)";
context.fillRect(75, 140, 150, 110);
context.fillStyle = "rgb(240,128,128)";
context.fillRect(130, 190, 40, 60);

context.beginPath();    //Dach
context.fillStyle = "rgb(240,128,128)";
context.moveTo(50, 140);
context.lineTo(150, 60);
context.lineTo(250, 140);
context.closePath();
context.fill();
context.stroke();

context.beginPath();    //Wolke
context.fillStyle = "white";
context.arc(340, 60, 40, 0, Math.PI * 2);
context.fill();

context.beginPath();    //Wolke
context.fillStyle = "white";
context.arc(370, 35, 30, 0, Math.PI * 2);
context.fill();

context.beginPath();    //Wolke
context.fillStyle = "white";
context.arc(385, 60, 40, 0, Math.PI * 2);
context.fill();

context.beginPath();    //Wolke2
context.fillStyle = "whitesmoke";
context.arc(35, 60, 20, 0, Math.PI * 2);
context.fill();

context.beginPath();    //Wolke2
context.fillStyle = "whitesmoke";
context.arc(80, 44, 25, 0, Math.PI * 2);
context.fill();

context.beginPath();    //Wolke2
context.fillStyle = "whitesmoke";
context.arc(55, 60, 25, 0, Math.PI * 2);
context.fill();

console.log(canvas);

// b)
interface Rechteck {
    fillRect(x: number, y: number, w: number, h: number): void;
    strokeRect(x: number, y: number, w: number, h: number): void;
}
function getRandom(max: number): number {
    return Math.floor(Math.random() * max);
}

function createRect(): void {
    let x: number = getRandom(500);
    let w: number = getRandom(500);
    let y: number = getRandom(400);
    let h: number = getRandom(400);
    context.fillRect(x, y, w, h);
}

createRect();

class Rectangle {
    width: number;
    height: number;

createRectangle(_width: number, _height: number): void { //constructor
    this.width = _width;
    this.height = _height;
}

// c)
createRandomRec(): void {
    this.width = Math.floor(Math.random() * 100);
    this.height = Math.floor(Math.random() * 100);
}

// d)
drawRectangle(x: number, y: number, fill: boolean, color?: string): void {
    let c: string = "rgb(188,143,143)";
    context.beginPath();
    context.rect(x, y, this.width, this.height);
    if (color) {
        context.fillStyle = color;
        context.strokeStyle = color;
    }
    else {
        context.fillStyle = c;
        context.strokeStyle = c;
    }
    if (fill) {
        context.fill();
    }
    context.stroke();
    }

drawRandom(): void {
    let x: number = Math.floor(Math.random() * 500);
    let y: number = Math.floor(Math.random() * 500);
    context.beginPath();
    context.rect(x, y, this.width, this.height);
    context.fillStyle = "rgb(188,143,143)"; //rosybrown Kästchen
    context.strokeStyle = "rgb(188,143,143)";
    context.fill();
    context.stroke();
    }
}

const r1: Rectangle = new Rectangle();
r1.createRectangle(300, 200);
r1.drawRectangle(300, 650, true);

// c)
const r2: Rectangle = new Rectangle();
r2.createRandomRec();
r2.drawRectangle(20, 700, false);

// d)
const r3: Rectangle = new Rectangle();
r3.createRandomRec();
r3.drawRectangle(450, 800, true, "rgb(188,143,143)");

// e)
const r4: Rectangle = new Rectangle();
r4.createRandomRec();
const r5: Rectangle = new Rectangle();
r5.createRandomRec();
const r6: Rectangle = new Rectangle();
r6.createRandomRec();

let rectangles: Array<Rectangle> = new Array();
rectangles = [r4, r5, r6];
rectangles.forEach(rec => rec.drawRandom());
}
*/ 
//# sourceMappingURL=script.js.map