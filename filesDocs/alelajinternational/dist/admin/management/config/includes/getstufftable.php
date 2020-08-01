<?php
session_start();
require("../connect_db_1220.php");
$getTable = $conn->prepare("SELECT user_id , user_name , section , user_avatar  FROM  users");
$getTable->execute();
$data_row = $getTable->fetchAll();
echo json_encode($data_row);