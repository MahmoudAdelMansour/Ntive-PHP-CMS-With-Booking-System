<!-- <?php
session_start();
require("../connect_db_1220.php");
if (isset($_SERVER['REQUEST_METHOD']) && $_SERVER['REQUEST_METHOD'] == 'POST') {
    $hospital_booking_id = (isset($_POST['hospital_book_id']) && !empty($_POST['hospital_book_id'])) ? $_POST['hospital_book_id'] : 0;
    $getTable = $conn->prepare("SELECT SELECT hospitals.hospital_name FROM `hospitals` WHERE hospitals.hospital_id = :hosbi");    
    $getTable->bindParam(":hosbi",$hospital_booking_id);
    $getTable->execute();
    $data_row = $getTable->fetchAll();
    echo json_encode($data_row);
} 