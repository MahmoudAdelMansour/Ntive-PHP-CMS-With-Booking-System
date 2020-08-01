<?php 
if (isset($_SESSION['user']) && !empty($_SESSION['user'])) {
    $subPages = (isset($_GET['subpages'])) ? $_GET['subpages'] : 'manage' ;
    switch ($subPages) {
        case "manage":
            include $TPL . 'companies.manage.php'; 
        break;
        case "add":
            include $TPL . 'companies.add.php';
        break;
        case "edit":
            include $TPL . 'companies.edit.php';
        break;
    }
}