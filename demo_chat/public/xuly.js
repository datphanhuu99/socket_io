 var socket = io("http://localhost:3000");

socket.on("server-send-thbai",function(){
    		alert("trung ten dk");
    	});
socket.on("server-send-dkthcong",function(data){
	$("#currentuser").html(data);
	$("#loginForm").hide(1000);
    $("#chatForm").show(500);
});

socket.on("server-send-mesage", function(data){
	$("#listmessenges").append("<div class='ms'>"+data.un+ ": "+data.nd +"</div>")
});


socket.on("server-send-list",function(data){
	$("#boxcontent").html("");
	data.forEach(function(i){
		$("#boxcontent").append("<div class='user'>"+i+"</div>");
	});
});

 $(document).ready(function(){
    $("#loginForm").show();
    $("#chatForm").hide();

    $("#Register").click(function(){
    	socket.emit("client-send-username",$("#pname").val());
    });

    $("#sendmessenger").click(function(){
    	socket.emit("client-send-messenge",$("#messenger").val());
    });
    $("#logout").click(function(){
    	socket.emit("client-send-logout");
    	$("#chatForm").hide(2);
    	$("#loginForm").show(1);
    });

});