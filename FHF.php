<?php
/*HAMMAD USMANI
INPUT:
OUTPUT: add the elements to a new row into the corresponding mySQL structure
NOTES -
	/*CHECK FOR SUBMISSION*/
	if(isset($_POST['Submit'])){
		/*CONNECT TO DATABASE*/
		include 'connect.php';
		$conn = new createCon();
		$conn->connect();
		$link = $conn->conn;
		
		/*CREATE QUERY*/
		$ID = $_POST["ID"];
		$trip = $_POST["trip"];
		$firstName = $_POST["firstName"];
		$lastName = $_POST["lastName"];
		$gender = $_POST["gender"];
		$age = $_POST["age"];
		$sBP = $_POST["sBP"];
		$dBP = $_POST["dBP"];
		$pulse = $_POST["pulse"];
		$temp = $_POST["temp"];
		$weight = $_POST["weight"];
		$height = $_POST["height"];
		$readD = $_POST["readD"];
		$diag = $_POST["diag"];
		$readT = $_POST["readT"];
		$treatment = $_POST["treatment"];
		//construct query string
		$query = "INSERT INTO `".$trip."`(`ID`, `firstName`, `lastName`, `gender`, `age`, `sBP`, `dBP`, `pulse`, `temp`, `weight`, `height`, `readD`, `diag`, `readT`, `treatment`) VALUES ('".$ID."','".$firstName."','".$lastName."','".$gender."','".$age."','".$sBP."','".$dBP."','".$pulse."','".$temp."','".$weight."','".$height."','".$readD."','".$diag."','".$readT."','".$treatment."')";		
		/*SEND QUERY*/
		$sql = mysqli_query($link, $query);
		
		/*PRESENT CONFIRMATION*/
		$message = "SUCCESSFULLY ENTERED THE FOLLOWING: Family ID: ".$ID.", First Name: ".$firstName." Last Name: ,".$lastName.", Gender: ".$gender.", Systolic Blood Pressure: ".$sBP.", Diastolic Blood Pressure: ".$dBP.", Pulse: ".$pulse.", Temperature: ".$temp.", Weight: ".$weight.", Height: ".$height.", DIAGNOSIS: (readable: ".$readD.") ".$diag.", TREATMENT: (readable: ".$readT.") ".$treatment." into the ".$trip." expedition";
		echo '<script language="javascript">';
		echo 'alert("'.$message.'")';
		echo '</script>';
		
		/*FINALIZE & DISCONNECT*/
		$link->close();
	}
?>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>I.M.O MRS - Dashboard</title>

    <!-- Bootstrap Core CSS -->
    <link href="bower_components/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- MetisMenu CSS -->
    <link href="bower_components/metisMenu/dist/metisMenu.min.css" rel="stylesheet">

    <!-- DataTables CSS -->
    <link href="bower_components/datatables-plugins/integration/bootstrap/3/dataTables.bootstrap.css" rel="stylesheet">

    <!-- DataTables Responsive CSS -->
    <link href="bower_components/datatables-responsive/css/dataTables.responsive.css" rel="stylesheet">
	
	<!-- Custom CSS -->
    <link href="dist/css/sb-admin-2.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="bower_components/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">


    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
	<?php
		/*INCLUDE HEADER*/
		include('header.php');
	?>
</head>

