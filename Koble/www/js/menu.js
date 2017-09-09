function Menu(){
    
};

Menu.prototype = {
	
    init: function(){
        var self = this;
        $("#main").load("menu.html", function(){
            window.state = self;
    
            window.header.set("Tillbaka", "Meny", true);
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
        
        $("#profileBtn").on("click",function(){
			     
           window.state = new Profile();
           window.state.init();
            
        });
        
         $("#myTagsBtn").on("click",function(){
			     
           window.state = new UserTags();
           window.state.init();
            
        });
		
    },
    

    
};