import express from "express";
import os from "node:os";

const hostname = os.hostname();
const app = express();
const port = 3000;

app.get("/", async (req, res) => {
	res.send(`Hello from ${hostname}!`);
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
