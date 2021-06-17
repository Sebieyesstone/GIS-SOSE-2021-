import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace Aufgabe3_4 {

    let mongoCollection: Mongo.Collection;
    let mongoUrl: string = "mongodb+srv://Testuser:GIS404@sebieyesstonegis-ist-ge.oawwp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    //let mongoUrl: string = "mongodb://localhost:27017";

    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8100;  //Port wird auf 8100 gesetzt
    
    console.log("Starting Server");

    function startServer(): void {
        let server: Http.Server = Http.createServer();
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        server.listen(port);
    }
    
    startServer();
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

        _response.setHeader("content-type", "text/html; charset=utf-8"); 
        _response.setHeader("Access-Control-Allow-Origin", "*"); 

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
      
            if (url.pathname == "/abschicken" ) {
                mongoCollection.insertOne(url.query);
            }
            if (url.pathname == "/erhalten") {
                _response.write(JSON.stringify(await(mongoCollection.find().toArray())));
            }
            if (url.pathname == "/entfernen") {
                mongoCollection.deleteOne({ "vorname": url.query ["vorname"]});
            }

        }
        _response.end();
    }
}