<?php 
if(isset($_SESSION['user']) && !empty($_SESSION['user'])) {
    $subPages = (isset($_GET['subpages'])) ? $_GET['subpages'] : 'manage' ;
    switch ($subPages) {
        case "manage":
            include $TPL . 'booking.manage.php'; 
        break;
        case "add":
            include $TPL . 'booking.add.php';
        break;
        case "edit":
            include $TPL . 'booking.edit.php';
        break;
    }
}