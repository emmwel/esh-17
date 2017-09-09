function Init(){
    
	//define local cache fields
	var username = window.localStorage.key(0);
	var password = window.localStorage.key(1); 
		
	window.localStorage.setItem("username", username);
	window.localStorage.setItem("password", password);
	
    document.cookie="username="+username;
    document.cookie="password="+password;

    window.state = new Login(); // go to Login directly when the app is started
    window.state.init();	
	
    window.local = false;
}