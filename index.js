import express from "express";
import os from "node:os";
import * as request from 'request';
import * as cheerio from 'cheerio';

const hostname = os.hostname();
const app = express();
const port = 3000;




app.get("/", async (req, res) => {
	request('google.com', function (error, response, html) {
    if (!error && response.statusCode == 200) {
        var $ = cheerio.load(html);
        // Get text 
        res.send($.text());
        // Get HTML 
        //console.log($.html());
    }
});
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
