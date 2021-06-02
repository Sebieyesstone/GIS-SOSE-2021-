import * as Http from "http";
import * as Url from "url"; // zum bauen eines Servers und Sternchen "*" sämtliche Funktionen werden importiert

export namespace A3_2Server {

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

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {  

        console.log("I hear voices!"); //Konsole gibt I hear voices aus
        console.log(_request.url);

        _response.setHeader("content-type", "text/html; charset=utf-8"); // setzt den Header des http.ServerAntwort auf: (HTML mit Zeichencode UTF-8)
        _response.setHeader("Access-Control-Allow-Origin", "*"); //Erlaubnis des Browser Codes für eine Anfrage um Ressourcen zu erreichen 

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true); // verwandelt Query in ein assoziatives Array
            let pathname: string = <string>url.pathname;
            if (pathname == "/json") { //wenn /json (in url) empfangen wird, wird url.query in String umgeändert, in der Konsole ist die Ausgabe und wird der Antwort ausgegeben
                let jsonString: string = JSON.stringify(url.query);  
                console.log(jsonString);
                _response.write(jsonString);
            } //wenn /html (in url) empfangen wird, werden Schlüssel-Werte-Paare als Antwort ausgegeben
        else if (pathname == "/html") {
            for (let key in url.query) {
                _response.write (key + ":" + url.query[key] + "<br/>");
                       
            }
        }
    }
        _response.end(); //Response wird beendet
    }
}