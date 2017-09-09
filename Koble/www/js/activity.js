function Activity(theName, theUsers){
    this.name = theName;
    this.users = theUsers.split(",");
    this.user = null;
};

Activity.prototype = {
	
    init: function(){
        
        var self = this;
        var items = " ";

        $("#main").load("activity.html", function(){
            window.state = self;
    
            window.header.set("Tillbaka", "Activity", true);
            $("#main").trigger('create');
            
        });
        
        self.loadData();
        
		
    },
    
    
    initBtns: function(){
		var self = this;       
		
    },
    
    loadData: function(){
      
        var self = this;
        var items = "";
        var username = window.localStorage.getItem("username");
        
      
         // save all user information in self.user (this.user)
         $.each( data, function( key, val ) {
            
             //console.log( "key: " + key + " val: " + val["fullname"]  ); //  items.push( "<li id='" + key + "'>" + val + "</li>" );
             
             for (i in users) {
                if( val["username"] == username){
                 
                    self.user.append(data[key]);
                 
                }
             }
        }); 
        /*
        items += '<img src="img/'+ self.user.username +'.jpg" class="userImg center"/>';
        items += '<div>';
        items += '<h2> '+ self.user.fullname +', '+ self.user.age +' </h2>'; // CSS here plz
        items += '</div>'; 
        
        items += '<input type="button" onclick="window.state.goToMyTags();" value="My tags" />'; */
        console.log(user);
        return items;
        
    },
    
    createHTML: function(data, name) {
        var self = this;
        var users = "";
        $.each(data, function(key, val) {
            data2 = val["activities"];
            
            $.each(data2, function(key2, val2){
                if (self.name == val2["name"]) {
                    
                    var activityUsers = val2["users"];
                       
                    for(i in activityUsers) {
                        
                        var jsonData = $.getJSON( "data/users.json", function( data2 ) {
                            users += activityUsers[i];
                        })
                    }
                }
                
            });
            
        });
        
        return users;
    },
    
    
    
    
    back: function() {
        
            window.state = new UserTags();
            window.state.init();
    }
    

    
};