import express from "express";
import os from "node:os";
import request from 'request';

var http = require('http');

app.get("/", async (client_req, client_res) => {
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
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
