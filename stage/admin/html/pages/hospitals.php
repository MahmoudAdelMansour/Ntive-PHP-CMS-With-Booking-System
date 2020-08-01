<?php 
if(isset($_SESSION['user']) && !empty($_SESSION['user'])) {
    $subPages = (isset($_GET['subpages'])) ? $_GET['subpages'] : 'manage' ;
    switch ($subPages) {
        case "manage":
            include $TPL . 'hospitals.manage.php'; 
        break;
        case "add":
            include $TPL . 'hospitals.add.php';
        break;
        case "edit":
            include $TPL . 'hospitals.edit.php';
        break;
    }
}