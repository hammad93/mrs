<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
<meta name="description" content="The Medical Records System for the International Medical Outreach">
<meta name="author" content="Hammad Usmani">
<link rel="icon" href="http://imoucf.org/mrs/favicon.ico">
<title>I.M.O MRS</title>
<!-- Scripts -->
<script src="http://imoucf.org/mrs/login.js"></script>

<!-- Custom styles for this template -->
<link href="http://imoucf.org/mrs/navbar-fixed-top.css" rel="stylesheet">

<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
<![endif]-->

<!-- Fixed navbar -->
<?php 
if (!isset($_COOKIE["MRS"]) || $_COOKIE["MRS"] == "false"){
	echo '<!-- ECHO NAVBAR WITHOUT LOGIN CREDENTIALS -->
	
	';
	/*KICK BACK HOME IF NO CREDENTIALS PRESENT*/
	if (!((strval($_SERVER["REQUEST_URI"]) == "/mrs/") || (strval($_SERVER["REQUEST_URI"]) == "/mrs/index.php"))){
		//workaround for Cross-Origin Request Blocked:
		echo '<script>window.location = "http://imoucf.org/";</script>';
		//for security reasons we cannot head to the login page
	}
?>
<nav class="navbar navbar-default navbar-fixed-top">
  <div class="container">
	<div class="navbar-header">
	  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
		<span class="sr-only">Toggle navigation</span>
		<span class="icon-bar"></span>
		<span class="icon-bar"></span>
		<span class="icon-bar"></span>
	  </button>
	  <a class="navbar-brand" href="http://imoucf.org/mrs/dashboard/"><img alt="Medical Records System" src="http://imoucf.org/mrs/logo.png"></a>
	</div>
	<div id="navbar" class="navbar-collapse collapse">
	  <ul class="nav navbar-nav">
		<li class="dropdown">
			<a href="index.php" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Home <span class="caret"></span></a>
			<ul class="dropdown-menu">
			<li><a href="http://imoucf.org/">Main Page</a></li>
			<li><a href="index.php">MRS Login</a></li>
		  </ul>
	  </ul>
	  <ul class="nav navbar-nav navbar-right">
		<li class="active"><a href="http://imoucf.org/mrs/">Login<span class="sr-only">(current)</span></a></li>
	  </ul>
	</div><!--/.nav-collapse -->
  </div>
</nav>
<?php } ?>
<?php
if (isset($_COOKIE["MRS"]) && $_COOKIE != "false"){
	echo '<!-- ECHO NAVBAR WITH LOGIN CREDENTIALS -->
	
	';?>
<nav class="navbar navbar-default navbar-fixed-top">
  <div class="container">
	<div class="navbar-header">
	  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
		<span class="sr-only">Toggle navigation</span>
		<span class="icon-bar"></span>
		<span class="icon-bar"></span>
		<span class="icon-bar"></span>
	  </button>
	  <a class="navbar-brand" href="#"><img alt="Medical Records System" src="http://imoucf.org/mrs/logo.png"></a>
	</div>
	<div id="navbar" class="navbar-collapse collapse">
	  <ul class="nav navbar-nav">
		<li class="dropdown">
			<a href="http://imoucf.org/mrs" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Home <span class="caret"></span></a>
			<ul class="dropdown-menu">
			<li><a href="http://imoucf.org/mrs/dashboard/">Dashboard</a></li>
			<li role="separator" class="divider"></li>
			<li><a href="http://imoucf.org/">Main Page</a></li>
			<li><a href="index.php">MRS Login</a></li>
		  </ul>
		<li><a href="#about">About</a></li>
		<li class="dropdown">
		  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Data Analytics <span class="caret"></span></a>
		  <ul class="dropdown-menu">
			<li><a href="#">Query Tool</a></li>
			<li role="separator" class="divider"></li>
			<li class="dropdown-header">Generate Reports</li>
			<li><a href="http://imoucf.org/mrs/FHF.php">Family History Form</a></li>
			<li><a href="#">House to House Surveys</a></li>
		  </ul>
		</li>
		<li class="dropdown">
		  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Forms <span class="caret"></span></a>
		  <ul class="dropdown-menu">
			<li><a href="http://imoucf.org/mrs/FHF.php">Family History</a></li>
			<li><a href="#">House-to-House</a></li>
		  </ul>
		</li>
	  </ul>
	  <ul class="nav navbar-nav navbar-right">
		<li><a href="#">Welcome <?php echo $_COOKIE["MRS"]?> !</a></li>
		<li class="active"><a href="#" onclick = "return logout()">Logout<span class="sr-only">(current)</span></a></li>
	  </ul>
	</div><!--/.nav-collapse -->
  </div>
</nav>
<?php } ?>