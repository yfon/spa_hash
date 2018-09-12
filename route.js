(function() {//立即函数
	var util = {
		//获取路由的路径和详细参数
		getParamsUrl:function(){
			var hashDeatail = location.hash.split("?"),
				hashName = hashDeatail[0].split("#")[1],//address
				params = hashDeatail[1] ? hashDeatail[1].split("&") : [],//params
				query = {};
			for(var i = 0;i<params.length ; i++){
				var item = params[i].split("=");
				query[item[0]] = item[1]
			}
			return 	{
				path:hashName,
				query:query
			}
		}
	}
	function spaRouters(){
		this.routers = {};//save all routers
	}
	spaRouters.prototype={
		init:function(){
			var self = this;
			//load router
			window.addEventListener('load',function(){
				self.urlChange()
			})
			//monitor hash changing
			window.addEventListener('hashchange',function(){
				self.urlChange()
			})
			//异步引入js通过回调传递参数
			window.SPA_RESOLVE_INIT = null;
		},
		//execute callback
		refresh:function(currentHash){
			var self = this;
			if(self.beforeFun){
				self.beforeFun({
					to:{
						path:currentHash.path,
						query:currentHash.query
					},
					next:function(){
						self.routers[currentHash.path].callback.call(self,currentHash)
					}
				})
			}else{
				self.routers[currentHash.path].callback.call(self,currentHash)
			}
		},
		//
		urlChange:function(){
			var currentHash = util.getParamsUrl();
			if(this.routers[currentHash.path]){
				this.refresh(currentHash)
			}else{
				//if don't exit in router,will redirect to index
				location.hash = '/index'
			}
		},
		//save callback
		map:function(path,callback){
			path = path.replace(/\s*/g,"");//remove blank
			if(callback && Object.prototype.toString.call(callback) === '[object Function]' ){
				this.routers[path] ={
					callback:callback,
					fn:null //save hash obj
				}
			}
		},
		
		//dyna to create script
		asyncFun:function(file,transition){
		   var self = this;
		   if(self.routers[transition.path].fn){
		   		
		   		self.routers[transition.path].fn(transition)
		   }else{
			   var _body= document.getElementsByTagName('body')[0];
	           var scriptEle= document.createElement('script');
	           scriptEle.type= 'text/javascript';
	           scriptEle.src= file;
	           scriptEle.async = true;
	           SPA_RESOLVE_INIT = null;
	           scriptEle.onload= function(){
	               self.routers[transition.path].fn = SPA_RESOLVE_INIT;
	               self.routers[transition.path].fn(transition)
	           }
	           _body.appendChild(scriptEle);
		   }
		},
		//header changing  style
		addAcitve:function(params){
			$("#navbarCollapse li").removeClass('active')
			$(params).addClass('active');
		},
		getUserName:function(username){
			window.localStorage.setItem("username",$("#username").val());
		},
		//user localstorage to save value
		set:function(){
			var ip=$("#ip").val();
			var port=$("#port").val();
			console.log(ip+port);
			window.localStorage.setItem("ip",ip);
			window.localStorage.setItem("port",port);

		}/*,
		create:function(){
			 var login_form= document.getElementById("login_form");
	           var h3= document.createElement('h3');
	           h3.id= 'index_login_name';
	           h3.style="color:red";
	           login_form.appendChild(h3);
	           console.log(h3)
	           var a= document.createElement('a');
	           a.id= 'login_out';
	           a.href="#/login";
	           login_form.appendChild(a);
		}*/
	}
	//put in window same as jquery
	window.spaRouters = new spaRouters();
})()