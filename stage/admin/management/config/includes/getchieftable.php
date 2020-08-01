<?php
session_start();
require("../connect_db_1220.php");
$getTable = $conn->prepare("SELECT ceo_id , ceo_name , ceo_aka , ceo_avatar  FROM  ceo");
$getTable->execute();
$data_row = $getTable->fetchAll();
echo json_encode($data_row);