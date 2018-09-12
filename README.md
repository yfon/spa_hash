## create spa by hash ##

**github：** 

##notice##

**running the html ,protocol is file ,so please use firefox and others excpt google**

**compatible ie and mobile,pc**

****

## basic function##

1、index.html inclues three module:main>setting>login 



## methods ##



 1.defined a  innediate function and  a global obj 



 2.defined obj to save hash path and callback function

	map:function(path,callback){

			path = path.replace(/\s*/g,"");//remove blank

			if(callback && Object.prototype.toString.call(callback) === '[object Function]' ){//IsOrNotFunction

				this.routers[path] ={

					callback:callback,

					fn:null //save hash obj

				}

			}

		}



 3. change pages：use the hashChange to addEventListener the changing of hash



	window.addEventListener('hashchange',function(){

        this.urlChange()//this function is used to getting path params

	})

   



 4. dyna create script



    var _body= document.getElementsByTagName('body')[0],

	scriptEle= document.createElement('script'); 

	scriptEle.type= 'text/javascript'; 

	scriptEle.src= xxx.js; 

	scriptEle.async = true;

	_body.appendChild(scriptEle);

		

 5.about setting page:adopt the localStorage to save data

	

	window.localStorage.setItem("ip",ip);

	window.localStorage.setItem("port",port);

	var ip=window.localStorage.getItem("ip");

			var port=window.localStorage.getItem("port");

			setTimeout(function(){

			$("#ip").val(ip);

			$("#port").val(port);

			}, 100);

    

 6.header change

	

	addAcitve:function(params){

			$("#navbarCollapse li").removeClass('active')

			$(params).addClass('active');

		}

		

		

 7.login and out page

 

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

	  

	  

	   window.localStorage.removeItem("username");

