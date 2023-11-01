import express from "express";
import os from "node:os";

const hostname = os.hostname();
const app = express();
const port = 3000;
const http = require('http')

http.createServer(onRequest).listen(3000);

function onRequest(client_req, client_res) {
  console.log('serve: ' + client_req.url);

  var options = {
    hostname: 'www.google.com',
    port: 80,
    path: client_req.url,
    method: client_req.method,
    headers: client_req.headers
  };

  var proxy = http.request(options, function (res) {
    client_res.writeHead(res.statusCode, res.headers)
    res.pipe(client_res, {
      end: true
    });
  });

  client_req.pipe(proxy, {
    end: true
  });
}

//app.get("/", async (req, res) => {
//	res.send(`Hello from ${hostname}!`);
//});

//app.listen(port, () => {
//	console.log(`Example app listening on port ${port}`);
//});
