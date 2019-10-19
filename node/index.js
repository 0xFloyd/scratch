let http = require('http');
let dt = require('./date');
let url = require('url');       //  url module 
let fs = require('fs');         //  file system module 

http.createServer((req, res) => {
    fs.readFile('demofile1.html', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);     //  http.createServer() has a req argument that represents the request from the client, as an object (http.IncomingMessage object)
        res.end();              //  This object has a property called "url" which holds the part of the url that comes after the domain name
    });
}).listen(8080);

/*
let q = url.parse(req.url, true) / MediaQueryList;
let txt = q.year + " " + q.month;
res.end(txt);

*/

//  fs.readFile() method is used to read files on your computer.