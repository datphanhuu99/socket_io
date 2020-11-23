 var socket = io("http://localhost:3000");

socket.on("server-send-bat", function(){
	$("#batled").show();
    $("#tatled").hide();
});

socket.on("server-send-tat", function(){
    $("#tatled").show();
    $("#batled").hide();
});

 $(document).ready(function(){
    $("#batled").hide();
    $("#tatled").hide();
    $("#bat").click(function(){
    	socket.emit("client-send-bat");
    });

    $("#tat").click(function(){
        socket.emit("client-send-tat");
    });
});