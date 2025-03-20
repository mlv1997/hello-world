var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req, res){
console.log('request was made: ' + req.url);
res.writeHead(200, {'Content-Type' : 'application/json'});
myObject = {
    name: 'Paul',
    job: 'student',
    age: 25
    };
    res.end(JSON.stringify(myObject));
});
server.listen(3000, '127.0.0.1');
console.log('Listening to port 3000...');