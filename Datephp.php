<!DOCTYPE html>
<html>
<head>
    <title></title>
</head>
<body style="font-family:Verdana;background-color:rgba(0,0,0,0)">
<?php
    date_default_timezone_set("America/New_York");
	$x = 1; 
	datedd();
   // while($x <= 100) {
   function datedd(){
    echo date("h:i:sa")." ".date("l")." ".date("Y-m-d");
	sleep(5);
	datedd();
	}
	//sleep(10);
  //  $x++;
  //   } 
    ?>
</body>
</html>