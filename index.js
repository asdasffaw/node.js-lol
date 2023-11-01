const request = require("request");
const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

request('google.com', function (error, response, html) {
    if (!error && response.statusCode == 200) {
        var $ = cheerio.load(html);
        // Get text 
        console.log("------- with request module -------")
        console.log($.text());
        // Get HTML 
        //console.log($.html());
    }
});
