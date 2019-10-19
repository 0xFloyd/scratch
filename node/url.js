var url = require('url');
var address = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(address, true);

var http = require('http');
var url = require('url');
var fs = require('fs');
var events = require('events');
var formidable = require('formidable');     //  There is a very good module for working with file uploads, called "Formidable".


console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2017&month=february'
var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
console.log(qdata.month); //returns 'february'


http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;                //      serves the file that's requested after the backslahs (winter.html or summer.html)
    fs.readFile(filename, function (err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end("404 Not Found");
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
}).listen(8080); 

/*
Node.js has a built -in module, called "Events", where you can create -, fire -, and listen for- your own events.
To include the built -in Events module use the require() method.In addition, all event properties and methods are an instance of an 
EventEmitter object.To be able to access these properties and methods, create an EventEmitter object:
*/
var eventEmitter = new events.EventEmitter(); 
//Create an event handler:
let myEventHandler = () => {
    console.log('I hear a scream!');
}

//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('scream');