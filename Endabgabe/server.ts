//mongodb+srv://Testuser:GIS404@sebieyesstonegis-ist-ge.oawwp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace EndabgabeServer {

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
    //let mongoUrl: string = "mongodb+srv://Testuser:GIS404@sebieyesstonegis-ist-ge.oawwp.mongodb.net";
    let mongoUrl: string = "mongodb://localhost:27017";

    let port: number = Number(process.env.PORT);
    if (!port)
        //port = 8100;
        port = 5500;

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
        console.log("Verbindung zu Database", loginCollection != undefined);
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

            switch (url.pathname) {

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
                    alleBenutzer = await loginCollection.find().toArray();
                    let benutzernameReg: string = <string>url.query["benutzername"];
                    let emailReg: string = <string>url.query["email"];
                    let passwortReg: string = <string>url.query["passwort"];

                    let neueReg: Reg = { benutzername: benutzernameReg, email: emailReg, passwort: passwortReg };

                    let vergebeneReg: boolean = false;

                    for (let i: number = 0; i < alleBenutzer.length; i++) {
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
}