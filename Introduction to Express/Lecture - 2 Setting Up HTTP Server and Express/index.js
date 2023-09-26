const http = require("http"); //requied the http module

const PORT = 3000;

//using the create server function we can actully create a basic http server using http module
//this function return server Object, and take callback as argument
//this function created a server object but didn't start the server
const server = http.createServer(function listener(request, response) {
  //this callback is a kind of listener function that is going to collect every http request that we will make to our server

  //request -> we will be able to details of incoming http request -> object
  //response -> we will be able to configure what response we need to send for an incoming http request -> object

  //this callback is a kind of listener fucntion that is going to collect
  //every http request that we will make to our server

  if (request.url === "/home") {
    //if we make a request on /home this is block will be executed
    response.end("Welcome to Home");
  }

  console.log("Request received");
});

server.listen(PORT, function exec() {
  //once we successfully bootup the server on the given port this callback will be executed

  console.log("Server is up and running on PORT : ", PORT);
});
