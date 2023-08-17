const firstHttp = require("http");

const firstServer = firstHttp.createserver(
  function( firstRequest, firstResponse){
    console.log(firstRequest.url)

    const firstText;
    if (firstRequest.url === "/hey"){
      firstText = "hello human!";
    }else {
      firstText = "you dont even go here!";
    }
    
    firstResponse.writeHead(200, { "Content-type": "text/css" });
    firstResponse.end("Hey Whoever is on here!");
  }
);

firstServer.listen(8080, "0.0.0.0")
console.log("server is starting up");