<body>
    <div id="wrapper">
	<?php
		include('sidebar.php');
	?>
        </nav>

        <div id="page-wrapper">
	    <div class="row">
		<div class="col-lg-12">
                    <div class="panel panel-default">
			<div class="panel-heading">
                            Family History Form
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
		<link rel="stylesheet" type="text/css" href="FHF.css">
		<form id="form" class="form" name="form" action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post" enctype="application/x-www-form-urlencoded" accept-charset="UTF-8">
			<h1>FAMILY HISTORY FORM</h1>
			<div class="content">
				<div class="intro"><p>Please fill out the following fields with the corresponding data.</p>
		<p>Rules &amp; FAQ:</p>
		<ul>
		<li>If a field is not filled in, leave it blank on the web form aswell.</li>
		<li>If data is not in the corrent unit, conver the unit before submitting</li>
		</ul>
		<p><a href="http://www.worldwidemetric.com/measurements.html" target="_blank">CLICK HERE FOR A CONVERSION TOOL.</a></p></div>
				<div id="section0" >
				</div>
				<h2 class="section">FAMILY DEMOGRAPHICS</h2>
				<div id="section1" >
					<div class="field"><label for="ID">Family ID</label><input type="number" id="ID" name="ID"></div>
					<div class="field"><label for="trip">Expedition Clinic Visit</label><select id="trip" name="trip" required><option value="SUM15">Summer 2015</option></select></div>
				</div>
				<h2 class="section">PATIENT DEMOGRAPHICS + VITALS</h2>
				<div id="section2" >
					<div class="field"><div class="edit-options"><div class="edit"></div><div class="delete"></div></div><label for="firstName">First Name</label><input type="text" id="firstName" name="firstName" required></div>
					<div class="field"><label for="lastName">Last Name</label><input type="text" id="lastName" name="lastName"></div>
					<div class="field"><label for="gender">Gender</label><span>Male</span><input type="radio" value="M" id="gender" name="gender"><span>Female</span><input type="radio" value="F" id="gender" name="gender"><span>Other</span><input type="radio" value="O" id="gender" name="gender"></div>
					<div class="field"><label for="age">Age</label><input type="text" id="age" name="age"></div>
					<div class="field"><label for="sBP">Systolic BP (mmHg)</label><input type="number" step="0.01" id="sBP" name="sBP"></div>
					<div class="field"><label for="dBP">Diastolic BP (mmHg)</label><input type="number" step="0.01" id="dBP" name="dBP"></div>
					<div class="field"><label for="pulse">Pulse (BPM)</label><input type="number" step="0.01" id="pulse" name="pulse"></div>
					<div class="field"><label for="temp">Temperature</label><input type="number" step="0.01" id="temp" name="temp" placeholder="in Fahrenheit "></div>
					<div class="field"><label for="weight">Weight (KG)</label><input type="number" step="0.01" id="weight" name="weight" placeholder="in Kilograms"></div>
					<div class="field"><label for="height">Height (ft)</label><input type="number" step="0.01" id="height" name="height" placeholder="in feet"></div>
				</div>
				<h2 class="section">PATIENT DIAGNOSIS + TREATMENT</h2>
				<div id="section3" >
					<div class="field"><label for="readD">Can the diagnosis be read?</label><select id="readD" name="readD" required><option value="true">Legible</option><option value="false">Illegible</option></select></div>
					<div class="field"><label for="diag">Diagnosis:</label><textarea id="diag" name="diag" placeholder="Please make the best effort to interpret the diagnosis" wrap="hard"></textarea></div>
					<div class="field"><label for="readT">Can the treatment be read?</label><select id="readT" name="readT" required><option value="true">Legible</option><option value="false">Illegible</option></select></div>
					<div class="field"><label for="treatment">Treatment</label><textarea id="treatment" name="treatment" placeholder="Please make the best effort to interpret the diagnosis. This field is vital to the data analytics" wrap="hard"></textarea></div>
					<div class="field"><label for="Submit">Submit</label><input type="submit" id="Submit" name="Submit"></div>
				</div>
			</div>
		</form>
	</div><!-- END FORM -->
        </div>
        <!-- /#page-wrapper -->

    </div>
    <!-- /#wrapper -->
	
    <!-- jQuery -->
    <script src="bower_components/jquery/dist/jquery.min.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="bower_components/bootstrap/dist/js/bootstrap.min.js"></script>

    <!-- Metis Menu Plugin JavaScript -->
    <script src="bower_components/metisMenu/dist/metisMenu.min.js"></script>

    <!-- DataTables JavaScript -->
    <script src="bower_components/datatables/media/js/jquery.dataTables.min.js"></script>
    <script src="bower_components/datatables-plugins/integration/bootstrap/3/dataTables.bootstrap.min.js"></script>
	
    <!-- Custom Theme JavaScript -->
    <script src="dist/js/sb-admin-2.js"></script>


</body>

</html>
