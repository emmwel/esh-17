function Login() {
    
    
};

Login.prototype = {
    init: function(){
        var self = this;

        $("#main").load("login.html", function(){ 
           // window.header.set('Stäng', "." ,'IACT WMS v' + window.localStorage.getItem("version"));
            self.initBtns();
            $("#main").trigger('create');				
        });
        
    },
    
    initBtns: function(){
		var self = this;
		
		
		$("#loginBtn").on("click",function(){ 
			
            self.loginUser();
			
        });
			
       
    },
    
    loginUser: function(){
      
        var self = this;
        var username = $("#username").val();
        var password = $("#password").val();
        var userFound = false;
        var correctPassword = false;
        
        var jsonData = $.getJSON( "users.json", function( data ) {
            
           // console.log( "success" );
            
            
            $.each( data, function( key, val ) {
                //console.log( "key: " + key + " val: " + val["username"]  ); //  items.push( "<li id='" + key + "'>" + val + "</li>" );
                
                if( val["username"] ==  username )
                {
                    userFound = true;
                    
                    if( val["password"] ==  password  )
                    {
                        correctPassword = true;
                        window.state = new Menu();
                        window.state.init();
                        //alert("Login success!");
                        
                    } 
                }  
                
            });
            
            if( userFound == false ){
                alert("There is no user with this username");
            } else if ( correctPassword == false ){
                alert("Wrong password");
            }

         })
    },
    
    /*
    loginUser: function(){
        var self = this;
        var username = $("#username").val();
        
        // }
        var password = $("#password").val();
        
        if (password == "") {
            $("label#password_error").show();
            $("input#password").focus();
            return false;
        }
		
		username = username.toUpperCase();
		
    
		window.localStorage.setItem("username", username);
		window.localStorage.setItem("password", password);
		
        document.cookie="username="+username;
        document.cookie="password="+password;
		
		$.ajax({
            type: 'GET',
            url: window.ajaxServer + 'LogonUser',
            cache: 'true',
            data: {			
                'username': window.localStorage.getItem("username"),
                'password':window.localStorage.getItem("password"),
                'environment':window.localStorage.getItem("environment")
            },       
			dataType: "jsonp",
            beforeSend: function(){$.mobile.loading('show','a');},
            error: function(jsonStr, d, a){
                $.mobile.loading('hide','a');
                self.loginUser_cb(jsonStr);
            },
            success: function(jsonStr){
				
                $.mobile.loading('hide','a');
                self.loginUser_cb(jsonStr);
            }
        }); 
		
    }, 

    loginUser_cb: function (jsonStr){
        var jsonObj = '';
        var response = jsonStr;

        if(response == 'True')
        {   
			
			window.state = new Menu();
            window.state.init();
           
        }
        else
        {
            // alert(response);
			
			$.jAlert({ 
			'title': 'Fel',
			'content': response,
			'theme': 'red'
			}); 
				
            return;
        }

        return;
    },
    */
    
    
    back: function(){
		navigator.app.exitApp();
    },
    
    sneaky: function(add){
        this.entered_code += add;
        
        if(this.entered_code === this.hidden_code){
            
            $("[sneaky=true]").each(function() {
                var self = this;
                $(this).css("background-color","#0f0");

                $(this).fadeOut(200).fadeIn(200, function(){
                    
                    $(self).css("background-color","transparent");

                    var username = "";// username for hidden logon
                    var password = "";// password -""-
                    var environment = "D";
					window.ajaxServer = "http://10.46.200.103/ABB_Mobility_WebService_Dev_HTML/PackAndTrace.asmx/";
					
					window.localStorage.setItem("username", username);
					window.localStorage.setItem("password", password);
					window.localStorage.setItem("password", environment);
		
                    document.cookie="username="+username;
                    document.cookie="password="+password;
                    document.cookie="environment="+environment;

                    window.state = new Menu();
                    window.state.init();

                    this.entered_code = '';
                    return;
                });
            });
            
            return;
        }
        
        if(this.entered_code.length >= this.hidden_code.length){
            this.entered_code = '';
            
            $("[sneaky=true]").each(function() {
                var self = this;

                $(this).css("background-color","#f00");
                
                $(this).fadeOut(200).fadeIn(200, function(){
                    $(self).css("background-color","transparent");
                });
            });
            
        }
    },
	
	  scan: function(barcode, productId, productRev, serialNumber){
        var self = this;	
		
		//var snd = new Audio("beep.mp3");
		//snd.play();
    },
};