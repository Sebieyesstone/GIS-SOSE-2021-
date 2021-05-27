import * as Http from "http";
export namespace A3_1Server {

    console.log("Starting server");  //Konsole gibt Starting server aus

    let port: number = Number(process.env.PORT);

    if (!port)
        port = 8100;  //Port wird auf 8100 gesetzt


    let server: Http.Server = Http.createServer(); //Server wird erstellt

    server.addListener("request", handleRequest);  //Funktion handleRequest wird aufgerufen

    server.addListener("listening", handleListen); //HandleListen Funktion wird aufgerufen

    server.listen(port); //Server hört/reagiert auf port und startet


    function handleListen(): void { //Konsole gibt Listening aus wenn Funktion aufgerufen wird
        console.log("Listening");
    }


    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void { //Konsole gibt I hear voices aus 

        console.log("I hear voices!");
        console.log(_request.url);

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");


        _response.write(_request.url); //Url wird ausgegeben


        _response.end(); //Response wird beendet
    
    }
}
