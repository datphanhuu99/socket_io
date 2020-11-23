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

	socket.on("client-send-username", function(data){
		
		if(manguser.indexOf(data)>=0){
			//fall
			socket.emit("server-send-thbai");
		}else{
			console.log(data);
			manguser.push(data);
			socket.username= data;

			socket.emit("server-send-dkthcong", data);
			io.sockets.emit("server-send-list", manguser);
		}
	});
	socket.on("client-send-logout",function(){
		manguser.splice( manguser.indexOf(socket.username),1);
		socket.broadcast.emit("server-send-list",manguser)
	});
	socket.on("disconnect",function(){
		// console.log("logout");
		manguser.splice( manguser.indexOf(socket.username),1);
		socket.broadcast.emit("server-send-list",manguser)
	});



	socket.on("client-send-messenge",function(data){
		io.sockets.emit("server-send-mesage",{un:socket.username, nd:data})

	});

})

//cau hinh ejs
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/",function(req,res){
	res.render("trangchu");
});