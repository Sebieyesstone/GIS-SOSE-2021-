import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace Aufgabe3_4 {

    let _url: string = "mongodb+srv://<Testuser>:<GIS404>@sebieyesstonegis-ist-ge.oawwp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

    let mongoCollection: Mongo.Collection;
    let port: number | string | undefined = Number(process.env.PORT);

    if (!port)
        port = 8100;  //Port wird auf 8100 gesetzt
    
    startServer(port);
    connectDatabase();

    function startServer(_port: number | string): void {
        let server: Http.Server = Http.createServer();
        server.addListener("request", handleRequest);
        server.listen(port);
    }
    async function connectDatabase(): Promise<void> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true};
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        mongoCollection = mongoClient.db("Test").collection("Students");
    }
    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {

        _response.setHeader("content-type", "text/html; charset=utf-8"); 
        _response.setHeader("Access-Control-Allow-Origin", "*"); 

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
      
            if (url.pathname == "/insert") {
                mongoCollection.insert(url.query);
        
            } 
            else if (url.pathname == "/pull") {
              let findings: Mongo.Cursor<string> = mongoCollection.find();
              let findingsArray: string [] = await findings.toArray();
              _response.write(JSON.stringify(findingsArray));
            }
            else {
                console.log("Error - Daten nicht vorhanden");
            }
        }
      
        _response.end();
    }
}