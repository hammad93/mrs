<?php
/*HAMMAD USMANI
INPUT: 
OUTPUT: top 4 highest systolic blood pressure
NOTES - orders by sBP. the output is for the DataTables format for use 
		with the MRS dashboard
*/
	/*CONNECT TO DATABASE*/
	if (!class_exists('createCon')) {
		include 'connect.php';
	}
	$conn = new createCon();
	$conn->connect();
	$link = $conn->conn;
	
	/*SQL QUERIES*/
	$getTable = "SELECT * FROM `SUM15` ORDER BY sBP DESC LIMIT 4";
	$table = $link->query($getTable);
	
	/*OUTPUT*/
	if ($table->num_rows > 0){
		//Put into DataTables jQuery Plugin format in the dashbard
		while ($row = $table->fetch_assoc()){
			//table structure: Name - Gender - Blood Pressure - Pulse - Temp - Weight - Height - Diagnosis + Treatment
			echo '<tr class="danger">
						<td>'.$row["ID"].'</td>
						<td><b>'.$row["firstName"].' '.$row["lastName"].'</b></td>
						<td>'.$row["sBP"].'</td>
						<td>'.$row["dBP"].'</td>
					</tr>';
		}
	}
	else{
		echo "ERROR TBL02: Failed to retrieve data";
	}
	
	/*FINISH UP AND CLOSE*/
	$link->close();
?>