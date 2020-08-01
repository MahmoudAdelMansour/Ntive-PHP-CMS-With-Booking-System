<?php 
session_start();
require("../connect_db_1220.php"); 

$delete_id =  (isset($_GET['hospital_id']) && is_numeric($_GET['hospital_id'])) ? intval($_GET['hospital_id']) : 0 ;
$checkValue = $conn->prepare("DELETE FROM hospitals WHERE hospital_id = :hsid ");
$checkValue->bindParam(":hsid",$delete_id);
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