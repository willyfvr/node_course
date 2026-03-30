var http = require("http");

var manager = function(request, response){
  console.log("We get a new request");
  response.end("Hello world!");
};

var server = http.createServer(manager);

server.listen(8080);
