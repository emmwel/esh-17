function Init(){
    
	//define local cache fields
	var username = window.localStorage.key(0);
	var password = window.localStorage.key(1); 
		
	window.localStorage.setItem("username", username);
	window.localStorage.setItem("password", password);
	
    document.cookie="username="+username;
    document.cookie="password="+password;
  
	
	//window.snd = new Audio("beep.mp3"); // buffers automatically when created	
	//window.failsnd = new Audio("failsound.mp3");	
   
    
    window.header = new Header("", "Välkommen", "", false);
    window.header.init();
    
    /*
    window.settings = new Settings("null", "null", false);
    window.settings.init(); */

    window.state = new Login(); //Option to enter UserName/Password above and switch Login() to Menu() during dev.
    window.state.init();	
	
    window.local = false;
}