<?php 
session_start();
require("../connect_db_1220.php"); 

$delete_id =  (isset($_GET['booking_id']) && is_numeric($_GET['booking_id'])) ? intval($_GET['booking_id']) : 0 ;
$checkValue = $conn->prepare("DELETE FROM booking WHERE booking_id = :boid ");
$checkValue->bindParam(":boid",$delete_id);
$checkValue->execute();
$countDelete = $checkValue->rowCount();
if ($countDelete > 0){
    echo 1;
} else {
    echo 0;
}
// SELECT *
// FROM ceo
// WHERE EXISTS
// (SELECT * FROM ceo WHERE ceo_id = 500 )