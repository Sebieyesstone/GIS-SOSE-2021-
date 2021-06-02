"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A3_2Server = void 0;
const Http = require("http");
const Url = require("url"); // zum bauen eines Servers und Sternchen "*" sämtliche Funktionen werden importiert
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
        console.log("I hear voices!"); //Konsole gibt I hear voices aus
        console.log(_request.url);
        _response.setHeader("content-type", "text/html; charset=utf-8"); // setzt den Header des http.ServerAntwort auf: (HTML mit Zeichencode UTF-8)
        _response.setHeader("Access-Control-Allow-Origin", "*"); //Erlaubnis des Browser Codes für eine Anfrage um Ressourcen zu erreichen 
        if (_request.url) {
            let url = Url.parse(_request.url, true); // verwandelt Query in ein assoziatives Array
            let pathname = url.pathname;
            if (pathname == "/json") { //wenn /json (in url) empfangen wird, wird url.query in String umgeändert, in der Konsole ist die Ausgabe und wird der Antwort ausgegeben
                let jsonString = JSON.stringify(url.query);
                console.log(jsonString);
                _response.write(jsonString);
            } //wenn /html (in url) empfangen wird, werden Schlüssel-Werte-Paare als Antwort ausgegeben
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