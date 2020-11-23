var http = require("http");
var fs = require("fs");

http.createServer(function(reg,res){
	res.writeHead(200,{"Content-Type": "application/json"});
	var obj = {
		ho : "phan",
		ten: "dat",
		ns : 1999
	};
res.end(JSON.stringify(obj));
}).listen(8888);