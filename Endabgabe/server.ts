//mongodb+srv://Testuser:GIS404@sebieyesstonegis-ist-ge.oawwp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace Endabgabe {

    interface Login {
        benutzername: string;
        passwort: string;
    }
    interface Reg {
        benutzername: string;
        email: string;
        passwort: string;
    }
    let alleBenutzer: Login[];
    let neuerBenutzer: Login;

    let loginCollection: Mongo.Collection;
    let rezeptCollection: Mongo.Collection;

    let mongoUrl: string = "mongodb+srv://Testuser:GIS404@sebieyesstonegis-ist-ge.oawwp.mongodb.net";
    //let mongoUrl: string = "mongodb://localhost:27017";

    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8100;

    console.log("Starting Server");

    let server: Http.Server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);

    connectToDatabase(mongoUrl);

    async function connectToDatabase(_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        loginCollection = mongoClient.db("Endabgabe").collection("Benutzer");
        rezeptCollection = mongoClient.db("Endabgabe").collection("Rezepte");
        console.log("Verbindung zur loginCollection", loginCollection != undefined);
        console.log("Verbindung zur rezeptCollection", rezeptCollection != undefined);
    }

    function handleListen(): void {
        console.log("Listening");
    }

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {

        console.log("I hear voices!");

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            console.log(url.query);

            switch (url.pathname.toString()) {

                case "/einloggen":
                    alleBenutzer = await loginCollection.find().toArray();
                    let benutzernameLogin: string = <string>url.query["benutzername"];
                    let passwortLogin: string = <string>url.query["passwort"];

                    let benutzernameConfirmed: boolean = false;
                    let passwortConfirmed: boolean = false;

                    for (let i: number = 0; i < alleBenutzer.length; i++) {
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
                    let benutzernameReg: string = <string>url.query["benutzername"];
                    let emailReg: string = <string>url.query["email"];
                    let passwortReg: string = <string>url.query["passwort"];
                    //console.log("benutzernameReg" + benutzernameReg);

                    let neueReg: Reg = { benutzername: benutzernameReg, email: emailReg, passwort: passwortReg };

                    let vergebeneReg: boolean = false;

                    for (let i: number = 0; i < alleBenutzer.length; i++) {
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
                    let benutzername: string = <string>url.query["benutzername"];
                    let rezeptname: string = <string>url.query["rezeptname"];
                    let anzahl: string = <string>url.query["anzahl"];
                    let zutaten: string = <string>url.query["zutaten"];
                    let kategorie: string = <string>url.query["kategorie"];
                    let zutatenliste: string = <string>url.query["zutatenliste"];

                    rezeptCollection.insertOne({ "benutzername": benutzername, "rezeptname": rezeptname, "anzahl": anzahl, "zutaten": zutaten, "kategorie": kategorie, "zutatenliste": zutatenliste });
                    connectToDatabase(mongoUrl);
                    break;

                case "/erhalten":
                    console.log("erhalten");
                    let benutzernameErhalten: string = <string>url.query["benutzername"];
                    if (benutzernameErhalten && benutzernameErhalten.length) {                        
                        _response.write(JSON.stringify(await (rezeptCollection.find({benutzername : benutzernameErhalten }).toArray())));                        
                    } else {
                        _response.write(JSON.stringify(await (rezeptCollection.find().toArray())));
                    }

                    console.log("funktioniert");
                    break;

                case "/update":
                    console.log("Got a update request!");
                    const filter = { _id: new Mongo.ObjectId(<string>url.query["ID"]) };
                    console.log("I want to update: ", filter);
                    let document = {
                        "rezeptname": <string>url.query["rezeptname"],
                        "anzahl": <string>url.query["anzahl"],
                        "zutaten": <string>url.query["zutaten"],
                        "kategorie": <string>url.query["kategorie"],
                        "zutatenliste": <string>url.query["zutatenliste"]
                    };
                    console.log("I'm updating it with the following: ", document);
                    let result = rezeptCollection.replaceOne(filter, document);

                    console.log("I'm done udating, my result is: ", result);

                    break;

                case "/favoriten":
                    console.log("favoriten");

                    let benutzernameFavoriten: string = <string>url.query["benutzername"];
                    const user = await loginCollection.findOne({ "benutzername": benutzernameFavoriten });

                    const favoritenArray: Array<string> = user.favoriten;

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

                    let benutzernameaddFavoriten: string = <string>url.query["benutzername"];
                    let favoritenId: string = <string>url.query["favoriten_id"];

                    let userAddfavorit = await loginCollection.findOne({ "benutzername": benutzernameaddFavoriten });
                    console.log("old", userAddfavorit, favoritenId);
                    
                    let newFavoriten: Array<string> = [];
                    if (userAddfavorit.favoriten && Array.isArray(userAddfavorit.favoriten)) {
                        newFavoriten = userAddfavorit.favoriten;
                    }

                    if (!favoritenId) return;
                    if (newFavoriten.includes(favoritenId)) return;

                    newFavoriten.push(favoritenId);

                    let newuserAddfavorit = await loginCollection.updateOne({ "benutzername": benutzernameaddFavoriten }, { $set: { favoriten: newFavoriten } });
                    console.log(newuserAddfavorit);

                    if (newuserAddfavorit) {
                        _response.write(JSON.stringify(newuserAddfavorit));
                    } else {
                        _response.write("failure");
                    }
                    break;
                case "/removeFavoriten":
                    console.log("removeFavoriten");
    
                    let benutzernamedelFavoriten: string = <string>url.query["benutzername"];
                    let favoritenIdtoremove: string = <string>url.query["favoriten_id"];
    
                    let userRemovefavorit = await loginCollection.findOne({ "benutzername": benutzernamedelFavoriten });
                    console.log("old", userRemovefavorit, favoritenIdtoremove);
                        
                    let new_favoriten_remove: Array<string> = [];
                    if (userRemovefavorit.favoriten && Array.isArray(userRemovefavorit.favoriten)) {
                            new_favoriten_remove = userRemovefavorit.favoriten;
                        }
    
                    if (!favoritenIdtoremove) return;
                    if (!new_favoriten_remove.includes(favoritenIdtoremove)) return;
    
                    new_favoriten_remove = new_favoriten_remove.filter(e => e !== favoritenIdtoremove);
    
                    let newuserRemovefavorit = await loginCollection.updateOne({ "benutzername": benutzernamedelFavoriten }, { $set: { favoriten: new_favoriten_remove } });
                    console.log(newuserRemovefavorit);
    
                    if (newuserRemovefavorit) {
                            _response.write(JSON.stringify(newuserRemovefavorit));
                        } else {
                            _response.write("failure");
                        }
                    break;
            }
        }
        _response.end();
    }
}