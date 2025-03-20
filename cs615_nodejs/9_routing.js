var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req, res){
console.log('Request was made: ' + req.url);
if (req.url === '/home' || req.url === '/'){
    res.writeHead(200, {'Content-Type' : 'text/html'});
    fs.createReadStream('C:/Users/malav/Desktop/internet solutions/hello-world/cs615_nodejs' + '/index.html',
    'utf8').pipe(res);
    } else if (req.url === '/contact'){
    res.writeHead(200, {'Content-Type' : 'text/html'});
    fs.createReadStream('C:/Users/malav/Desktop/internet solutions/hello-world/cs615_nodejs' + '/contact.html').pipe(res);
    }
    else if (req.url === '/api'){
    res.writeHead(200, {'Content-Type' : 'application/json'});
    var data = {name: 'Charlie', job: 'lecturer', age: 29};
    res.end(JSON.stringify(data));
    } else {
        res.writeHead(404, {'Content-Type' : 'text/html'});
        fs.createReadStream('C:/Users/malav/Desktop/internet solutions/hello-world/cs615_nodejs' + '/404.html').pipe(res);
        }
});
server.listen(3000, '127.0.0.1');
console.log('Listening to port 3000...');