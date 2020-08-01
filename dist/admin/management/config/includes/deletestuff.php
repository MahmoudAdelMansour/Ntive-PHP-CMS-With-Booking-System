<?php 
session_start();
require("../connect_db_1220.php"); 

$delete_id =  (isset($_GET['stuff_id']) && is_numeric($_GET['stuff_id'])) ? intval($_GET['stuff_id']) : 0 ;
$checkValue = $conn->prepare("DELETE FROM users WHERE user_id = :usid ");
$checkValue->bindParam(":usid",$delete_id);
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