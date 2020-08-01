<?php
session_start();
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    require("../connect_db_1220.php");
    $stuff_name     = $_POST['stuff_name'];
    $stuff_pass     = md5($_POST['stuff_pass']);
    $stuff_word      = $_POST['stuff_word'];
    $stuff_email    = $_POST['stuff_email'];
    $stuff_section   = $_POST['stuff_section'];
    $stuff_fb       = $_POST['stuff_fb'];
    $stuff_twi      = $_POST['stuff_twi'];
    $stuff_link     = $_POST['stuff_link'];
    $stuff_go       = $_POST['stuff_go'];
    $stuff_perm      = $_POST['stuff_perm'];
    $stuff_data     = $_POST['data'];
    $stuffavaUp     = $_FILES['stuffavataradd'];
    if ($stuff_data == 1) {
        if (empty($stuff_name) || empty($stuff_pass) ) {
            echo "empty";
        } else {
        $stmt = $conn->prepare("INSERT INTO 
                                users(
                                    user_name ,
                                    user_pass ,
                                    user_email,
                                    user_group ,
                                    bio,
                                    section,
                                    social_fb,
                                    social_twitter,
                                    social_linked,
                                    social_google)
                                VALUES(
                                    :uname,
                                    :upass,
                                    :uemail,
                                    :ugroup,
                                    :ubio,
                                    :usection,
                                    :ufb,
                                    :utwi,
                                    :ulink,
                                    :ugo
                                    )");
        $stmt->execute(array(
            'uname'   => $stuff_name,
            'upass'  => $stuff_pass,
            'uemail'   => $stuff_email,
            'ugroup'  => $stuff_perm, 
            'ubio'   => $stuff_word,
            'usection'  => $stuff_section,
            'ufb'   => $stuff_fb,
            'utwi'  => $stuff_twi,
            'ulink'   => $stuff_link,
            'ugo'  => $stuff_go
        ));
        }
    } else {
     // ImageData
        $img_name       =  $_FILES['stuffavataradd']['name'];
        $img_final_name =   rand(0,990000) . '_' . $img_name;
        $img_type       =  $_FILES['stuffavataradd']['type'];
        $img_tmp        =  $_FILES['stuffavataradd']['tmp_name'];
        $img_size       =  $_FILES['stuffavataradd']['size'];
        $img_extension  = strtolower(end(explode('.', $img_name)));
        $img_extensions =  array("jpeg", "jpg", "png", "gif");
        if (in_array($img_extension, $img_extensions)) {
            move_uploaded_file($img_tmp,'../../../uploads/' . $img_final_name );
            $stmt = $conn->prepare("UPDATE users SET user_avatar = ? WHERE (user_avatar is null or user_avatar = '' or user_avatar = Null )");
            $stmt->execute(array($img_final_name));
        } else {
            echo "extension";
        }
    }
} else {
    // header It From Here
}
