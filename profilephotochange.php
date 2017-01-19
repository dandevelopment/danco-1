<!DOCTYPE HTML>  
<?php 
//$cookie_username = "username";
//$cookie_usernamevalue = "placeholder";
//$cookie_password = "password";
//$cookie_passwordvalue = "placeholder";
if(!isset($_COOKIE["username"])) {
//$cookie_username = "username";
//$cookie_usernamevalue = "placeholder";
//setcookie($cookie_username, $cookie_usernamevalue, time() + (86400 * 30), "/"); // 86400 = 1 day
//$cookie_password = "password";
//$cookie_passwordvalue = "placeholder";
//setcookie($cookie_password, $cookie_passwordvalue, time() + (86400 * 30), "/"); // 86400 = 1 day
} else {
  // echo "<p>The Dan servers have detected you may already be logged in.</p><br>";
}
$cUsername = $_COOKIE['username'];
$cPassword = $_COOKIE['password'];
$cEmail = $_COOKIE['email'];

function setphoto($purl) {
if($purl != ''){
   setcookie("photo", $purl, time() + (86400 * 30), "/"); // 86400 = 1 day
   eco();
  // echo '<p style="color:green>Photo Successfully Set. Reload to update.';
}
}
?>
<html>
<head>
<style>
        .button {
            background-color: cornflowerblue; /* Green */
            border: none;
            color: white;
            padding: 5px 10px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            transition-duration: 1s;
            margin: 5px;
            border-radius: 5px;
            /*box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);*/
        }
        .button:hover {
            box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
            color: dodgerblue;
            background-color: white;
            padding: 15px;
        }
</style>
</head>
<body style="font-family:Verdana;">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>  
    <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post" style="border-radius:10px;background-color:lightgrey;padding:10px;color:white;box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);//margin-bottom:1000px;">
        Url of Photo: <input type="text" name="Photo" style="border:none;background-color:white;"><br>
        <input type="submit" value="Set" class="button">
    </form>
	<!--<div style= "background-color:red;color:white;padding:10px;//margin-bottom:1000px;">
	<script>
	//$(this).css("filter", "blur(2px)");
	//$(document).ready(function(){
    //$("#blurpas").focus(function(){
     //   $(this).css("filter", "blur(2px)");
    //});
    //$("#blurpas").blur(function(){
    //    $(this).css("filter", "blur(0px)");
    //});
//    });
</script>
<?php
echo "Ignore anything that says 'Notice:' below this line.";
?>
</div>-->
<div style="color:rgba(0,0,0,0);">
<?php

$servername = "localhost";
$username = "root";
$password = "pws";
$dbname = "dandatabase";
$fUsername = $cUsername;
$fPassword = $cPassword;
$fEmail = $cEmail;
if($_POST['Photo'] != ""){
$fPhoto = $_POST['Photo'];
}
// echo $cUsername . "worked";
//$correct = "false";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
echo "failure";
    die("Connection failed: " . $conn->connect_error);
} 
//echo "Connected successfully ";
//$sql = 'INSERT INTO login (username, password)
//VALUES ("usr", "psa")';
//$row["usr"] = $fUsername;
//$sql4 = 'INSERT INTO ip (ip)
//VALUES ("' . $_SERVER['REMOTE_ADDR'] . '")';
//$result4 = $conn->query($sql4);
function eco () {
echo '<p style="color:green">Photo Successfully Set. Reload to update.</p>';
}
//$sql2 = "SELECT username, photo FROM login";
//$result = $conn->query($sql2);
 //   while($row = $result->fetch_assoc()) {
//	  if($fUsername == $row["username"] && $fPassword == $row["password"]) {
  //        $correct = "true";
	//	  $fEmail = $row["email"];
	//}
	//}
//	if($correct == "false") {
//	  echo '<p style="color:red;">Username or Password Incorrect</div>';
	//  writeMsg();
//	} else {
	//  echo '<p style="color:green;">Welcome! Authentication Complete. You can now procede by pressing <div class="ly"><a class="button"style="float:right;padding-top:5px;padding-bottom:5px;background-color:#ff6a00" href="Dashboard.html"target="_blank" onclick="//Login()">Dan Dashboard</a></div>';
	 // $cookie_usernamevalue = $fUsername;
	//  $cookie_passwordvalue = $fPassword;
	 // if($fUsername != ""){
//	  echo $cUsername . "worked";
	  setphoto($fPhoto);
	//  	  echo '<p style="color:green">Photo Successfully Set. Reload to update.</p>';
	if($_POST['Photo'] != ''){
	  $sql6 = "DELETE FROM login
               WHERE username = '".$cUsername."'";
			   $result6 = $conn->query($sql6);
			    echo $cUsername . " worked";
	  $sql5 = 'INSERT INTO login (username, password, email, photo)
      VALUES ("' .$fUsername. '","' .$fPassword. '","' .$fEmail. '","' . $fPhoto . '")';
	  			  
      $result5 = $conn->query($sql5);
	  }
	  //}      
	  // setcookie("username",$fUsername,time() + (86400 * 30), "/")
	  	//  setcookie("password",$fPassword,time() + (86400 * 30), "/")
//	$sql = 'INSERT INTO login (ip)
//    VALUES ("' . $_SERVER['REMOTE_ADDR'] . '")';
	//  writeMsg2();
	//}

//if ($conn->query($sql) === TRUE) {
//    echo "New record created successfully";
//} else {
//  echo "Error: " . $sql . "<br>" . $conn->error;
//}

?>
</div>
</body>
</html>