<?php 
    session_start();
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        require("../connect_db_1220.php");
        // Data POST $ceo_data == 1
        if(isset($_POST['data']) && $_POST['data'] == 1 ){
            
            $data_num    = intval($_POST['data']);
            $booking_id    = intval($_POST['id']);
            $booking_name  = $_POST['booking_name'];
            $booking_number  = $_POST['booking_number'];
            $booking_date  = $_POST['booking_date'];
            $booking_hospital = $_POST['booking_hospital'];
            $booking_perm = $_POST['booking_perm'];
            $error       = 0;
            if (empty($booking_name) || empty($booking_date)) {
                $error += 1 ;
            }
            // echo $error;\
            // echo $chief_word;
            $update_stmt = $conn->prepare("UPDATE booking SET 
            booking_name = ? , 
            booking_phone = ? , 
            booking_date = ? ,
            booking_status = ? ,
            hospitals_id = ? 
            WHERE booking_id = ? ");
            $update_stmt->execute(array(
            $booking_name,
            $booking_number,
            $booking_date,
            $booking_perm,
            $booking_hospital,
            $booking_id));
            $row_count = $update_stmt->rowCount();
            if ($row_count > 0 ) {
                echo $error;
            } else {
                echo $error;
            }

        } else {
        // $name_image     = $_FILES['hospitalavataredit']['name']; 
        // $img_final_name =   rand(0,990000) . '_' . $name_image;
        // $img_type       =  $_FILES['hospitalavataredit']['type'];
        // $img_tmp        =  $_FILES['hospitalavataredit']['tmp_name'];
        // $img_size       =  $_FILES['hospitalavataredit']['size'];
        // $img_extension  =   strtolower(end(explode('.', $name_image)));
        // $img_id         =   intval($name_image);
        // $img_extensions =  array("jpeg", "jpg", "png", "gif");
        // if (in_array($img_extension, $img_extensions)) {
        //     move_uploaded_file($img_tmp,'../../../uploads/' . $img_final_name );
        //     $stmt = $conn->prepare("UPDATE hospitals SET hospital_avatar = ? WHERE hospital_id = ?");
        //     $stmt->execute(array($img_final_name,$img_id));
           
        // } else {
        //     echo "extension";
        // }

        } 

    }