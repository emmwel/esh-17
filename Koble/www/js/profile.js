function Profile(){
    
    this.user = null;
}

Profile.prototype = {
	
    init: function(){
        var self = this;
        $("#main").load("profile.html", function(){
            window.state = self;
            
             window.header.set("Tillbaka", "My tags", true, true);
    
            self.initSettings();
            $("#main").trigger('create');
			
            self.getProfile();
            
        });
		
    },
    
    
    initBtns: function(){
		var self = this;       

        $("#settingsButton").on("click",function(){
			 
             window.state = new Settings();
             window.state.init();
            
        }); 

		
    },
    
    initSettings: function() {
        
        var items = '<input type="button" id="settingsButton" value="Settings" />';
        $("#settingsBtnDiv").html(items);
   
        
    },
    
    /*
    goToSettings: function() {
        
         window.state = new Settings();
         window.state.init();
        
    },*/
    
    getProfile: function() {
        var self = this;
        
         var jsonData = $.getJSON( "http://10.0.0.17/users.json", function( data ) { 
            
            console.log(data);
            //self.createHTML(data);
             
            items = self.createHTML(data);
            window.localStorage.setItem("settings", true); 
             
            //console.log("itemss: " + items);
            
            $("#profileContent").html(items);
            $("#profileContent").trigger('create');
        
        })
        
    },
    
    createHTML: function(data) {
        
        var self = this;
        var items = "";
        var username = window.localStorage.getItem("username");
        
      
         // save all user information in self.user (this.user)
         $.each( data, function( key, val ) {
            
             //console.log( "key: " + key + " val: " + val["fullname"]  ); //  items.push( "<li id='" + key + "'>" + val + "</li>" );
             if( val["username"] == username){
                 
                 self.user = data[key];
                 return;
                 
             }

        }); 
        
        items += '<img src="img/'+ self.user.username +'.jpg" class="userImg center"/>';
        items += '<div>';
        items += '<h2> '+ self.user.fullname +', '+ self.user.age +' </h2>'; // CSS here plz
        items += '</div>'; 
        
        items += '<input type="button" onclick="window.state.goToMyTags();" value="My tags" />';
       
        return items;
        
    },
    
    goToMyTags: function() {
    
        window.state = new UserTags();
        window.state.init();
    
    },
    
    back: function() {
        
         window.localStorage.setItem("settings", false);
         window.state = new Menu();
         window.state.init();
    }
    
    
};