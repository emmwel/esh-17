function Explore(){
    
};

Explore.prototype = {
	
    init: function(){
	
        var self = this;
		
        $("#main").load("explore.html", function(){
		
            window.state = self;


            $("#main").trigger('create');	
            self.initBtns();
			// self.loadData();
			// self.loadDataJSON();
            
        });
		
    },
    
    
    initBtns: function(){
		var self = this;

       
    },
 
    

    back: function() {
        
         window.state = new Menu();
         window.state.init();
    },
    
    loadData: function(locationNameIn) {
        
        var self = this;
        var items = '';
        
        var username = window.localStorage.getItem("username");

        var jsonData = $.getJSON( "http://10.0.0.17/places.json", function( data ) { 
            
            items = self.createHTML(data, username, locationNameIn);
            
           // $("#userTags").html(items);
           // $("#userTags").trigger('create');
         
        }) 
        
    },
    
    loadDataJSON: function() {
        
        var self = this;
        var items = '';
        var username = window.localStorage.getItem("username");

        
        $.ajaxSetup({
              "error":function() { console.log("error");  }
        });
        
        var jsonData = $.getJSON( "http://10.0.0.17/places.json", function( data ) { 
            
            console.log(data);
            
             items = self.createHTML(data, username);
            console.log("itemss: " + items);
            
            $("#userTags").html(items);
            $("#userTags").trigger('create');
        
        }) 
        
    },
    
    createHTML: function(data, username, locationNameIn) {
        
        var places = '';
        var locationName = '';
        
        $.each( data, function( key, val ) {
                //console.log( "key: " + key + " val: " + val["name"]  ); //  items.push( "<li id='" + key + "'>" + val + "</li>" );
            
                locationName = val["name"]; // location name
                console.log( "key: " + key + " val: " + val["name"]  );    
            
                if(locationName == locationNameIn)
                {
                    
                    console.log("Found it");
                }
            
               /*
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
                
               // items += places ;   */ 
                
            });
        
        console.log("out HERE");
        return places;
        
    },
	
};

