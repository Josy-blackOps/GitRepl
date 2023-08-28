let firstHttp = require("http");

let firstServer = firstHttp.createServer(
  function(firstRequest, firstResponse) {
    console.log(firstRequest.url)

    let firstText;
    if (firstRequest.url === "/hey") {
      firstText = "hello human!";
    } else {
      firstText = "you dont even go here!";
    }

    firstResponse.writeHead(200, { "Content-type": "text/css" });
    firstResponse.end("Hey Whoever is on here!");
  }
);

firstServer.listen(8080, "0.0.0.0")
console.log("server is starting up");