<?php
session_start();
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    require("../connect_db_1220.php");
    $ceo_name   = $_POST['chief_name'];
    $ceo_title  = $_POST['chief_title'];
    $ceo_data   = $_POST['data'];
    $ceo_avaUp  = $_FILES['chiefavataradd'];
    $ceo_word   = $_POST['chief_word'];
   
    if ($ceo_data == 1) {
        if (empty($ceo_name) || empty($ceo_title)  || empty($ceo_word)) {
            echo "empty";
        } else {
         
         $stmt = $conn->prepare("INSERT INTO 
                                ceo(ceo_name , ceo_aka ,ceo_word )
                                VALUES(:cname,:ctitle,:cword)");
        $stmt->execute(array(
            'cname'   => $ceo_name,
            'ctitle'  => $ceo_title ,
            'cword'   => $ceo_word 
        ));
        }
    } else {
     // ImageData
        $img_name       =  $_FILES['chiefavataradd']['name'];
        $img_final_name =   rand(0,990000) . '_' . $img_name;
        $img_type       =  $_FILES['chiefavataradd']['type'];
        $img_tmp        =  $_FILES['chiefavataradd']['tmp_name'];
        $img_size       =  $_FILES['chiefavataradd']['size'];
        $img_extension  = strtolower(end(explode('.', $img_name)));
        $img_extensions =  array("jpeg", "jpg", "png", "gif");
        if (in_array($img_extension, $img_extensions)) {
            move_uploaded_file($img_tmp,'../../../uploads/' . $img_final_name );
            $stmt = $conn->prepare("UPDATE ceo SET ceo_avatar = ? WHERE (ceo_avatar is null or ceo_avatar = '')");
            $stmt->execute(array($img_final_name));
        } else {
            echo "extension";
        }
    }
} else {
    // header It From Here
}
