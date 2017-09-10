function Activity(theName, theUsers){
    this.name = theName;
    this.users = theUsers.split(",");
    this.user = [];
};

Activity.prototype = {
	
    init: function(){
        
        var self = this;
        var items = " ";

        $("#main").load("activity.html", function(){
            window.state = self;
    
            window.header.set("Tillbaka", "Activity", true);
            $("#main").trigger('create');
            self.loadData();
        });
        
  
		
    },
    
    
    initBtns: function(){
		var self = this;       
		
    },
    
    loadData: function(){
      
        var self = this;
        
         var jsonData = $.getJSON( "http://10.0.0.17/users.json", function( data ) { 
            
            console.log(data);
            //self.createHTML(data);
             
            items = self.createHTML(data);
            window.localStorage.setItem("settings", true); 
             
            //console.log("itemss: " + items);
            
            $("#activity").html(items);
            $("#activity").trigger('create');
        
        })
        
    },
    
    createHTML: function(data, name) {
        var self = this;
        var items = "";
        var i = 0;
      
         // save all user information in self.user (this.user)
         $.each( data, function( key, val ) {
                self.user[i] = (data[key]);
                ++i;
                return;
        }); 
        
        for(j in self.user) {
            items += '<div class = activityUser> <h2>' + self.user[j].firstname + '</h2></div>';
        }
       
        return items;
    },
    
    
    
    
    back: function() {
        
            window.state = new UserTags();
            window.state.init();
    }
    

    
};