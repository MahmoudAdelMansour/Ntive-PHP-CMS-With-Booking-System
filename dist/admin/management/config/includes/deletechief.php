<?php 
session_start();
require("../connect_db_1220.php"); 

$delete_id =  (isset($_GET['chief_id']) && is_numeric($_GET['chief_id'])) ? intval($_GET['chief_id']) : 0 ;
$checkValue = $conn->prepare("DELETE FROM ceo WHERE ceo_id = :ceoid ");
$checkValue->bindParam(":ceoid",$delete_id);
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