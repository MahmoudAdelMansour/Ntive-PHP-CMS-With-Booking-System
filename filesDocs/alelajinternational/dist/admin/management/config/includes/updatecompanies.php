<?php 
    session_start();
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        require("../connect_db_1220.php");
        // Data POST $ceo_data == 1
        if(isset($_POST['data']) && $_POST['data'] == 1 ){
            
            $data_num    = intval($_POST['data']);
            $comapnies_id    = intval($_POST['id']);
            $comapnies_name  = $_POST['companies_name'];
            $comapnies_link = $_POST['companies_link'];
            $error       = 0;
            if (empty($comapnies_name) || empty($comapnies_link) ) {
                $error += 1 ;
            }
            // echo $error;\
            // echo $chief_word;
            $update_stmt = $conn->prepare("UPDATE com SET 
            com_name = ? , 
            ceo_link = ? 
            WHERE com_id = ? ");
            $update_stmt->execute(array(
            $comapnies_name,
            $comapnies_link,
            $comapnies_id));
            $row_count = $update_stmt->rowCount();
            if ($row_count > 0 ) {
                echo $error;
            } else {
                echo $error;
            }

        } else {
        $name_image     = $_FILES['companiesavataredit']['name']; 
        $img_final_name =   rand(0,990000) . '_' . $name_image;
        $img_type       =  $_FILES['companiesavataredit']['type'];
        $img_tmp        =  $_FILES['companiesavataredit']['tmp_name'];
        $img_size       =  $_FILES['companiesavataredit']['size'];
        $img_extension  =   strtolower(end(explode('.', $name_image)));
        $img_id         =   intval($name_image);
        $img_extensions =  array("jpeg", "jpg", "png", "gif");
        if (in_array($img_extension, $img_extensions)) {
            move_uploaded_file($img_tmp,'../../../uploads/' . $img_final_name );
            $stmt = $conn->prepare("UPDATE com SET com_avatar = ? WHERE com_id = ?");
            $stmt->execute(array($img_final_name,$img_id));
           
        } else {
            echo "extension";
        }

        } 

    }