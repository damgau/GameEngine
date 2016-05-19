var http = require('http');
var url = require('url');

var server = http.createServer();
server.on("request", Request);
server.listen(3000);

function Request(request, res)
{
	var path = url.parse(request.url).pathname;
	console.log(path);
	res.writeHead(200, {"Content-Type" : "text/plain"});
	res.write('Hello World');
	res.end();
}