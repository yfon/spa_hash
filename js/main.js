SPA_RESOLVE_INIT = function(transition) { 
	
	  $("#main").load("../html/main.html");
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