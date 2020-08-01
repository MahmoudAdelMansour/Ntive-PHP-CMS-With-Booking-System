<?php     
    ini_set('display_errors', 1);
    error_reporting(-1);

        
    //  Connect To Database
    require("management/config/connect_db_1220.php");
    // All Routs Of System
    $LAYOUT = "layout/";
    $PAGES  = "pages/";
    $TPL  = "templates/";
    $HELPERS  = "helpers/";
    $STYLE  = "css/";
    $JS     = "js/";
    $CONN   = "../../";
    // Functions File
    require("management/config/includes/functions.php");

?>