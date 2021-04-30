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
    let stA;
    const stA = { nameStudent: "", martikelnummer: , studiengang: "" };
    console.log(stA);
    // Aufgabe 2 - Arrays
    // a)
    // b)
    // c)
    // Aufgabe 3 - Endlich was visuelles!
    // a)
    function backwards() {
    }
    // b)
    // c)
    // d)
    // e)
    // f)
    // g)
})(P2_2 || (P2_2 = {}));
//# sourceMappingURL=script.js.map