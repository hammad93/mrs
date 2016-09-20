<?php
/*HAMMAD USMANI
INPUT: nothing
OUTPUT: deletes cookie
NOTES - implementation for logout
*/
	/*DELETE THE COOKIE*/
	setcookie("MRS", "false", time() - 3600, "/"); //deletes, sets the time to right now
	
	/*CHECK IF THE COOKIE EXISTS*/
	if ($_COOKIE["MRS"] == "false"){
		echo "true";
	}
	else{
		echo "false";
	}
?>