function Explore(){
    
};

Explore.prototype = {
	
    init: function(){
	
        var self = this;
		
        $("#main").load("explore.html", function(){
		
            window.state = self;
           

            $("#main").trigger('create');	
            self.initBtns();
			self.loadData();
			
        });
		
    },
    
    
    initBtns: function(){
		var self = this;

       
    },
 

    back: function() {
        
         window.state = new Menu();
         window.state.init();
    },
    
    loadData: function() {
        var username = window.localStorage.getItem("username");
        var jsonData = $.getJSON( "data/places.json", function( data ) { 
            $.each( data, function( key, val ) {
                //console.log( "key: " + key + " val: " + val["name"]  ); //  items.push( "<li id='" + key + "'>" + val + "</li>" );
                data2 = val["activities"];
                //console.log(  val["activities"] );
                $.each( data2, function(key2, val2) {
                    
                    console.log( val2["users"] ); // array of users
                    
                    
                    //var users = 
                    
                });
            });
        })
    }
	
};