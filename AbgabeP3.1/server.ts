/*import * as Http from "http";

export namespace A08Server {

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
        


        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");


        _response.write(_request.url); //Url wird ausgegeben


        _response.end(); //Response wird beendet
    
    }
}
*/
import * as Http from "http";
import * as Url from "url";

export namespace A08Server {
  console.log("Starting server");
  let port: number = Number(process.env.PORT);
  if (!port)
    port = 8100;

  let server: Http.Server = Http.createServer();
  server.addListener("request", handleRequest);
  server.addListener("listening", handleListen);
  server.listen(port);

  function handleListen(): void {
    console.log("Listening");
  }

  function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
    console.log("I hear voices!");

    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");


    if (_request.url) {
      let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
      let path: string = <string>url.pathname;

      if (path == "/json") {
        let jsonString: string = JSON.stringify(url.query);
        _response.write(jsonString);

        console.log(jsonString);
      }

      else if (path == "/html") {

        for (let key in url.query) {
          _response.write(key + ":" + url.query[key] + "<br/>");

        }
      }
    }
    _response.end();
  }
}