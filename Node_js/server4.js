var http = require('http');
var url = require('url');
var querystring = require('querystring');

var server = http.createServer();
server.on("request", Request);
server.listen(3000);

function Request(req, res)
{
	var parameters = querystring.parse(url.parse(req.url).query);

	res.writeHead(200, {"Content-Type" : "text/plain"});

	for (var p in parameters) {
		res.write("parameters : " + p + " successfully parsed \n");
		console.log("parameters : " + p + " successfully parsed");
	}
	res.end();
}