"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A08Server = void 0;
/*import * as Http from "http";

export namespace A08Server {

    console.log("Starting server");  //Konsole gibt Starting server aus

    let port: number = Number(process.env.PORT);

    if (!port)
        port = 8100;  //Port wird auf 8100 gesetzt


    let server: Http.Server = Http.createServer(); //Server wird erstellt

    server.addListener("request", handleRequest);  //Funktion handleRequest wird aufgerufen

    server.addListener("listening", handleListen); //HandleListen Funktion wird aufgerufen

    server.listen(port); //Server hört/reagiert auf port und startet


    function handleListen(): void { //Konsole gibt Listening aus wenn Funktion aufgerufen wird
        console.log("Listening");
    }


    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void { //Konsole gibt I hear voices aus

        console.log("I hear voices!");
        


        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");


        _response.write(_request.url); //Url wird ausgegeben


        _response.end(); //Response wird beendet
    
    }
}
*/
const Http = require("http");
const Url = require("url");
var A08Server;
(function (A08Server) {
    console.log("Starting server");
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            let path = url.pathname;
            if (path == "/json") {
                let jsonString = JSON.stringify(url.query);
                _response.write(jsonString);
                console.log(jsonString);
            }
            else if (path == "/html") {
                for (let key in url.query) {
                    _response.write(key + ":" + url.query[key] + "<br/>");
                }
            }
        }
        _response.end();
    }
})(A08Server = exports.A08Server || (exports.A08Server = {}));
//# sourceMappingURL=server.js.map