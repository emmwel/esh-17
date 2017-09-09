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
    
    
    initBtns: function(name){
            var self = this;       
            window.state = new Activity();
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
                
                places += '<div class="placesDiv"><input type="button" onclick="window.state.initBtns(\'' + val["name"] +'\');" value= "' + val["name"] + '"/>';
                places += '<h2> Aktiviteter: ' + data2.length + '</h2>';
                
                $.each( data2, function(key2, val2) {
                    
                    
                    var users = val2["users"];
                    for( i in users )
                    {
                       
                        if( users[i] === username )
                        {
                            
                            places += '<h3>' +val2["name"]+ '</h3>';
                        }
                    }
                     
                });
                
                places += '</div>';
                 
            });
        
        console.log("out HERE");
        
        return places;
        
    },
    
    
    back: function() {
        
         window.state = new Menu();
         window.state.init();
    }
    
    
};