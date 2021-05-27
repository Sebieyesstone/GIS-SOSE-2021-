"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A3_1Server = void 0;
const Http = require("http");
var A3_1Server;
(function (A3_1Server) {
    console.log("Starting server"); //Konsole gibt Starting server aus
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100; //Port wird auf 8100 gesetzt
    let server = Http.createServer(); //Server wird erstellt
    server.addListener("request", handleRequest); //Funktion handleRequest wird aufgerufen
    server.addListener("listening", handleListen); //HandleListen Funktion wird aufgerufen
    server.listen(port); //Server hört/reagiert auf port und startet
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        console.log(_request.url);
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.write(_request.url); //Url wird ausgegeben
        _response.end(); //Response wird beendet
    }
})(A3_1Server = exports.A3_1Server || (exports.A3_1Server = {}));
//# sourceMappingURL=server.js.map