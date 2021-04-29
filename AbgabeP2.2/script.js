"use strict";
var P2_2;
(function (P2_2) {
    // Aufgabe 1 - Mehr "langweilige" Konsolenausgaben
    // a)
    function min(...args) {
        return Math.min.apply(Math, args); // apply = Array zu übergeben anstatt einzelne Parameter, Math.min kann nur einzelne Parameter bekommen
    }
    // console.log(min(5, 3, 1, 8)); // Test
})(P2_2 || (P2_2 = {}));
//# sourceMappingURL=script.js.map