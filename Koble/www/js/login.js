function Login() {
    
    
};

Login.prototype = {
    
    init: function(){
        var self = this;

        $("#main").load("login.html", function(){ 
          
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
        
        var jsonData = $.getJSON( "data/users.json", function( data ) {
            
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


};