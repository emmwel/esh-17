function Explore(){
    
};

Explore.prototype = {
	
    init: function(){
	
        var self = this;
		
        $("#main").load("explore.html", function(){
		
            window.state = self;
           

            $("#main").trigger('create');	
            self.initBtns();
			
			
        });
		
    },
    
    
    initBtns: function(){
		var self = this;

       
    },
 

    back: function() {
        
         window.state = new Menu();
         window.state.init();
    }
	
};