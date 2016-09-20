<?php
	/*INCLUDE HEADER*/
	include('header.php');
?>
<!DOCTYPE html>
<html lang="en">
  <head>	
	<!-- IMPORT STYLES -->
	<link rel="stylesheet" type="text/css" href="index.css">
  </head>

  <body>
	<div class="login-body">
		<article class="container-login center-block">
			<section>
				<ul id="top-bar" class="nav nav-tabs nav-justified">
					<li class="active"><a href="#login-access">Credentials Login</a></li>
					<li><a href="#">Request Credentials</a></li>
				</ul>
				<div class="tab-content tabs-login col-lg-12 col-md-12 col-sm-12 cols-xs-12">
					<div id="login-access" class="tab-pane fade active in">
						<h2><i class="glyphicon glyphicon-log-in"></i> Authorization Credentials</h2>						
						<form role="form" onsubmit="return login()" accept-charset="utf-8" class="form-horizontal">
							<div class="form-group ">
								<label for="NAME" class="sr-only">Username</label>
									<input type="text" class="form-control" name="NAME" id="NAME" 
										placeholder="Username" tabindex="1" value="" />
							</div>
							<div class="form-group ">
								<label for="PASS" class="sr-only">Password</label>
									<input type="password" class="form-control" name="PASS" id="PASS"
										placeholder="Password" value="" tabindex="2" />
							</div>
							<div class="panel panel-default">
							  <div class="panel-body">
								<i><small>By providing your authorization credentials you are agreeing to comply with and be bound by the terms and conditions of use.</small></i>
							  </div>
							</div>
							<div class="form-group ">				
									<button type="submit" id="submit" tabindex="5" class="btn btn-lg btn-primary">Enter</button>
							</div>
						</form>			
					</div>
				</div>
			</section>
		</article>
	</div>
  </body>
</html>
