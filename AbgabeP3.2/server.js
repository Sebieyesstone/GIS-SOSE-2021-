"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A3_2Server = void 0;
const Http = require("http");
const Url = require("url");
var A3_2Server;
(function (A3_2Server) {
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
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            let pathname = url.pathname;
            if (pathname == "/json") {
                let jsonString = JSON.stringify(url.query);
                console.log(jsonString);
                _response.write(jsonString);
            }
            else if (pathname == "/html") {
                for (let key in url.query) {
                    _response.write(key + ":" + url.query[key] + "<br/>");
                }
            }
        }
        _response.end(); //Response wird beendet
    }
})(A3_2Server = exports.A3_2Server || (exports.A3_2Server = {}));
//# sourceMappingURL=server.js.map