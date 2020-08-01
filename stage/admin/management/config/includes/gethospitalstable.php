<?php
session_start();
require("../connect_db_1220.php");
$getTable = $conn->prepare("SELECT hospital_id , hospital_name , hospital_avatar ,  hospital_status FROM  hospitals");
$getTable->execute();
$data_row = $getTable->fetchAll();
echo json_encode($data_row);