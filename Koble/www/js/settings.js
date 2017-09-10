function Settings(){
    
};

Settings.prototype = {
	
    init: function(){
        var self = this;
        $("#main").load("settings.html", function(){
            window.state = self;
    
            window.header.set("Tillbaka", "Settings", true, false);
            $("#main").trigger('create');
			
            self.initBtns();
            
        });
		
    },
    
    
    initBtns: function(){
		var self = this;       

        /*
        $("#exploreBtn").on("click",function(){
			     
                
            
           window.state = new Explore();
           window.state.init();
            
        }); */
		
		
    },
    

    
};