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
            self.initBtns();
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
            //window.localStorage.setItem("settings", true); 
             
            //console.log("itemss: " + items);
            
            $("#activity").html(items);
            $("#activity").trigger('create');
        
        })
        
    },
    
    createHTML: function(data) {
        var self = this;
        var items = "";
      
         // save all user information in self.user jh(this.user)
         $.each( data, function( key, val ) {
             for(i in self.users) {
                if (self.users[i] == val["username"]) {
                    self.user[i] = (data[key]);
                    ++i;
                    return; 
                }   
             }
              
        }); 
        
        for(j in self.user) {

           /* items += '<div class = activityUser>  <img src="img/'+ self.user[j].username +'.jpg" class="activityUserImg center"/><h2 id="actH2">' + self.user[j].firstname +', ' + self.user[j].age + ' år</h2>';
            items += '<h3>' + self.user[j].gender + '</h3 actH3></div>'; */

            if(window.localStorage.getItem("genderPref") == "All") {
                if (self.user[j].age > window.localStorage.getItem("ageMin") && self.user[j].age <        window.localStorage.getItem("ageMax")) {
                
                    items += '<div class = activityUser>  <img src="img/'+ self.user[j].username +'.jpg" class="activityUserImg center"/><h2>' + self.user[j].firstname +', ' + self.user[j].age + ' years</h2>';
                    items += '<h3>' + self.user[j].gender + '</h3>';
                    items += '<input class="sendMessage" type="button" onclick="window.state.sendAMessage(\'' + self.user[j].nummer + '\');" value=">>" /></div>';
                } 
            }
            
            else {
                if (self.user[j].age > window.localStorage.getItem("ageMin") && self.user[j].age <  window.localStorage.getItem("ageMax") && self.user[j].gender == window.localStorage.getItem("genderPref")) {
                    items += '<div class = activityUser>  <img src="img/'+ self.user[j].username +'.jpg" class="activityUserImg center"/><h2>' + self.user[j].firstname +', ' + self.user[j].age + ' years</h2>';
                    items += '<h3>' + self.user[j].gender + '</h3>';
                    items += '<input class="sendMessage" type="button" onclick="window.state.sendAMessage(\'' + self.user[j].nummer + '\');" value=">>" /></div>';
                   
                } 
            }

            

        }
       
        return items;
    },
    
    sendAMessage: function() {
        
    },
    
    back: function() {
        
            window.state = new UserTags();
            window.state.init();
    }
    

    
};