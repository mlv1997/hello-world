var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req, res){
    console.log('request was made: ' + req.url);
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    var myReadStream = fs.createReadStream('C:/Users/malav/Desktop/internet solutions/hello-world/cs615_nodejs' + '/readMe.txt',
    'utf8');
    myReadStream.pipe(res);
    });
server.listen(3000, '127.0.0.1');
console.log('Listening to port 3000...');