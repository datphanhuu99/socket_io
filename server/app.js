var express = require("express");
var app = express();
var server = require("http").createServer(app);
server.listen(3000);

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended : false});


app.post("/hello",urlencodedParser, function(req, res){
	var u = req.body.username;
	var q = req.body.password;
	res.send("username: " + u + " password: "+ p);
});
app.get("/hello", function(req, res){
	res.send("<font color = red> HELLO!!!!!!</font>");

});
