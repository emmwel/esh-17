function Init(){
    
	//define local cache fields
	var username = window.localStorage.key(0);
	var password = window.localStorage.key(1); 
		
	window.localStorage.setItem("username", username);
	window.localStorage.setItem("password", password);
	
    document.cookie="username="+username;
    document.cookie="password="+password;

    window.header = new Header("", "Välkommen", false);
    window.header.init();
    
    window.state = new Menu(); // // Login() go to Login directly when the app is started
    window.state.init();	
	
    window.local = false;
    
    /* NFC setup */
    
    /*
    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        console.log("In here");
        
        
        // Read NDEF formatted NFC Tags
    nfc.addNdefListener (
        function (nfcEvent) {
            var tag = nfcEvent.tag,
                ndefMessage = tag.ndefMessage;

            // dump the raw json of the message
            // note: real code will need to decode
            // the payload from each record
            alert(JSON.stringify(ndefMessage));

            // assuming the first record in the message has
            // a payload that can be converted to a string.
            alert(nfc.bytesToString(ndefMessage[0].payload).substring(3));
        },
        function () { // success callback
            alert("Waiting for NDEF tag");
        },
        function (error) { // error callback
            alert("Error adding NDEF listener " + JSON.stringify(error));
        }
    ); 
        
    } */
    

    
    
    
    
}