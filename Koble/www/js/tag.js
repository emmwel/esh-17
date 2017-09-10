function Tag(){
    
}

Tag.prototype = {
	
    init: function(){
        var self = this;
        $("#main").load("tag.html", function(){
            window.state = self;
    
            $("#main").trigger('create');
            window.header.set("Back", "Tag", true, false);
            
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

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();