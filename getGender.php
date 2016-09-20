<?php
/*HAMMAD USMANI
INPUT: 
OUTPUT: displays the age distribution of the data
NOTES - output corresponds to google charts format
*/
	/*CONNECT TO DATABASE*/
	if (!class_exists('createCon')) {
		include 'connect.php';
	}
	$conn = new createCon();
	$conn->connect();
	$link = $conn->conn;
	
	/*SQL QUERIES*/
	$getMale = 'SELECT COUNT( gender ) AS male
					FROM  `SUM15` 
					WHERE gender =  "M"';
	$getFemale = 'SELECT COUNT( gender ) AS female
					FROM  `SUM15` 
					WHERE gender =  "F"';
	$male = $link->query($getMale);
	$male = $male->fetch_assoc();
	$female = $link->query($getFemale);
	$female = $female->fetch_assoc();
	
	echo "google.load('visualization', '1', {packages:['corechart']});
		  google.setOnLoadCallback(drawGender);
		  function drawGender() {

			var data = google.visualization.arrayToDataTable([
			  ['Gender', 'Count'],
			  ['Male', ".$male["male"]."],
			  ['Female',    ".$female["female"]."]
			]);

			var options = {
			  title: 'Gender Distribution'
			};

			var chart = new google.visualization.PieChart(document.getElementById('gender'));

			chart.draw(data, options);
		  }";
	
	/*FINISH UP AND CLOSE*/
	$link->close();
?>