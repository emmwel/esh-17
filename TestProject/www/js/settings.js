function Settings(){
    this.fontSize = 0;
    this.headerColor = null;
	this.theme = null;
	this.activeUser = null;
	
};

Settings.prototype = {
    init: function(){
        var self = this;
        $("#settings").load("settings.html", function(){
			self.initBtns();
            //self.loadSettings();
			self.getUserSettings();
            self.initSlider();
			$("#sun").trigger("click"); // Light theme as default
			$("#main").trigger('create');
        });
         
        $("#settings").trigger('create');
        $("#settings").popup({ history: false }); 
		
		$.jAlertChangeDefault(window.localStorage.getItem("theme")); // set default setting for jAlert
		

		
    },
	
    
    setHeaderColor: function(hex){
        var stylesheet = document.styleSheets[0],
        selector = "[data-role=header]", rule = "{background-color: " + hex + " !important}";
		window.localStorage.setItem("hcolor", hex);
		this.headerColor = hex;
		
        if (stylesheet.insertRule) {
            stylesheet.insertRule(selector + rule, stylesheet.cssRules.length);
        } else if (stylesheet.addRule) {
            stylesheet.addRule(selector, rule, -1);
        }
		
		this.setFontColor();
    },
	
	// set heading font depending on background color
	setFontColor: function(){
		

		var color = $("#header").css('backgroundColor');
		var arr = color.replace("rgb(", "").replace(")","").split(",");
		
		var r = parseInt(arr[0]);
		var g = parseInt(arr[1]);
		var b = parseInt(arr[2]);
		
		var d = this.decideColor( r, g, b );
		
		var stylesheet = document.styleSheets[0];
		if (stylesheet.insertRule) { // validity check
				
			if(d == 255) {
				stylesheet.insertRule("#headerTitle { color:white; }", stylesheet.cssRules.length);
				stylesheet.insertRule("#prevHeaderTitle { color:#dadada; }", stylesheet.cssRules.length); 
			} else if( d == 0)
			{
				stylesheet.insertRule("#headerTitle { color:black; }", stylesheet.cssRules.length);
				stylesheet.insertRule("#prevHeaderTitle { color:#9e9e9e; }", stylesheet.cssRules.length); 
			}
		}
	}, 
	
	// helping function to setFontColor()
	decideColor: function(r, g, b){
		
		a = 1 - ( 0.250 * r + 0.250 * g + 0.100 * b)/255;
		
		if (a < 0.5)
		   return 0; // bright colors - black font
		else
		   return 255; // dark colors - white font
	},
	
	
    initBtns: function(){
        var self = this;
        
        $("#settingsSaveBtn").on("tap",function(){
            self.saveSettings();
        });
		
		$("#settings").trigger('create');
		
		// custom color button
		$("#custom").spectrum({
			color: "#f00",
			move: function(color) {	// called at every color change
				self.headerColor = color.toHexString();
				window.localStorage.setItem("hcolor", color.toHexString());
				window.settings.setHeaderColor(color.toHexString());
				self.setFontColor();
			},
			change: function(color) {
				// called on close
			},			
		});
		
		$("#sun").on("click",function(){
				
			$("#center").removeClass('ui-page-theme-b'); //?
			
			var stylesheet = document.styleSheets[0];

			if (stylesheet.insertRule) {
				stylesheet.insertRule(".filterBW { filter:brightness(0.00); -webkit-filter: brightness(0.00); }", stylesheet.cssRules.length);
				stylesheet.insertRule(".ani { -webkit-animation: blinkW 2s infinite; }", stylesheet.cssRules.length);
			} 

			window.localStorage.setItem("theme", "light");
			$.jAlertChangeDefault("light");
			

        });
		
		$("#moon").on("click",function(){

   
			$("#center").addClass('ui-page-theme-b');
			var stylesheet = document.styleSheets[0];

			if (stylesheet.insertRule) {
				stylesheet.insertRule(".filterBW { filter:brightness(100.00); -webkit-filter: brightness(100.00); }", stylesheet.cssRules.length);
				stylesheet.insertRule(".ani { -webkit-animation: blink 2s infinite; }", stylesheet.cssRules.length);
			} 
			
			window.localStorage.setItem("theme", "dark");
			$.jAlertChangeDefault("dark");
			
			//console.log(window.localStorage.getItem("theme"));
			
			
        }); 
		
		
		
	},
		
	getUserSettings: function(){
		var self = this;
        $.ajax({
            type: 'GET',
            url: window.ajaxServer+'GetUserSettingsJSON',
            cache: 'true',
            data: {
                 'username':window.localStorage.getItem("username"),
				'environment':window.localStorage.getItem("environment")
            },
            dataType: 'jsonp',
            beforeSend: function(){$.mobile.loading('show','a');},
            
            error: function(){
                $.mobile.loading('hide','a');
                //alert("Error loading User Settings")
				$.jAlert({ 
				'title': 'Fel',
				'content': 'Fel vid hämtning av settings',
				'theme': 'red'
				});
            },
                
            success: function(jsonStr){
                $.mobile.loading('hide','a');
				self.getUserSettings_cb(jsonStr);
            }
        });        
	},
	
	getUserSettings_cb: function(jsonStr){
        var self = this;
       	var user = '';
		size = 0;
        if(jsonStr !== '')
        {
			
			user = JSON.parse(jsonStr);
            size = parseInt(user[0]['fontsize']);
			userLevel = user[0]['Role'];
			this.theme = user[0]['bgcolor'];
			this.headerColor = user[0]['hcolor'];
			
			this.fontSize = size;
			
			window.localStorage.setItem("fontsize", this.fontSize);
			window.localStorage.setItem("userLevel", userLevel);
			window.localStorage.setItem("theme", this.theme);
			window.localStorage.setItem("hcolor", this.headerColor);
			

			this.loadSettings();          
        }
        else
        {
            //alert("Fel vid hämtning av settings.");
			$.jAlert({ 
			'title': 'Fel',
			'content': 'Fel vid hämtning av settings',
			'theme': 'red'
			});
			
            return;
        }
        
        $.mobile.loading('hide','a');
        $("#main").trigger('create');
    },
	
    loadSettings: function(){
        
		this.setHeaderColor(this.headerColor);
		
		if(window.localStorage.getItem("theme") == "light")
		{
			$("#center").removeClass('ui-page-theme-b'); 
			
			var stylesheet = document.styleSheets[0];

			if (stylesheet.insertRule) {
				stylesheet.insertRule(".filterBW { filter:brightness(0.00); -webkit-filter: brightness(0.00); }", stylesheet.cssRules.length);
				stylesheet.insertRule(".ani { -webkit-animation: blinkW 2s infinite; }", stylesheet.cssRules.length);
			} 

			window.localStorage.setItem("theme", "light");
			$.jAlertChangeDefault("light");
			
		} else if (window.localStorage.getItem("theme") == "dark")
		{
			
			$("#center").addClass('ui-page-theme-b');
			var stylesheet = document.styleSheets[0];

			if (stylesheet.insertRule) {
				stylesheet.insertRule(".filterBW { filter:brightness(100.00); -webkit-filter: brightness(100.00); }", stylesheet.cssRules.length);
				stylesheet.insertRule(".ani { -webkit-animation: blink 2s infinite; }", stylesheet.cssRules.length);
			} 
			
			window.localStorage.setItem("theme", "dark");
			$.jAlertChangeDefault("dark");
		}
	
		
		
        if(this.fontSize < 14 || this.fontSize > 24){
            this.fontSize = 14;
        }
        
        var stylesheet = document.styleSheets[0],
                selector = "[zoom=true]",
                rule = "{font-size: " + window.localStorage.getItem("fontsize") + "px !important}";

        if (stylesheet.insertRule) {
            stylesheet.insertRule(selector + rule, stylesheet.cssRules.length);
        } else if (stylesheet.addRule) {
            stylesheet.addRule(selector, rule, -1);
        }
		
		 
    },
	
	
	saveSettings: function(){
		//alert("setUserSettings");
		var self = this;
        $.ajax({
            type: 'GET',
            url: window.ajaxServer+'SetUserSettingsJSON',
            cache: 'true',
            data: {
                'username':window.localStorage.getItem("username"),
				'fontsize':window.localStorage.getItem("fontsize"),
				'bgcolor':window.localStorage.getItem("theme"),
				'hcolor':window.localStorage.getItem("hcolor"),
				'environment':window.localStorage.getItem("environment")
            },
            dataType: 'jsonp',
            beforeSend: function(){$.mobile.loading('show','a');},
            
            error: function(){
                $.mobile.loading('hide','a');
                //alert("Error loading User Settings")
				$.jAlert({ 
				'title': 'Fel',
				'content': 'Fel vid hämtning av settings',
				'theme': 'red'
				});
            },
                
            success: function(jsonStr){
                $.mobile.loading('hide','a');
				self.saveSettings_cb(jsonStr);
            }
        });
	},
    
	saveSettings_cb: function(jsonStr){
        var self = this;
       	var usertest = '';
		var sizetest = 0;
        if(jsonStr == "True")
        {
			
			//alert("Inställningarna sparade!");
			$.jAlert({ 
			'title': 'Fint!',
			'content': 'Inställningarna sparade',
			'theme': 'green'
			});
			
			$("#settings").popup("close");
			self.loadSettings();
			
                     
        }
        else
        {
            //alert("Fel vid sparande av settings.");
			$.jAlert({ 
			'title': 'Fel',
			'content': 'Fel vid sparande av settings',
			'theme': 'red'
			});
			
            return;
        }
        
        $.mobile.loading('hide','a');
        $("#main").trigger('create');
    },
	
	
	
    initSlider: function(){
        var self = this;
        var cookie_expires = new Date();
        
        cookie_expires.setFullYear(cookie_expires.getFullYear() + 500);
        
        $("#fontSlider").slider();

        $("#fontSlider").on('change', function(){
            $("#main").prop("style", "width:100%; table-layout: fixed; font-size: " + $("#fontSlider").val() + "px");
            
            //intel.xdk.cache.setCookie("fontSize",$("#fontSlider").val(),5000);
            document.cookie = "fontSize=" + $("#fontSlider").val() + ";expires=" + cookie_expires.toGMTString();
            window.localStorage.setItem("fontsize", $("#fontSlider").val());
			self.loadSettings();
        });
    }
};