function Header(backText, prevTitle, title, showRefresh){
    this.backText = backText;
	this.prevTitle = prevTitle;
    this.title = title;
    this.showRefresh = showRefresh;
}

Header.prototype = {
    init: function(){
        
        this.html = '';
        
        this.html += '<div data-role="header" class="floating" id="header">';
        this.html += '<a id="headerBackText" data-role="button" data-icon="arrow-l" onclick="window.state.back();">'+this.backText+'</a>';
		this.html += '<div class= "ui-grid-a center" id="menuGrid"> <div id="prevHeaderTitle" class="ui-block-a noTextShadow">'+this.prevTitle+'</div>';
		this.html += '<div id="headerTitle" class="ui-block-b noTextShadow" >'+this.title+'</div> </div>';
        this.html += '<div class="ui-btn-right">';
        this.html += '<a id="refreshBtn" data-role="button" data-icon="refresh" data-iconpos="notext" onclick="window.state.update();"></a>&nbsp;&nbsp;&nbsp;&nbsp;';
        this.html += '<a data-role="button" id="settingBtn" data-icon="gear" data-rel="popup" data-transition="flip" data-iconpos="notext" data-position-to="window" href="#settings"></a>';
        this.html += '</div>';
        this.html += '</div>';
        
        $("#header-wrapper").html(this.html);
        $("#header-wrapper").trigger('create');
   
			
    },
	
	// most frequently used
    set: function(backText, prevTitle , title, showRefresh){
        
		this.backText = backText;
		this.prevTitle = prevTitle;
        this.title = title;
        this.showRefresh = showRefresh;
        $("#headerBackText").html(this.backText);
        
		
		// if prevTitle is empty, center align title
		if(this.prevTitle.length <= 1 )
		{
			$("#menuGrid").html('<div class="center noTextShadow" id="headerTitle">'+this.title+'</div>');
			
		} else {
			
			$("#menuGrid").html('<div class= "ui-grid-a center" id="menuGrid"> <div id="prevHeaderTitle" class="ui-block-a noTextShadow">'+this.prevTitle+'</div><div id="headerTitle" class="ui-block-b noTextShadow" >'+this.title+'</div></div>');
			
		}
		
        if(this.showRefresh){
            $("#refreshBtn").show();
        }else{
            $("#refreshBtn").hide();
        }
        
        $("#header-wrapper").trigger('create');
    }
};














