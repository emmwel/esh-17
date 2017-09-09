function UserTags(){
    
}

UserTags.prototype = {
	
    init: function(){
        var self = this;
        $("#main").load("userTags.html", function(){
            window.state = self;
    
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
        
        var items = '';
        var places = '';
        var activities = '';
        
        places += 'Hejhejmonikshejop1';
        
        var username = window.localStorage.getItem("username");
        var jsonData = $.getJSON( "data/places.json", function( data ) { 
            $.each( data, function( key, val ) {
                //console.log( "key: " + key + " val: " + val["name"]  ); //  items.push( "<li id='" + key + "'>" + val + "</li>" );
                data2 = val["activities"];
               
                //places += '<div class="placesDiv"><h2>Hejhejmonikshejop</h2></div>';
                places += 'Hejhejmonikshejop';
                console.log("in here");
                
                $.each( data2, function(key2, val2) {
                    
                   // activities +=
                    
                    var users = val2["users"];
                    for( i in users )
                    {
                       
                        if( users[i] = username )
                        {
                            
                            
                        }
                    }
                    
                });
                
                //places += '</div>';
                
               // items += places;    
                
            });
        })
        places += '<h2>Hejhejmonikshejop</h2>2';
        console.log("in Out");
        
        $("#userTags").html(places);
        $("#userTags").trigger('create');
        
    },
    
    back: function() {
        
         window.state = new Menu();
         window.state.init();
    }
    
    
};