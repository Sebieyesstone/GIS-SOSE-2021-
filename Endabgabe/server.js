"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EndabgabeServer = void 0;
//mongodb+srv://Testuser:GIS404@sebieyesstonegis-ist-ge.oawwp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var EndabgabeServer;
(function (EndabgabeServer) {
    let alleBenutzer;
    let neuerBenutzer;
    let loginCollection;
    let rezepteCollection;
    //let mongoUrl: string = "mongodb+srv://Testuser:GIS404@sebieyesstonegis-ist-ge.oawwp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    //let mongoUrl: string = "mongodb+srv://Testuser:GIS404@sebieyesstonegis-ist-ge.oawwp.mongodb.net";
    let mongoUrl = "mongodb://localhost:27017";
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    console.log("Starting Server");
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    connectToDatabase(mongoUrl);
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        loginCollection = mongoClient.db("Endabgabe").collection("Benutzer");
        rezepteCollection = mongoClient.db("Endabgabe").collection("Rezepte");
        console.log("Verbindung zu Database", loginCollection, rezepteCollection != undefined);
    }
    function handleListen() {
        console.log("Listening");
    }
    async function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            switch (url.pathname) {
                case "/einloggen":
                    alleBenutzer = await loginCollection.find().toArray();
                    let benutzernameLogin = url.query["benutzername"];
                    let passwortLogin = url.query["passwort"];
                    let benutzernameConfirmed = false;
                    let passwortConfirmed = false;
                    for (let i = 0; i < alleBenutzer.length; i++) {
                        if (alleBenutzer[i].benutzername == benutzernameLogin) {
                            benutzernameConfirmed = true;
                            if (alleBenutzer[i].passwort == passwortLogin) {
                                passwortConfirmed = true;
                                neuerBenutzer = { benutzername: benutzernameLogin, passwort: passwortLogin };
                            }
                        }
                    }
                    if ((benutzernameConfirmed == true) && (passwortConfirmed == true)) {
                        _response.write(JSON.stringify(neuerBenutzer));
                    }
                    else {
                        _response.write("failure");
                    }
                    benutzernameConfirmed = false;
                    passwortConfirmed = false;
                    break;
                case "/reg":
                    alleBenutzer = await loginCollection.find().toArray();
                    let benutzernameReg = url.query["benutzername"];
                    let emailReg = url.query["email"];
                    let passwortReg = url.query["passwort"];
                    let neueReg = { benutzername: benutzernameReg, email: emailReg, passwort: passwortReg };
                    let vergebeneReg = false;
                    for (let i = 0; i < alleBenutzer.length; i++) {
                        if (neueReg.benutzername == alleBenutzer[i].benutzername) {
                            vergebeneReg = true;
                        }
                    }
                    if (vergebeneReg == false) {
                        loginCollection.insertOne({ benutername: benutzernameReg, email: emailReg, passwort: passwortReg });
                        _response.write("success");
                    }
                    break;
            }
        }
        _response.end();
    }
})(EndabgabeServer = exports.EndabgabeServer || (exports.EndabgabeServer = {}));
//# sourceMappingURL=server.js.map