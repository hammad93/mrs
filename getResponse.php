<?php
/*HAMMAD USMANI
INPUT: 
OUTPUT: recent responses to the FHF inputs in a table structure
NOTES - orders by timestamp. the output is for the DataTables format for use 
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
	$getTable = "SELECT * FROM `SUM15` ORDER BY TIMESTAMP DESC";
	$table = $link->query($getTable);
	
	/*OUTPUT*/
	if ($table->num_rows > 0){
		//Put into DataTables jQuery Plugin format in the dashbard
		while ($row = $table->fetch_assoc()){
			//table structure: Name - Gender - Blood Pressure - Pulse - Temp - Weight - Height - Diagnosis + Treatment
			
			/*DELETE ENTRY METHOD:
			Utilizes a hash algorithm that subtracts 1337 and then squares*/
			$hash = pow(($row["KEY"] - 1337), 2);
			echo '<tr>
					<td>'.$row["TIMESTAMP"].'</td>
					<td>'.$row["firstName"].' '.$row["lastName"].'</td>
					<td>'.$row["gender"].'</td>
					<td>'.$row["age"].'</td>
					<td class="center">'.$row["sBP"].'/'.$row["dBP"].'</td>
					<td class="center">'.$row["pulse"].' bpm</td>
					<td class="center">'.$row["temp"].' F</td>
					<td class="center">'.$row["weight"].' Kg</td>
					<td class="center">'.$row["height"].' ft</td>
					<td class="center"><a class="btn btn-default" href="../scripts/delete.php?hash='.$hash.'" role="button">Delete</a></td>
				</tr>';
		}
	}
	else{
		echo "ERR TBL1: Failed to retrieve data";
	}
	
	/*FINISH UP AND CLOSE*/
	$link->close();
?>