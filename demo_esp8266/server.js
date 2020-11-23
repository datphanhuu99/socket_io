var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine","ejs");
app.set("views","./views");

var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(3000);

io.on("connection", function(socket){
	console.log("co nguoi ket noi"+ socket.id)
	socket.on("ren",function(){
		res.render("https://luyentap.000webhostapp.com/trang1/blinkled/")
		console.log("chuyen trang")

	});
});
app.get("/",function(req,res)
{
	res.render("trangchu");
});