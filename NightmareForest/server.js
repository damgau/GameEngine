var express = require('express');
var app = express();
var port = 8080;
var serverUrl = app.get('port');//"10.10.7.53";


var http = require("http");
var path = require("path"); 
var fs = require("fs");

console.log("Starting web server at " + serverUrl + ":" + port);


var server = http.createServer( function(req, res) 
{

	var now = new Date();

	var filename = req.url || "index.html";
	var ext = path.extname(filename);
	var localPath = __dirname;
	var validExtensions = {
		".html" : "text/html",			
		".js": "application/javascript", 
		".css": "text/css",
		".txt": "text/plain",
		".jpg": "image/jpeg",
		".gif": "image/gif",
		".png": "image/png",
		".ico": "icon"
	};
	//console.log("localPath : " + localPath);
	var isValidExt = validExtensions[ext];

	if (isValidExt) {
		localPath += filename;
		fs.exists(localPath, function(exists) {
			if(exists) {
				//console.log("Serving file: " + localPath);
				getFile(localPath, res, ext);
			} else {
				console.log("File not found: " + localPath);
				res.writeHead(404);
				res.end();
			}
		});

	} else {
		console.log("Invalid file extension detected: " + ext);
	}

}).listen(port, serverUrl);


var io = require('socket.io')(server);
io.on('connection', function(socket){
	console.log("socket connected");
	//console.log(io);
	socket.on('orientation', function(data)
	{
		//console.log(data);
		socket.broadcast.emit('moving', data);
	});

	socket.on('GameOver', function(data)
	{
		socket.broadcast.emit('reset', data);
	});
});

function getFile(localPath, res, mimeType) {
	
	fs.readFile(localPath, function(err, contents) {
		if(!err) {
			res.setHeader("Content-Length", contents.length);
			res.setHeader("Content-Type", mimeType);
			res.statusCode = 200;
			res.end(contents);
		} else {
			res.writeHead(500);
			res.end();
		}
	});
}