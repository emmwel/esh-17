function Profile(){
    
    this.user = null;
}

Profile.prototype = {
	
    init: function(){
        var self = this;
        $("#main").load("profile.html", function(){
            window.state = self;
    
            $("#main").trigger('create');
			
            self.initBtns();
            self.getProfile();
            
        });
		
    },
    
    
    initBtns: function(){
		var self = this;       

       /* $("#exploreBtn").on("click",function(){
			     
            
        }); */

		
    },
    
    getProfile: function() {
        var self = this;
        
         var jsonData = $.getJSON( "http://10.0.0.17/users.json", function( data ) { 
            
            console.log(data);
            //self.createHTML(data);
             
            items = self.createHTML(data);
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
       
        return items;
        
    },
    
    back: function() {
        
         window.state = new Menu();
         window.state.init();
    }
    
    
};