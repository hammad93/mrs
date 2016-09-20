<?php
/*HAMMAD USMANI
INPUT:
OUTPUT:
NOTES - 
*/
	/*CONNECT TO DATABASE*/
	include 'connect.php';
	$conn = new createCon();
	$conn->connect();
	$link = $conn->conn;
	
	/*CHECK USERNAME AND PASSWORD [START COOKIE IF AUTHORIZED]*/
	$query = "SELECT * FROM `user` WHERE BINARY `NAME`='".$_GET["NAME"]."' && BINARY `PASS`='".$_GET["PASS"]."'";
	$sql = mysqli_query($link, $query);
	if(mysqli_num_rows($sql)){
		//set the cookie
		setcookie("MRS", $_GET["NAME"], time() + (86400 * 30), "/");
		echo "true";
	}
	else{
		echo "false";
	}
	
	/*FINALIZE & DISCONNECT*/
	$link->close();
?>