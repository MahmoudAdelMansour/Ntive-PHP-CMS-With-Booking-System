<?php 
if (isset($_SESSION['user']) && !empty($_SESSION['user'])) {
    $subPages = (isset($_GET['subpages'])) ? $_GET['subpages'] : 'manage' ;
    switch ($subPages) {
        case "manage":
            include $TPL . 'stuff.manage.php'; 
        break;
        case "add":
            include $TPL . 'stuff.add.php'; 
        break;
        case "edit":
            include $TPL . 'stuff.edit.php'; 
        break;
    }
}