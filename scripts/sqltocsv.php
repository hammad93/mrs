<?php
include '../connect.php';
// Database Connection

//$host="ftp.imoucf.org";
//$uname="imoucfor@imoucf.org";
//$pass="imoucfwebsite13";
//$database = "imoucfor_mrs"; 
$conn = new createCon();
//echo $conn->host;
$conn->connect();
$link = $conn->conn;
//mysql_connect($host,$uname,$pass); 

//echo mysql_error();

//or die("Database Connection Failed");
$selectdb=mysqli_select_db($link, $conn->db) or 
die("Database could not be selected"); 
$result=mysqli_select_db($link, $conn->db)
or die("database cannot be selected <br>");


$output = "";
$table = "SUM15"; 
$sql = mysqli_query($link, "select * from $table");
$columns_total = mysqli_num_fields($sql);

// Get fields
for ($i = 0; $i < $columns_total; $i++) {
$heading = mysqli_fetch_field_direct($sql, $i);
$output .= '"'.$heading->name.'",';
}
$output .="\n";

// Get records
while ($row = mysqli_fetch_array($sql)) {
for ($i = 0; $i < $columns_total; $i++) {
$output .='"'.$row["$i"].'",';
}
$output .="\n";
}

// Download
$filename = "myFile.csv";
header('Content-type: application/csv');
header('Content-Disposition: attachment; filename='.$filename);

echo $output;
exit;

?>