<?php

// check if data has been posted to server
// get
if ($_SERVER['REQUEST_METHOD'] == 'GET'

&& isset($_GET["getAjaxOnLoad"])) {

// read file
   $theFile = fopen("assets/files/clickedSquares.txt", "r") or die("Unable to open file!");
   $outArr =[];

// Output one line until end-of-file
      while(!feof($theFile)) {
        $str = fgets($theFile);
        $tempObj = new stdClass();
        $tempArr = explode(",",$str);
        $key1 = "background";
        $key2 = "id";
        $tempObj->$key1 = $tempArr[0];
          $tempObj->$key2 = rtrim($tempArr[1]);


        // return line from open file


          $outArr[]=$tempObj;
      }

  // return json
   $myJSONObj = json_encode($outArr);
      echo $myJSONObj;
   fclose($theFile);
   exit;
}

//check if there has been something posted to the server to be processed
if($_SERVER['REQUEST_METHOD'] == 'POST'){
// append to file
var_dump($_POST);
   $theFile = fopen("assets/files/clickedSquares.txt", "a") or die("Unable to open file!");


$background = $_POST["background"];
$id = $_POST["id"];


  fwrite($theFile, $background.",".$id);
  fwrite($theFile,"\n");
  fclose($theFile);
  echo("done");
  exit;
}
 ?>
