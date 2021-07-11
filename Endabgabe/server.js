"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endabgabe = void 0;
//mongodb+srv://Testuser:GIS404@sebieyesstonegis-ist-ge.oawwp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Endabgabe;
(function (Endabgabe) {
    let alleBenutzer;
    let neuerBenutzer;
    let loginCollection;
    let rezeptCollection;
    let mongoUrl = "mongodb+srv://Testuser:GIS404@sebieyesstonegis-ist-ge.oawwp.mongodb.net";
    //let mongoUrl: string = "mongodb://localhost:27017";
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
        rezeptCollection = mongoClient.db("Endabgabe").collection("Rezepte");
        console.log("Verbindung zur loginCollection", loginCollection != undefined);
        console.log("Verbindung zur rezeptCollection", rezeptCollection != undefined);
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
            console.log(url.query);
            switch (url.pathname.toString()) {
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
                    console.log("ich bin hier");
                    alleBenutzer = await loginCollection.find().toArray();
                    let benutzernameReg = url.query["benutzername"];
                    let emailReg = url.query["email"];
                    let passwortReg = url.query["passwort"];
                    //console.log("benutzernameReg" + benutzernameReg);
                    let neueReg = { benutzername: benutzernameReg, email: emailReg, passwort: passwortReg };
                    let vergebeneReg = false;
                    for (let i = 0; i < alleBenutzer.length; i++) {
                        if (neueReg.benutzername == alleBenutzer[i].benutzername) {
                            vergebeneReg = true;
                        }
                    }
                    if (vergebeneReg == false) {
                        loginCollection.insertOne({ "benutzername": benutzernameReg, "email": emailReg, "passwort": passwortReg });
                        _response.write("success");
                        console.log("hello");
                    }
                    break;
                case "/abschicken":
                    console.log(url.query);
                    let benutzername = url.query["benutzername"];
                    let rezeptname = url.query["rezeptname"];
                    let anzahl = url.query["anzahl"];
                    let zutaten = url.query["zutaten"];
                    let kategorie = url.query["kategorie"];
                    let zutatenliste = url.query["zutatenliste"];
                    rezeptCollection.insertOne({ "benutzername": benutzername, "rezeptname": rezeptname, "anzahl": anzahl, "zutaten": zutaten, "kategorie": kategorie, "zutatenliste": zutatenliste });
                    connectToDatabase(mongoUrl);
                    break;
                case "/erhalten":
                    console.log("erhalten");
                    let benutzernameErhalten = url.query["benutzername"];
                    if (benutzernameErhalten && benutzernameErhalten.length) {
                        _response.write(JSON.stringify(await (rezeptCollection.find({ benutzername: benutzernameErhalten }).toArray())));
                    }
                    else {
                        _response.write(JSON.stringify(await (rezeptCollection.find().toArray())));
                    }
                    console.log("funktioniert");
                    break;
                case "/update":
                    console.log("Got a update request!");
                    const filter = { _id: new Mongo.ObjectId(url.query["ID"]) };
                    console.log("I want to update: ", filter);
                    let document = {
                        "rezeptname": url.query["rezeptname"],
                        "anzahl": url.query["anzahl"],
                        "zutaten": url.query["zutaten"],
                        "kategorie": url.query["kategorie"],
                        "zutatenliste": url.query["zutatenliste"]
                    };
                    console.log("I'm updating it with the following: ", document);
                    let result = rezeptCollection.replaceOne(filter, document);
                    console.log("I'm done udating, my result is: ", result);
                    break;
                case "/favoriten":
                    console.log("favoriten");
                    let benutzernameFavoriten = url.query["benutzername"];
                    const user = await loginCollection.findOne({ "benutzername": benutzernameFavoriten });
                    const favoritenArray = user.favoriten;
                    if (!favoritenArray || favoritenArray.length < 1) {
                        _response.write("");
                        return;
                    }
                    const favResponse = await rezeptCollection.find().toArray();
                    console.log(favoritenArray);
                    const favResults = favResponse.filter((rezept) => {
                        return favoritenArray.indexOf(rezept._id.toSring()) !== -1;
                    });
                    _response.write(JSON.stringify(favResults));
                    console.log("funktioniert");
                    break;
                case "/addFavoriten":
                    console.log("addFavoriten");
                    let benutzernameaddFavoriten = url.query["benutzername"];
                    let favoritenId = url.query["favoriten_id"];
                    let userAddfavorit = await loginCollection.findOne({ "benutzername": benutzernameaddFavoriten });
                    console.log("old", userAddfavorit, favoritenId);
                    let newFavoriten = [];
                    if (userAddfavorit.favoriten && Array.isArray(userAddfavorit.favoriten)) {
                        newFavoriten = userAddfavorit.favoriten;
                    }
                    if (!favoritenId)
                        return;
                    if (newFavoriten.includes(favoritenId))
                        return;
                    newFavoriten.push(favoritenId);
                    let newuserAddfavorit = await loginCollection.updateOne({ "benutzername": benutzernameaddFavoriten }, { $set: { favoriten: newFavoriten } });
                    console.log(newuserAddfavorit);
                    if (newuserAddfavorit) {
                        _response.write(JSON.stringify(newuserAddfavorit));
                    }
                    else {
                        _response.write("failure");
                    }
                    break;
                case "/removeFavoriten":
                    console.log("removeFavoriten");
                    let benutzernamedelFavoriten = url.query["benutzername"];
                    let favoritenIdtoremove = url.query["favoriten_id"];
                    let userRemovefavorit = await loginCollection.findOne({ "benutzername": benutzernamedelFavoriten });
                    console.log("old", userRemovefavorit, favoritenIdtoremove);
                    let new_favoriten_remove = [];
                    if (userRemovefavorit.favoriten && Array.isArray(userRemovefavorit.favoriten)) {
                        new_favoriten_remove = userRemovefavorit.favoriten;
                    }
                    if (!favoritenIdtoremove)
                        return;
                    if (!new_favoriten_remove.includes(favoritenIdtoremove))
                        return;
                    new_favoriten_remove = new_favoriten_remove.filter(e => e !== favoritenIdtoremove);
                    let newuserRemovefavorit = await loginCollection.updateOne({ "benutzername": benutzernamedelFavoriten }, { $set: { favoriten: new_favoriten_remove } });
                    console.log(newuserRemovefavorit);
                    if (newuserRemovefavorit) {
                        _response.write(JSON.stringify(newuserRemovefavorit));
                    }
                    else {
                        _response.write("failure");
                    }
                    break;
            }
        }
        _response.end();
    }
})(Endabgabe = exports.Endabgabe || (exports.Endabgabe = {}));
//# sourceMappingURL=server.js.map