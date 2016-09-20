<?php
/*HAMMAD USMANI
INPUT: 
OUTPUT: displays the age distribution of the data
NOTES - output corresponds to google charts format
Ages <1
Ages 1 - 13
Ages 13 - 19
Ages 19 - 40
Ages 40+
*/
	/*CONNECT TO DATABASE*/
	if (!class_exists('createCon')) {
		include 'connect.php';
	}
	$conn = new createCon();
	$conn->connect();
	$link = $conn->conn;
	
	/*SQL QUERIES*/
	$getAge1 = 'SELECT COUNT( gender ) AS age1
					FROM  `SUM15` 
					WHERE age <=  1';
	$getAge13 = 'SELECT COUNT( gender ) AS age13
					FROM  `SUM15` 
					WHERE age <=  13 && age > 1';
	$getAge19 = 'SELECT COUNT( gender ) AS age19
					FROM  `SUM15` 
					WHERE age <=  19 && age > 13';
	$getAge40 = 'SELECT COUNT( gender ) AS age40
					FROM  `SUM15` 
					WHERE age <=  40 && age > 19';
	$getAge100 = 'SELECT COUNT( gender ) AS age100
					FROM  `SUM15` 
					WHERE age > 40';
	$Age1 = $link->query($getAge1);
	$Age1 = $Age1->fetch_assoc();
	$Age13 = $link->query($getAge13);
	$Age13 = $Age13->fetch_assoc();
	$Age19 = $link->query($getAge19);
	$Age19 = $Age19->fetch_assoc();
	$Age40 = $link->query($getAge40);
	$Age40 = $Age40->fetch_assoc();
	$Age100 = $link->query($getAge100);
	$Age100 = $Age100->fetch_assoc();
	
	echo "google.load('visualization', '1', {packages:['corechart']});
		  google.setOnLoadCallback(drawAge);
		  function drawAge() {

			var data = google.visualization.arrayToDataTable([
			  ['Age', 'Count'],
			  ['Ages <1', ".$Age1["age1"]."],
			  ['Ages 1 - 13', ".$Age13["age13"]."],
			  ['Ages 13 - 19', ".$Age19["age19"]."],
			  ['Ages 19 - 40', ".$Age40["age40"]."],
			  ['Ages 40+', ".$Age100["age100"]."]
			]);

			var options = {
			  title: 'Gender Distribution'
			};

			var chart = new google.visualization.PieChart(document.getElementById('age'));

			chart.draw(data, options);
		  }";
	
	/*FINISH UP AND CLOSE*/
	$link->close();
?>