"use strict";
var P2_2;
(function (P2_2) {
    // Aufgabe 1 - Mehr "langweilige" Konsolenausgaben
    // a)
    function min(...args) {
        return Math.min.apply(Math, args); // apply = Array zu übergeben anstatt einzelne Parameter, Math.min kann nur einzelne Parameter bekommen
    }
    //console.log(min(5, 3, 1, 8); // Test
    // b)
    function isEven(n) {
        if (n == 0)
            return true;
        if (n == 1)
            return false;
        if (n < 0)
            return isEven(-n);
        else
            return isEven(n - 2);
    }
    let st1 = {
        nameStudent: "Maja",
        martikelnummer: 21372,
        studiengang: "OMB"
    };
    let st2 = {
        nameStudent: "Helena",
        martikelnummer: 21373,
        studiengang: "MIB"
    };
    let st3 = {
        nameStudent: "Thomas",
        martikelnummer: 21374,
        studiengang: "MKB"
    };
    let stA = ["nameStudent", martikelnummer, "studiengang"];
    stA.
    ;
    const stA = { nameStudent: "", martikelnummer: , studiengang: "" };
    console.log(stA);
    // Aufgabe 2 - Arrays
    // a)
    // function backwards()
    number.backwards();
    // b)
    //function join( arr: number[]: number) {
    //}
    // c)
    // Aufgabe 3 - Endlich was visuelles!
    // a)
    let canvas = document.getElementById("myFirstCanvas");
    let context = canvas.getContext("2d");
    context.fillStyle = "blue"; //Himmel
    context.fillRect(0, 0, 500, 400);
    context.fillStyle = "green"; //Wiese
    context.fillRect(0, 250, 500, 300);
    context.beginPath(); //Baumstamm
    context.lineWidth = 3;
    context.fillStyle = "brown";
    context.moveTo(370, 210);
    context.lineTo(350, 300);
    context.lineTo(410, 300);
    context.lineTo(390, 210);
    context.lineTo(370, 210);
    context.stroke();
    context.fill();
    context.beginPath(); //Blätter
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.fillStyle = "darkgreen";
    context.arc(360, 210, 30, 0, Math.PI * 2);
    context.fill();
    context.stroke();
    context.beginPath(); //Blätter
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.fillStyle = "darkgreen";
    context.arc(380, 180, 30, 0, Math.PI * 2);
    context.fill();
    context.stroke();
    context.beginPath(); //Blätter
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.fillStyle = "darkgreen";
    context.arc(400, 210, 30, 0, Math.PI * 2);
    context.fill();
    context.stroke();
    context.lineWidth = 10; //Haus
    context.fillStyle = "black";
    context.fillRect(75, 140, 150, 110);
    context.fillStyle = "brown";
    context.fillRect(130, 190, 40, 60);
    context.beginPath(); //Dach
    context.fillStyle = "black";
    context.moveTo(50, 140);
    context.lineTo(150, 60);
    context.lineTo(250, 140);
    context.closePath();
    context.fill();
    context.stroke();
    context.beginPath(); //Wolke
    context.fillStyle = "white";
    context.arc(340, 60, 40, 0, Math.PI * 2);
    context.fill();
    context.beginPath(); //Wolke
    context.fillStyle = "white";
    context.arc(370, 35, 30, 0, Math.PI * 2);
    context.fill();
    context.beginPath(); //Wolke
    context.fillStyle = "white";
    context.arc(385, 60, 40, 0, Math.PI * 2);
    context.fill();
    context.beginPath(); //Wolke2
    context.fillStyle = "lightgrey";
    context.arc(35, 60, 20, 0, Math.PI * 2);
    context.fill();
    context.beginPath(); //Wolke2
    context.fillStyle = "lightgrey";
    context.arc(80, 44, 25, 0, Math.PI * 2);
    context.fill();
    context.beginPath(); //Wolke2
    context.fillStyle = "lightgrey";
    context.arc(55, 60, 25, 0, Math.PI * 2);
    context.fill();
    console.log(canvas);
    // b)
    // c)
    // d)
    // e)
    // f)
    // g)
})(P2_2 || (P2_2 = {}));
//# sourceMappingURL=script.js.map