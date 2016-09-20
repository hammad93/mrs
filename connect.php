<?php
/*HAMMAD USMANI
Notes - This is a helper class to streamline the connection process
*/

	class createCon  {
		var $host = '66.7.215.241';
		var $user = 'imoucfor';
		var $pass = 'imoucfwebsite13';
		var $db = 'imoucfor_mrs';
		var $conn;

		function connect() {
			$con = mysqli_connect($this->host, $this->user, $this->pass, $this->db);
			if (!$con) {
				die('ERROR CNN1: CONNECTION TO mySQL DATABASE FAILED');
			}
			else{
				$this->conn = $con;
			}
			return $this->conn;
		}

	}
?>