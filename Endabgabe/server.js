"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.Endabgabe = void 0;
//mongodb+srv://Testuser:GIS404@sebieyesstonegis-ist-ge.oawwp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
var Http = require("http");
var Url = require("url");
var Mongo = require("mongodb");
var Endabgabe;
(function (Endabgabe) {
    var alleBenutzer;
    var neuerBenutzer;
    var loginCollection;
    var rezeptCollection;
    var mongoUrl = "mongodb+srv://Testuser:GIS404@sebieyesstonegis-ist-ge.oawwp.mongodb.net";
    //let mongoUrl: string = "mongodb://localhost:27017";
    var port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    console.log("Starting Server");
    var server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    connectToDatabase(mongoUrl);
    function connectToDatabase(_url) {
        return __awaiter(this, void 0, void 0, function () {
            var options, mongoClient;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = { useNewUrlParser: true, useUnifiedTopology: true };
                        mongoClient = new Mongo.MongoClient(_url, options);
                        return [4 /*yield*/, mongoClient.connect()];
                    case 1:
                        _a.sent();
                        loginCollection = mongoClient.db("Endabgabe").collection("Benutzer");
                        rezeptCollection = mongoClient.db("Endabgabe").collection("Rezepte");
                        console.log("Verbindung zur loginCollection", loginCollection != undefined);
                        console.log("Verbindung zur rezeptCollection", rezeptCollection != undefined);
                        return [2 /*return*/];
                }
            });
        });
    }
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        return __awaiter(this, void 0, void 0, function () {
            var url, _a, benutzernameLogin, passwortLogin, benutzernameConfirmed, passwortConfirmed, i, benutzernameReg, emailReg, passwortReg, neueReg, vergebeneReg, i, rezeptname, anzahl, zutaten, kategorie, zutatenliste, filter, document_1, result, dFilter, res, _b, _c, _d, _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        console.log("I hear voices!");
                        _response.setHeader("content-type", "text/html; charset=utf-8");
                        _response.setHeader("Access-Control-Allow-Origin", "*");
                        if (!_request.url) return [3 /*break*/, 11];
                        url = Url.parse(_request.url, true);
                        console.log(url.query);
                        _a = url.pathname.toString();
                        switch (_a) {
                            case "/einloggen": return [3 /*break*/, 1];
                            case "/reg": return [3 /*break*/, 3];
                            case "/abschicken": return [3 /*break*/, 5];
                            case "/update": return [3 /*break*/, 6];
                            case "/entfernen": return [3 /*break*/, 7];
                            case "/erhalten": return [3 /*break*/, 9];
                        }
                        return [3 /*break*/, 11];
                    case 1: return [4 /*yield*/, loginCollection.find().toArray()];
                    case 2:
                        alleBenutzer = _f.sent();
                        benutzernameLogin = url.query["benutzername"];
                        passwortLogin = url.query["passwort"];
                        benutzernameConfirmed = false;
                        passwortConfirmed = false;
                        for (i = 0; i < alleBenutzer.length; i++) {
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
                        return [3 /*break*/, 11];
                    case 3:
                        console.log("ich bin hier");
                        return [4 /*yield*/, loginCollection.find().toArray()];
                    case 4:
                        alleBenutzer = _f.sent();
                        benutzernameReg = url.query["benutzername"];
                        emailReg = url.query["email"];
                        passwortReg = url.query["passwort"];
                        neueReg = { benutzername: benutzernameReg, email: emailReg, passwort: passwortReg };
                        vergebeneReg = false;
                        for (i = 0; i < alleBenutzer.length; i++) {
                            if (neueReg.benutzername == alleBenutzer[i].benutzername) {
                                vergebeneReg = true;
                            }
                        }
                        if (vergebeneReg == false) {
                            loginCollection.insertOne({ "benutzername": benutzernameReg, "email": emailReg, "passwort": passwortReg });
                            _response.write("success");
                            console.log("hello");
                        }
                        return [3 /*break*/, 11];
                    case 5:
                        console.log(url.query);
                        rezeptname = url.query["rezeptname"];
                        anzahl = url.query["anzahl"];
                        zutaten = url.query["zutaten"];
                        kategorie = url.query["kategorie"];
                        zutatenliste = url.query["zutatenliste"];
                        rezeptCollection.insertOne({ "rezeptname": rezeptname, "anzahl": anzahl, "zutaten": zutaten, "kategorie": kategorie, "zutatenliste": zutatenliste });
                        connectToDatabase(mongoUrl);
                        return [3 /*break*/, 11];
                    case 6:
                        console.log("Got a update request!");
                        filter = { _id: url.query["ID"] };
                        console.log("I want to update: ", filter);
                        document_1 = {
                            "rezeptname": url.query["rezeptname"],
                            "anzahl": url.query["anzahl"],
                            "zutaten": url.query["zutaten"],
                            "kategorie": url.query["kategorie"],
                            "zutatenliste": url.query["zutatenliste"]
                        };
                        console.log("I'm updating it with the following: ", document_1);
                        result = rezeptCollection.replaceOne(filter, document_1);
                        console.log("I'm done udating, my result is: ", result);
                        return [3 /*break*/, 11];
                    case 7:
                        console.log("I got a remove request");
                        dFilter = { "_id ": url.query["ID"] };
                        console.log("I will delete with filter: ", dFilter);
                        return [4 /*yield*/, rezeptCollection.deleteOne(dFilter)];
                    case 8:
                        res = _f.sent();
                        console.log("Im done deleting, result is: ", res);
                        return [3 /*break*/, 11];
                    case 9:
                        _c = (_b = _response).write;
                        _e = (_d = JSON).stringify;
                        return [4 /*yield*/, (rezeptCollection.find().toArray())];
                    case 10:
                        _c.apply(_b, [_e.apply(_d, [_f.sent()])]);
                        console.log("funktioniert");
                        return [3 /*break*/, 11];
                    case 11:
                        _response.end();
                        return [2 /*return*/];
                }
            });
        });
    }
})(Endabgabe = exports.Endabgabe || (exports.Endabgabe = {}));
//# sourceMappingURL=server.js.map