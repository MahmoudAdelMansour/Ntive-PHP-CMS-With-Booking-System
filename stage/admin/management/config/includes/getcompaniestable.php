<?php
session_start();
require("../connect_db_1220.php");
$getTable = $conn->prepare("SELECT com_id , com_name , ceo_link , com_avatar  FROM  com");
$getTable->execute();
$data_row = $getTable->fetchAll();
echo json_encode($data_row);