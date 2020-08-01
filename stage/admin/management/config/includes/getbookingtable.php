<?php
session_start();
require("../connect_db_1220.php");
$getTable = $conn->prepare("SELECT booking_id , booking_name , booking_phone ,booking_status ,booking_date ,hospitals_id FROM  booking");
$getTable->execute();
$data_row = $getTable->fetchAll();
echo json_encode($data_row);
