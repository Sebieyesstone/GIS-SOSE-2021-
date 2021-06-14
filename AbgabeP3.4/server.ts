import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace Aufgabe3_4 {

    let collection: Mongo.Collection;
    let databaseUrl: string = "mongodb+srv://Testuser:<GIS404>@sebieyesstonegis-ist-ge.oawwp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    connectToDatabase(databaseUrl);

    console.log("Starting Server");

    let port: number = Number(process.env.PORT);

    if (!port)
        port = 8100;  //Port wird auf 8100 gesetzt

    let server: Http.Server = Http.createServer(); //Server wird erstellt

    server.addListener("request", handleRequest);  //Funktion handleRequest wird aufgerufen

    server.addListener("listening", handleListen); //HandleListen Funktion wird aufgerufen

    server.listen(port);

    async function connectToDatabase(url: string): Promise<void> {

        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true};
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(url, options);
        await mongoClient.connect();
        
        collection = mongoClient.db("Test").collection("Students");
    }
    function handleListen(): void {
        console.log("Listening");
    }
    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        _response.setHeader("content-type", "text/html; charset=utf-8"); 
        _response.setHeader("Access-Control-Allow-Origin", "*"); 

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            let pathname: string | null = url.pathname;
      
            if (pathname == "/abschicken") {
      
              collection.insertOne(url.query);
      
            } else if (pathname == "/erhalten") {
              _response.write(JSON.stringify(await collection.find().toArray()));
            }
        }
      
        _response.end();
    }
}