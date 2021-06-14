"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aufgabe3_4 = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Aufgabe3_4;
(function (Aufgabe3_4) {
    let collection;
    let databaseUrl = "mongodb+srv://Testuser:<GIS404>@sebieyesstonegis-ist-ge.oawwp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    connectToDatabase(databaseUrl);
    console.log("Starting Server");
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100; //Port wird auf 8100 gesetzt
    let server = Http.createServer(); //Server wird erstellt
    server.addListener("request", handleRequest); //Funktion handleRequest wird aufgerufen
    server.addListener("listening", handleListen); //HandleListen Funktion wird aufgerufen
    server.listen(port);
    async function connectToDatabase(url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(url, options);
        await mongoClient.connect();
        collection = mongoClient.db("Test").collection("Students");
    }
    function handleListen() {
        console.log("Listening");
    }
    async function handleRequest(_request, _response) {
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            let pathname = url.pathname;
            if (pathname == "/abschicken") {
                collection.insertOne(url.query);
            }
            else if (pathname == "/erhalten") {
                _response.write(JSON.stringify(await collection.find().toArray()));
            }
        }
        _response.end();
    }
})(Aufgabe3_4 = exports.Aufgabe3_4 || (exports.Aufgabe3_4 = {}));
//# sourceMappingURL=server.js.map