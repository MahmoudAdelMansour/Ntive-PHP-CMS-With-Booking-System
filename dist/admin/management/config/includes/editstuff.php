<?php 
session_start();
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    require("../connect_db_1220.php");
    $edit_id = (isset($_GET['user_id']) && is_numeric($_GET['user_id'])) ? intval($_GET['user_id']) : 0 ;
    $stmt_edit = $conn->prepare("SELECT * FROM users WHERE user_id = ? LIMIT 1");
    $stmt_edit->execute(array($edit_id));
    $edit_data = $stmt_edit->fetch();
    $count = $stmt_edit->rowCount();
    if ($count > 0 ){
        echo json_encode($edit_data);
    } else {
        echo "id";
    }
} else {

}