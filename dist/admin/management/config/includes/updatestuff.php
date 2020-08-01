<?php 
    session_start();
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        require("../connect_db_1220.php");
        // Data POST $ceo_data == 1
        if(isset($_POST['data']) && $_POST['data'] == 1 ){
            
            $data_num    = intval($_POST['data']);
            $stuff_id    = intval($_POST['id']);
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
            $error       = 0;
            if (empty($stuff_name) || empty($stuff_pass) ) {
                $error += 1 ;
            }
            // echo $error;\
            // echo $chief_word;
            $update_stmt = $conn->prepare("UPDATE users SET 
            user_name = ? ,
            user_pass = ? , 
            user_email = ? , 
            user_group = ? , 
            bio = ? , 
            section = ? , 
            social_fb = ? , 
            social_twitter = ? , 
            social_linked = ? ,  
            social_google = ? 
            WHERE user_id = ? ");
            $update_stmt->execute(array(
            $stuff_name,
            $stuff_pass,
            $stuff_email,
            $stuff_perm,
            $stuff_word,
            $stuff_section,
            $stuff_fb,
            $stuff_twi,
            $stuff_link,
            $stuff_go,
            $stuff_id));
            $row_count = $update_stmt->rowCount();
            if ($row_count > 0 ) {
                echo $error;
            } else {
                echo $error;
            }

        } else {
        $name_image     = $_FILES['stuffavataredit']['name']; 
        $img_final_name =   rand(0,990000) . '_' . $name_image;
        $img_type       =  $_FILES['stuffavataredit']['type'];
        $img_tmp        =  $_FILES['stuffavataredit']['tmp_name'];
        $img_size       =  $_FILES['stuffavataredit']['size'];
        $img_extension  =   strtolower(end(explode('.', $name_image)));
        $img_id         =   intval($name_image);
        $img_extensions =  array("jpeg", "jpg", "png", "gif");
        if (in_array($img_extension, $img_extensions)) {
            move_uploaded_file($img_tmp,'../../../uploads/' . $img_final_name );
            $stmt = $conn->prepare("UPDATE users SET user_avatar = ? WHERE user_id = ?");
            $stmt->execute(array($img_final_name,$img_id));
           
        } else {
            echo "extension";
        }

        } 

    }