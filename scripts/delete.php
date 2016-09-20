<?php
    /*DELETE ENTRY METHOD:
    1. Decrypt hash to proper ID
    2. Execute query on database
    EX. If entry key = 4, 
    hash = (4 - 1337) ^ 2*/
    $key = abs(sqrt($_GET["hash"]) - 1337);
    
    /*CONNECT TO DATABASE*/
	if (!class_exists('createCon')) {
		include '../connect.php';
	}
	$conn = new createCon();
	$conn->connect();
	$link = $conn->conn;
	
	/*SQL QUERIES*/
	$query = 'DELETE FROM `SUM15` WHERE `KEY` ='.$key.'';
	$result = $link->query($query);
	
	if (!result){
	    echo '<script> alert("Unknown Error in deleting entry") </script>';
	}
	else{
		echo '<script> alert("Successfully Deleted Entry '.$query.'");
		window.location.href = "../dashboard";</script>';
	}
	$link->close();
?>