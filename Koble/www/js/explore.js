function Explore(){
    
};

Explore.prototype = {
	
    init: function(){
	
        var self = this;
		
        $("#main").load("explore.html", function(){
		
            window.state = self;
            self.loadMap();


            $("#main").trigger('create');	
            self.initBtns();
			self.loadData();
			
        });
		
    },
    
    loadMap: function() {
        
        var map = new ol.Map({
        target: 'mapid',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ],
        view: new ol.View({
          center: ol.proj.fromLonLat([15.5802492, 58.3925303]),
          zoom: 18
        })
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
	
};