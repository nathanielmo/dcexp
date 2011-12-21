//var port = (process.env.VMC_APP_PORT || 3000);
//var host = (process.env.VCAP_APP_HOST || 'localhost');
var port = (process.env.VMC_APP_PORT || process.env.PORT);
var host = (process.env.VCAP_APP_HOST || '0.0.0.0');
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Worrrld\n');
}).listen(port, host);