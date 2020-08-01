<?php
session_start();
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    require("../connect_db_1220.php");
    $booking_name           = $_POST['booking_name'];
    $booking_phone          = $_POST['booking_phone'];
    $booking_date           = $_POST['booking_date'];
    $booking_perm           = $_POST['booking_perm'];
    $booking_hospital       = $_POST['hospitals_id'];
    $booking_data          = $_POST['data'];
    if ($booking_data == 1) {
        if (empty($booking_name) ) {
            echo "empty";
        } else {
        $stmt = $conn->prepare("INSERT INTO 
                                booking(
                                    booking_name ,
                                    booking_phone ,
                                    booking_date ,
                                    booking_status,
                                    hospitals_id
                                    )
                                VALUES(
                                    :bname,
                                    :bphone,
                                    :bdate,
                                    :bstatus,
                                    :bhost
                                    )");
        $stmt->execute(array(
            'bname'     => $booking_name,
            'bphone'    => $booking_phone,
            'bdate'     => $booking_date,
            'bstatus'   => $booking_perm,
            'bhost'     => $booking_hospital
        ));
        }
    } else {
     // ImageData
        // $img_name       =  $_FILES['hospitalavataradd']['name'];
        // $img_final_name =   rand(0,990000) . '_' . $img_name;
        // $img_type       =  $_FILES['hospitalavataradd']['type'];
        // $img_tmp        =  $_FILES['hospitalavataradd']['tmp_name'];
        // $img_size       =  $_FILES['hospitalavataradd']['size'];
        // $img_extension  = strtolower(end(explode('.', $img_name)));
        // $img_extensions =  array("jpeg", "jpg", "png", "gif");
        // if (in_array($img_extension, $img_extensions)) {
        //     move_uploaded_file($img_tmp,'../../../uploads/' . $img_final_name );
        //     $stmt = $conn->prepare("UPDATE hospitals SET hospital_avatar = ? WHERE (hospital_avatar is null or hospital_avatar = '' or hospital_avatar = Null )");
        //     $stmt->execute(array($img_final_name));
        // } else {
        //     echo "extension";
        // }
    }
} else {
    // header It From Here
}