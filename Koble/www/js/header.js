function Header(backText, title, showBackBtn, showSettingsBtn ){
    this.backText = backText;
    this.title = title;
    this.show = showBackBtn;
    this.showSettings = showSettingsBtn;
}

Header.prototype = {
    init: function(){
        
        this.set(this.backText, this.title, this.show);
        
    },
	
	// most frequently used
    set: function(backText, title, showBackBtn, showSettingsBtn ){
        
		this.backText = backText;
        this.title = title;
        this.show = showBackBtn;
        this.showSettings = showSettingsBtn;

       //  $("#headerBackText").html(this.backText);
       //  $("#headerBackText").html(this.backText);
        
        this.html = '';
       
        this.html += '<div class="center" id="header">';
        
        if( this.show == true ) // 
        {
            this.html += '<input type="button" id="headerBtn" onclick="window.state.back();" value="' + this.backText + '" />';
            
        }
        
        
        if( this.showSettings == true ) 
        {
            this.html += '<input type="button" id="headerBtn2" onclick="window.state.goToSettings();" value="Settings" />';
            
        } else {
            
            this.html += '<input type="button" id="headerBtn2" value="" />';
        }
        
        this.html += '<p>' +this.title+ '</p>';

		this.html += '</div>'; 
        
        $("#header-wrapper").html(this.html);
        $("#header-wrapper").trigger('create');
    },
    
};














