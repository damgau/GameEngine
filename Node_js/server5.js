var http = require('http');
var event = require('events').EventEmitter;

var server = http.createServer();
server.on("request", Request);
server.listen(3000);

function Request(req, res)
{
	// 			Nom event -> argument (= msg in Begin[fct])
	game.emit('newPlayer', 'Join by New Player!');
	res.writeHead(200);
	res.write('Hello World');
	res.end();
}

var game = new event();
game.on('newPlayer', Begin);
function Begin(msg)
{
	console.log(msg);
}