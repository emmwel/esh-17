function UserTags(){
    
}

UserTags.prototype = {
	
    init: function(){
        var self = this;
        $("#main").load("userTags.html", function(){
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
    
    
};