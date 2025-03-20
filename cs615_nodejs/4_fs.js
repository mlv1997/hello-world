var fs = require('fs');
fs.readFile('readMe.txt', 'utf8', function(err, data){
    console.log('File read!');
    fs.writeFile('writeMe.txt', data, function(err, data){
        console.log('File written!');
        });
});
console.log('This is some code after the read-write code');