import express from "express";
import os from "node:os";
import request from 'request';

const hostname = os.hostname();
const app = express();
const port = 3000;


app.get("/", async (req, res) => {
	//const urlParams = new URLSearchParams(req.protocol);
	//const param = urlParams.get('q');

	

	request.get(req.query.q, function(err, response, body) {
		res.send(response);
	});
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
