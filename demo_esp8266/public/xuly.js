var socket = io("http://localhost:3000");
$("#btn").click(function(){
	socket.emit("ren");
});