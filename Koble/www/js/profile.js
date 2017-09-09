function Profile(){
    
}

Profile.prototype = {
	
    init: function(){
        var self = this;
        $("#main").load("profile.html", function(){
            window.state = self;
    
            $("#main").trigger('create');
			
            self.initBtns();
            
        });
		
    },
    
    
    initBtns: function(){
		var self = this;       

       /* $("#exploreBtn").on("click",function(){
			     
           window.state = new Explore();
           window.state.init();
            
        }); */

		
    },
    
    back: function() {
        
         window.state = new Menu();
         window.state.init();
    }
    
    
};