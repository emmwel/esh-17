function Menu(){
    
};

Menu.prototype = {
	
    init: function(){
        var self = this;
        $("#main").load("menu.html", function(){
            window.state = self;
    
            $("#main").trigger('create');
			
            self.initBtns();
            
        });
		
    },
    
    
    initBtns: function(){
		var self = this;       

        $("#exploreBtn").on("click",function(){
			     
           window.state = new Explore();
           window.state.init();
            
        });
		
        
        $("#tagBtn").on("click",function(){
			     
           window.state = new Tag();
           window.state.init();
            
        });
		
    },
    

    
};