<?php 

$db_server      = "localhost";
$db_user        = "root";
$db_pass        = "dodgeishere";   
$db_name        = "managementproduct";
$db_option      = array(
    PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8',

);
try {
    $conn = new PDO("mysql:host=$db_server;dbname=$db_name",$db_user,$db_pass,$db_option);
        // Error Mode Exception
    $conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
    
} catch(PDOException $error) {
    echo "Connection To DB Is Lost With" . $error->getMessage();
    $conn = null;
}