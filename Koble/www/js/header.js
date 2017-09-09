function Header(backText, title){
    this.backText = backText;
    this.title = title;
}

Header.prototype = {
    init: function(){
        
        this.html = ''; // 
        
        this.html += '<div class="center" id="header"> Header!';
       // this.html += '<a id="headerBackText" data-role="button" data-icon="arrow-l" onclick="window.state.back();">'+this.backText+'</a>';
        
        if( this.title != "" ) // 
        {
            this.html += '<input type="button" onclick="window.state.back();" value="' + this.backText + '" />';
        }
        /*
        this.html += '<a id="headerBackText" data-role="button" data-icon="arrow-l" onclick="window.state.back();">'+this.backText+'</a>';
		this.html += '<div class= "ui-grid-a center" id="menuGrid"> <div id="prevHeaderTitle" class="ui-block-a noTextShadow">'+this.prevTitle+'</div>';
		this.html += '<div id="headerTitle" class="ui-block-b noTextShadow" >'+this.title+'</div> </div>';
        this.html += '<div class="ui-btn-right">';
        this.html += '<a id="refreshBtn" data-role="button" data-icon="refresh" data-iconpos="notext" onclick="window.state.update();"></a>&nbsp;&nbsp;&nbsp;&nbsp;';
        this.html += '<a data-role="button" id="settingBtn" data-icon="gear" data-rel="popup" data-transition="flip" data-iconpos="notext" data-position-to="window" href="#settings"></a>';
        this.html += '</div>'; */
        
        this.html += '</div>'; 
        
        $("#header-wrapper").html(this.html);
        $("#header-wrapper").trigger('create');

		
		
    },
	
	// most frequently used
    set: function(backText, title ){
        
		this.backText = backText;
        this.title = title;

       // $("#headerBackText").html(this.backText);
      //  $("#headerBackText").html(this.backText);
		
        
        $("#header-wrapper").trigger('create');
    },
    
    back: function(){
        
    }
};














