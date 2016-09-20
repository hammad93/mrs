<?php
/*HAMMAD USMANI
INPUT: 
OUTPUT: displays the quality of data of the dataset
NOTES - Here is the formula for the quality of data:
	30% => readable Diagnosis
	30% => readable Treatment
	40% => empty demographics
*/
	/*CONNECT TO DATABASE*/
	if (!class_exists('createCon')) {
		include 'connect.php';
	}
	$conn = new createCon();
	$conn->connect();
	$link = $conn->conn;
	
	/*SQL QUERIES*/
	$getReadD = 'SELECT COUNT( readD ) AS readD
					FROM  `SUM15` 
					WHERE readD =  0'; //amount with unreadable diagnosis
	$getReadT = 'SELECT COUNT( readT ) AS readT
					FROM  `SUM15` 
					WHERE readT =  0'; //amount with unreadable treatment
	$getEmpty = "SELECT * 
				FROM SUM15 AS readE
				WHERE CONCAT(  `firstName` ,  '',  `lastName` ,  '',  `gender` ,  '',  `age` ,  '',  `sBP` ,  '',  `dBP` ,  '',  `pulse` ,  '',  `temp` ,  '',  `weight` ,  '',  `height` ) != NULL";
	$diagnosis = $link->query($getReadD);
	$diagnosis = $diagnosis->fetch_assoc();
	$treatment = $link->query($getReadT);
	$treatment = $treatment->fetch_assoc();
	$empty = $link->query($getEmpty);
	$empty = mysqli_num_rows($empty);
	//find number of rows
	$numrows = $link->query("SELECT COUNT( * ) AS readN FROM SUM15");
	$numrows = $numrows->fetch_assoc();
	
	/*DRAW CALCULATIONS BASED ON THE PERCENTAGES*/
	//Quality Data:
	$diagnosis = $diagnosis["readD"] / $numrows["readN"];
	$treatment = $treatment["readT"] / $numrows["readN"];
	$empty = $empty["readE"] / $numrows["readN"];
	$loss = ((0.3 * $diagnosis) + (0.3 * $treatment) + (0.4 * $empty)) * 100;
	$quality = 100 - $loss;
	
	echo "google.load('visualization', '1', {packages:['corechart']});
		  google.setOnLoadCallback(drawQuality);
		  function drawQuality() {

			var data = google.visualization.arrayToDataTable([
			  ['Integrity', 'Percent Share'],
			  ['Quality', ".$quality."],
			  ['Loss',    ".$loss."]
			]);

			var options = {
			  title: 'Quality of Data'
			};

			var chart = new google.visualization.PieChart(document.getElementById('quality'));

			chart.draw(data, options);
		  }";
	
	/*FINISH UP AND CLOSE*/
	$link->close();
?>