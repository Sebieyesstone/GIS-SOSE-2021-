//mongodb+srv://Testuser:GIS404@sebieyesstonegis-ist-ge.oawwp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace Aufgabe3_4 {

    let mongoCollection: Mongo.Collection;
    //let mongoUrl: string = "mongodb+srv://Testuser:GIS404@sebieyesstonegis-ist-ge.oawwp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    let mongoUrl: string = "mongodb+srv://Testuser:GIS404@sebieyesstonegis-ist-ge.oawwp.mongodb.net";
    //let mongoUrl: string = "mongodb://localhost:27017";

    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8100;  //Port wird auf 8100 gesetzt
    
    console.log("Starting Server");

    
    let server: Http.Server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    
    connectToDatabase(mongoUrl);
    
    async function connectToDatabase(_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true};

        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();

        mongoCollection = mongoClient.db("Test").collection("Students");
        console.log("Verbindung zu Database", mongoCollection != undefined);
    }
    
    function handleListen(): void {
        console.log("Listening");
    }

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        
        console.log("I hear voices!"); //Konsole gibt I hear voices aus

        _response.setHeader("content-type", "text/html; charset=utf-8"); 
        _response.setHeader("Access-Control-Allow-Origin", "*"); 

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            let pathname: String | null = url.pathname;
      
            if (pathname == "/abschicken" ) {
                mongoCollection.insertOne(url.query);
                console.log("bitte funktionier");
                connectToDatabase(mongoUrl);

            }
            if (pathname == "/erhalten") {
                _response.write(JSON.stringify(await(mongoCollection.find().toArray())));
                

            } else if (pathname == "/entfernen") {
                mongoCollection.deleteOne({ "name": url.query ["name"], "nachname": url.query ["nachname"], "matrikelnummer": url.query ["matrikelnummer"]});
                connectToDatabase(mongoUrl);
            }

        }
        _response.end();
    }
}