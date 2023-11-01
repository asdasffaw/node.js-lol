import express from "express";
import os from "node:os";
import * as request from 'request';

const hostname = os.hostname();
const app = express();
const port = 3000;




app.get("/", async (req, res) => {
	request.get('http://somesite.com/template1/user3/index.html', function(err, response, body) {
		res.send(response);
	});
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
