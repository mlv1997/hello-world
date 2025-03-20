var express=require('express')
var app = express();
app.get('/', function(req, res){
    res.send('This is the homepage.');
   });
app.get('/contact', function(req, res){
    res.send('This is the contact page.');
   });

app.get('/profile/24251612', function(req, res){
    res.send('You requested to see profile with the id of ' + 
  req.params.id);
   });
 app.listen(3000);