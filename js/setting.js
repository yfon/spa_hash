SPA_RESOLVE_INIT = function(transition) { 
	
	  $("#main").load("../html/setting.html");
	  		var ip=window.localStorage.getItem("ip");
			var port=window.localStorage.getItem("port");
			setTimeout(function(){
			$("#ip").val(ip);
			$("#port").val(port);
			}, 100);
		var username=window.localStorage.getItem("username");
		if(username==null){
	  	 $("#login_out").html('login');
		 $("#login_out").attr('href','#/login');
		 $("#index_login_name").html("");
	   }else{
	  		 $("#index_login_name").html(username);
			 $("#login_out").attr('href','#/out')
			 $("#login_out").html('out');
	  }
      


}