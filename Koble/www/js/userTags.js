function UserTags(){
    
}

UserTags.prototype = {
	
    init: function(){
        var self = this;
        var items = '';
        $("#main").load("userTags.html", function(){
            window.state = self;
            
            window.header.set("Tillbaka", "My tags", true, false);
            $("#main").trigger('create');
			
            self.loadData();
            
        });
		
    },
    
    
    initBtns: function(name, users){
            var self = this;       
            window.state = new Activity(name, users);
            window.state.init();
    },
    
    loadData: function() {
        
        var self = this;
        
        var username = window.localStorage.getItem("username");

        var jsonData = $.getJSON( "data/places.json", function( data ) { 
            
            items = self.createHTML(data, username);
            
            $("#userTags").html(items);
            $("#userTags").trigger('create');
        
        }) 
        
    },
    
    createHTML: function(data, username) {
        var self = this;
        var places = '';
        
        $.each( data, function( key, val ) {
                data2 = val["activities"];
                
                places += '<div class="placesDiv"><h2>' + val["name"] +'</h2>';
                places += '<h2> Aktiviteter:  </h2>';
                
                $.each( data2, function(key2, val2) {
                    
                    
                    var users = val2["users"];
                    for( i in users )
                    {
                       
                        if( users[i] === username )
                        {
                            
                            places += '<input id="userTagsBtn" type="button" onclick="window.state.initBtns(\'' + val2["name"] +'\', \'' + users +'\');" value="' + val2["name"] + '"/><h2></h2>';
                            console.log("fgfgfg");
                        }
                    }
                     
                });
                
                places += '</div>';
                 
            });
        
        return places;
        
    },
    
    
    back: function() {
        
         window.state = new Menu();
         window.state.init();
    }
    
    
};