<?php 
    session_start();
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        require("../connect_db_1220.php");
        // Data POST $ceo_data == 1
        if(isset($_POST['data']) && $_POST['data'] == 1 ){
            
            $data_num    = intval($_POST['data']);
            $chief_id    = intval($_POST['id']);
            $chief_name  = $_POST['chief_name'];
            $chief_title = $_POST['chief_title'];
            $chief_word  = $_POST['chief_word'];
            $error       = 0;
            if (empty($chief_name) || empty($chief_title)  || empty($chief_word)) {
                $error += 1 ;
            }
            // echo $error;\
            // echo $chief_word;
            $update_stmt = $conn->prepare("UPDATE ceo SET 
            ceo_name = ? , 
            ceo_aka = ? , 
            ceo_word = ? 
            WHERE ceo_id = ? ");
            $update_stmt->execute(array(
            $chief_name,
            $chief_title,
            $chief_word,
            $chief_id));
            $row_count = $update_stmt->rowCount();
            if ($row_count > 0 ) {
                echo $error;
            } else {
                echo $error;
            }

        } else {
        $name_image     = $_FILES['chiefavataredit']['name']; 
        $img_final_name =   rand(0,990000) . '_' . $name_image;
        $img_type       =  $_FILES['chiefavataredit']['type'];
        $img_tmp        =  $_FILES['chiefavataredit']['tmp_name'];
        $img_size       =  $_FILES['chiefavataredit']['size'];
        $img_extension  =   strtolower(end(explode('.', $name_image)));
        $img_id         =   intval($name_image);
        $img_extensions =  array("jpeg", "jpg", "png", "gif");
        if (in_array($img_extension, $img_extensions)) {
            move_uploaded_file($img_tmp,'../../../uploads/' . $img_final_name );
            $stmt = $conn->prepare("UPDATE ceo SET ceo_avatar = ? WHERE ceo_id = ?");
            $stmt->execute(array($img_final_name,$img_id));
           
        } else {
            echo "extension";
        }

        } 

    }