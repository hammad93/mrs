function login() {
  "use strict";
  
  // Variables
  var username,
    password,
    xmlhttp,
    check;
  
  // Get username and password
  username = document.getElementById("NAME");
  password = document.getElementById("PASS");
  
  // If username or password is empty
  if (username.value === "" || password.value === "") {
    window.alert("ERROR LGN1: EMPTY LOGIN CREDENTIALS");
	//refresh the page
	location.reload(true); //forceGet = true
    return false;
  } else {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    if (window.XMLHttpRequest) {
      xmlhttp = new XMLHttpRequest();
    } else { // code for IE6, IE5
      xmlhttp = new window.ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        check = xmlhttp.responseText;
        // Check if login info exists in database
        if (check === "true") {
			//check if cookies are enabled
			if (navigator.cookieEnabled){
				window.location = "dashboard/";
				return true;
			}
			else{
				window.alert("ERROR LG02: COOKIES NOT ENABLED");
				//refresh the page
				location.reload(true); //forceGet = true
				return false;
			}
        }
		//login information was incorrect
		else {
          window.alert("ERROR LGN2: INCORRECT LOGIN CREDENTIALS");
		  //refresh the page
		  location.reload(true); //forceGet = true
          return false;
        }
      }
    };
  }
  xmlhttp.open("GET", "http://imoucf.org/mrs/login.php?NAME=" + username.value + "&PASS=" + password.value, true);
  xmlhttp.send();
  return false;
}
function logout(){
	"use strict";
	
	var xmlhttp, isFound;
	
	/*USER DIALOGUE AND CHECK FOR SUCCESSFUL LOGOUT*/
	// code for IE7+, Firefox, Chrome, Opera, Safari
    if (window.XMLHttpRequest) {
      xmlhttp = new XMLHttpRequest();
    } else { // code for IE6, IE5
      xmlhttp = new window.ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        isFound = xmlhttp.responseText;
        // Check if login info exists in database
        if (isFound === "false") {
		  window.alert("SUCCESSFULLY LOGGED OUT");
		  //refresh the page
		  window.location = "http://imoucf.org/";
          return true;
        } else {
          window.alert("ERROR LGO1: LOGOUT COOKIE NOT FOUND. MAKE SURE COOKIES ARE ENABLED");
		  //refresh the page
		  window.location = "http://imoucf.org/";
          return false;
        }
      }
    };
	xmlhttp.open("GET", "http://imoucf.org/mrs/logout.php", true);
	xmlhttp.send();
	return false;
}
function credentials(){
	window.alert("CONTACT INFO@IMOUCF.ORG TO REQUEST LOGIN CREDENTIALS")
}