var express = require("express");
var app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(3000);

app.use(express.static("public"));

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended : false});

//cau hinh ejs
app.set("view engine", "ejs");
app.set("views", "./views");


var mang=[];
var i=0;
io.on("connection",function(socket){
	console.log("co nguoi ket noi: "+ socket.id);
	mang.push(socket.id);
	console.log(mang.length);

	socket.on("client-send-data",function(data){
		console.log(socket.id+ " da gui: " +data);

		io.sockets.emit("server-send-data", data);
	});

	socket.on("disconnect",function(){
		console.log(socket.id + " ngat ket noi")
	});

	});

// app.post("/hello", urlencodedParser, function(req, res){
// 	var u = req.body.username;

// 	var q = req.body.password;
// 	res.send("username: " + u + " password: "+ q);
	
// });
app.get("/", function(req, res){
	res.render("helloworld")

});
