spaRouters.map('/index',function(transition){

     spaRouters.asyncFun('../js/index.js',transition);
     spaRouters.addAcitve(index_active);
     
     

    })


    spaRouters.map('/login',function(transition){   

    spaRouters.asyncFun('../js/login.js',transition);


    })
      spaRouters.map('/out',function(transition){   
      location.hash = '/main';
      spaRouters.asyncFun('../js/out.js',transition);


    })

     spaRouters.map('/loginAction',function(transition){
     
      /*spaRouters.asyncFun('../js/main.js',transition);*/
         location.hash = '/main';
         spaRouters.getUserName('username');

    })

    spaRouters.map('/main',function(transition){

      spaRouters.asyncFun('../js/main.js',transition);
      spaRouters.addAcitve(main_active);
       

    })

    spaRouters.map('/setting',function(transition){
      
       spaRouters.asyncFun('../js/setting.js',transition);
       spaRouters.addAcitve(setting_active);

    })
      spaRouters.map('/set',function(transition){
      spaRouters.set();
    })
spaRouters.init()