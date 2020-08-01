<?php
session_start();
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    require("../connect_db_1220.php");
    $hospital_name          = $_POST['hospital_name'];
    $hospital_word         = $_POST['hospital_word'];
    $hospital_perm         = $_POST['hospital_perm'];
    $hospital_data         = $_POST['data'];
    $hospitalavaUp         = $_FILES['hospitalavataradd'];
    if ($hospital_data == 1) {
        if ( empty($hospital_name) ) {
            echo "empty";
        } else {
        $stmt = $conn->prepare("INSERT INTO 
                                hospitals(
                                    hospital_name ,
                                    hospital_description ,
                                    hospital_status
                                    )
                                VALUES(
                                    :hname,
                                    :hdesc,
                                    :udesc
                                    )");
        $stmt->execute(array(
            'hname'   => $hospital_name,
            'hdesc'  => $hospital_word,
            'udesc'   => $hospital_perm
        ));
        }
    } else {
     // ImageData
        $img_name       =  $_FILES['hospitalavataradd']['name'];
        $img_final_name =   rand(0,990000) . '_' . $img_name;
        $img_type       =  $_FILES['hospitalavataradd']['type'];
        $img_tmp        =  $_FILES['hospitalavataradd']['tmp_name'];
        $img_size       =  $_FILES['hospitalavataradd']['size'];
        $img_extension  = strtolower(end(explode('.', $img_name)));
        $img_extensions =  array("jpeg", "jpg", "png", "gif");
        if (in_array($img_extension, $img_extensions)) {
            move_uploaded_file($img_tmp,'../../../uploads/' . $img_final_name );
            $stmt = $conn->prepare("UPDATE hospitals SET hospital_avatar = ? WHERE (hospital_avatar is null or hospital_avatar = '' or hospital_avatar = Null )");
            $stmt->execute(array($img_final_name));
        } else {
            echo "extension";
        }
    }
} else {
    // header It From Here
}