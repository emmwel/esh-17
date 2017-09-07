function Explore(){
    
};

Explore.prototype = {
	
    init: function(){
	
        var self = this;
		
        $("#main").load("explore.html", function(){
		
            window.state = self;
            window.header.set("Logga ut", ".", "Meny");
			
			       
            $("#main").trigger('create');	
            self.initBtns();
			
			
        });
		
    },
    
    
    initBtns: function(){
		var self = this;

       
    },
 

    back: function(){
	
	
		
    }
	
};