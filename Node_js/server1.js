var http = require('http');

var server = http.createServer();
server.on("request", Request);
server.listen(3000);

function Request(request, response)
{
	response.writeHead(200);
	response.write('Hello World');
	response.end();
}