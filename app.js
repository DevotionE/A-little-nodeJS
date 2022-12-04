const http = require("http");

const port = 8080;

http
 .createServer((req, res) => {
    res.writeHead(200, {"content-type": "plain/text"});
    res.end("hello world !");
 })
 .listen(port);

 console.log(
    `server listening running on port ${port} and url http://127.0.0.1:8080`
 );