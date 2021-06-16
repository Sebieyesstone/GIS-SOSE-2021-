"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aufgabe3_4 = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Aufgabe3_4;
(function (Aufgabe3_4) {
    let _url = "mongodb+srv://<Testuser>:<GIS404>@sebieyesstonegis-ist-ge.oawwp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    let mongoCollection;
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100; //Port wird auf 8100 gesetzt
    startServer(port);
    connectDatabase();
    function startServer(_port) {
        let server = Http.createServer();
        server.addListener("request", handleRequest);
        server.listen(port);
    }
    async function connectDatabase() {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        mongoCollection = mongoClient.db("Test").collection("Students");
    }
    async function handleRequest(_request, _response) {
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            if (url.pathname == "/insert") {
                mongoCollection.insert(url.query);
            }
            else if (url.pathname == "/pull") {
                let findings = mongoCollection.find();
                let findingsArray = await findings.toArray();
                _response.write(JSON.stringify(findingsArray));
            }
            else {
                console.log("Error - Daten nicht vorhanden");
            }
        }
        _response.end();
    }
})(Aufgabe3_4 = exports.Aufgabe3_4 || (exports.Aufgabe3_4 = {}));
//# sourceMappingURL=server.js.map