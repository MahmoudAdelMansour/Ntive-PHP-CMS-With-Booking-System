<?php
session_start();
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    require("../connect_db_1220.php");
    $com_name   = $_POST['com_name'];
    $com_link  = $_POST['com_link'];
    $com_data   = $_POST['data'];
    $com_avaUp  = $_FILES['companiesavataradd'];
    if ($com_data == 1) {
        if (empty($com_name) || empty($com_link)) {
            echo "empty";
        } else {
        $stmt = $conn->prepare("INSERT INTO 
                                com(com_name , ceo_link )
                                VALUES(:cname,:clink)");
        $stmt->execute(array(
            'cname'   => $com_name,
            'clink'  => $com_link 
        ));
        }
    } else {
     // ImageData
        $img_name       =  $_FILES['companiesavataradd']['name'];
        $img_final_name =   rand(0,990000) . '_' . $img_name;
        $img_type       =  $_FILES['companiesavataradd']['type'];
        $img_tmp        =  $_FILES['companiesavataradd']['tmp_name'];
        $img_size       =  $_FILES['companiesavataradd']['size'];
        $img_extension  = strtolower(end(explode('.', $img_name)));
        $img_extensions =  array("jpeg", "jpg", "png", "gif");
        if (in_array($img_extension, $img_extensions)) {
            move_uploaded_file($img_tmp,'../../../uploads/' . $img_final_name );
            $stmt = $conn->prepare("UPDATE com SET com_avatar = ? WHERE (com_avatar is null or com_avatar = '' or com_avatar = Null )");
            $stmt->execute(array($img_final_name));
        } else {
            echo "extension";
        }
    }
} else {
    // header It From Here
}