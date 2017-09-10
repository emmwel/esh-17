function Settings(){

};

Settings.prototype = {
	
    init: function(){
        
        var self = this;
        
        $("#main").load("settings.html", function(){
            window.state = self;
    
            window.header.set("Tillbaka", "Settings", true, false);
            $("#main").trigger('create');
            
			var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
            
            self.initBtns();

            
        });
		
    },

    
    initBtns: function(){
		var self = this;

        
        //$.("#slider").slider();
        /*
        $("#exploreBtn").on("click",function(){
			     
                
            
           window.state = new Explore();
           window.state.init();
            
        }); */
		
		
    },
    
    getMinAge: function() {
        
        var minAge = document.getElementById("minAge").value;
        window.localStorage.setItem("ageMin", minAge);


    },
    
    getMaxAge: function() {
        var maxAge = document.getElementById("maxAge").value;
        window.localStorage.setItem("ageMax", maxAge);

    },
    
    dropDownGender: function() {
        document.getElementById("myDropdown").classList.toggle("show");
    },
    
    dropWomen: function() {
        window.localStorage.setItem("genderPref", "Kvinna");
    },
    
    dropMen: function() {
      window.localStorage.setItem("genderPref", "Man");  
    },
    
    dropAll: function() {
        window.localStorage.setItem("genderPref", "All");
    },
    
    back: function() {
        
         window.localStorage.setItem("settings", true);
         window.state = new Profile();
         window.state.init();
    }
    
    
    

    
};