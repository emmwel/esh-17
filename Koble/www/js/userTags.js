function UserTags(){
    
}

UserTags.prototype = {
	
    init: function(){
        var self = this;
        $("#main").load("userTags.html", function(){
            window.state = self;
            
            window.header.set("Tillbaka", "My tags", true);
            $("#main").trigger('create');
			
            self.initBtns();
            self.loadData();
        });
		
    },
    
    
    initBtns: function(){
		var self = this;       

       /* $("#exploreBtn").on("click",function(){
			     
           window.state = new Explore();
           window.state.init();
            
        }); */

		
    },
    
    loadData: function() {
        
        var self = this;
        var items = '';
        var username = window.localStorage.getItem("username");

        var jsonData = $.getJSON( "data/places.json", function( data ) { 
            
            items = self.createHTML(data, username);
            console.log("items: " + items);
            
            $("#userTags").html(items);
            $("#userTags").trigger('create');
        
        }) 
        
    },
    
    createHTML: function(data, username) {
        
        var places = '';
        
        $.each( data, function( key, val ) {
                //console.log( "key: " + key + " val: " + val["name"]  ); //  items.push( "<li id='" + key + "'>" + val + "</li>" );
                data2 = val["activities"];
               
                places += '<div class="placesDiv"><h2>' + val["name"]  + '</h2>';
                
                $.each( data2, function(key2, val2) {
                    
                   // activities +=
                    
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
                
               // items += places ;    
                
            });
        
        console.log("out HERE");
        return places;
        
    },
    
    back: function() {
        
         window.state = new Menu();
         window.state.init();
    }
    
    
};