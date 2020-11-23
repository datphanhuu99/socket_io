var express = require("express");
var app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(3000);
app.use(express.static("public"));
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended : false});

var manguser=[];
 
io.on("connection",function(socket){
	console.log("socket id : "+ socket.id)

	socket.on("client-send-bat",function(){
		io.sockets.emit("server-send-bat")
		console.log("client bat")
	});
	socket.on("client-send-tat",function(){
		io.sockets.emit("server-send-tat")
		console.log("client tat")
	});
	socket.on("disconnect",function(){
		console.log("socket id : "+ socket.id+" disconnect")
	});

})

//cau hinh ejs
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/",function(req,res){
	res.render("trangchu");
});