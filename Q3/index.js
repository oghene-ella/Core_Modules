// import the http module
const http = require("http");

// create the host name and port number
const HOSTNAME = "localhost";
const PORT = 3030;

// create a function that handles requests and response
function requestHandler(request, response) {
    console.log("the request: ", request);
    return response.end("Hello World!!");
}

// create a server
const server = http.createServer(requestHandler);

// add listener
server.listen(PORT, HOSTNAME, () => {
  console.log(
    `Server started successfully at localhost: https://${HOSTNAME}:${PORT}`
  );
});
