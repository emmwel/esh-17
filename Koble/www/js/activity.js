function Activity(){
    
};

Activity.prototype = {
	
    init: function(){
        var self = this;
        console.log("fff");
        $("#main").load("activity.html", function(){
            window.state = self;
    
            window.header.set("Tillbaka", "Activity", true);
            $("#main").trigger('create');
			
            self.initBtns();
            
        });
		
    },
    
    
    initBtns: function(){
		var self = this;       
		
    },
    
    back: function() {
        
         //window.history.go(-1);
            window.state = new UserTags();
            window.state.init();
    }
    

    
};