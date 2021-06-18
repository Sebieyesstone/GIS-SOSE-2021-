"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aufgabe3_4 = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Aufgabe3_4;
(function (Aufgabe3_4) {
    let mongoCollection;
    //let mongoUrl: string = "mongodb+srv://Testuser:GIS404@sebieyesstonegis-ist-ge.oawwp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    let mongoUrl = "mongodb://localhost:27017";
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100; //Port wird auf 8100 gesetzt
    console.log("Starting Server");
    function startServer() {
        let server = Http.createServer();
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        server.listen(port);
    }
    startServer();
    connectToDatabase(mongoUrl);
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        mongoCollection = mongoClient.db("Test").collection("Students");
        console.log("Verbindung zu Database", mongoCollection != undefined);
        /*let cursor: Mongo.Cursor = mongoCollection.find();
        let result: Students[] = await cursor.toArray();
        

        _response.write("<h2>" + "Serverantwort:" + "</h2>");

        for (let i: number = 0; i < result.length; i++) {
            _response.write("<div>" +
            "<p>" + result[i].name + "</p>" +
            "<p>" + result[i].nachname + "</p>" +
            "<p>" + result[i].matrikelnummer + "</p>" +
            "</div>");
        }*/
    }
    function handleListen() {
        console.log("Listening");
    }
    async function handleRequest(_request, _response) {
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            if (url.pathname == "/abschicken") {
                mongoCollection.insertOne(url.query);
            }
            if (url.pathname == "/erhalten") {
                _response.write(JSON.stringify(await (mongoCollection.find().toArray())));
                let cursor = mongoCollection.find();
                let result = await cursor.toArray();
                _response.write("<h2>" + "Serverantwort:" + "</h2>");
                for (let i = 0; i < result.length; i++) {
                    _response.write("<div>" +
                        "<p>" + result[i].name + "</p>" +
                        "<p>" + result[i].nachname + "</p>" +
                        "<p>" + result[i].matrikelnummer + "</p>" +
                        "</div>");
                }
            }
            if (url.pathname == "/entfernen") {
                mongoCollection.deleteOne({ "name": url.query["name"], "nachname": url.query["nachname"], "matrikelnummer": url.query["matrikelnummer"] });
            }
        }
        _response.end();
    }
})(Aufgabe3_4 = exports.Aufgabe3_4 || (exports.Aufgabe3_4 = {}));
//# sourceMappingURL=server.js.map