<?php
	if (strval($_SERVER["REQUEST_URI"]) != "/mrs/session.php"){
		//workaround for Cross-Origin Request Blocked:
		echo 'sup';
		//for security reasons we cannot head to the login page
	}
?>