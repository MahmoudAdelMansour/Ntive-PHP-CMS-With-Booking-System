<?php 

function getTitle() {
    global $pageTitle;
    // $pageTitle = (isset($pageTitle)) ? $pageTitle :  'a7a' ;
    if (isset($pageTitle)) {
        echo $pageTitle;
    } else {
        echo "Home";
    }
 
};
function getCount($selector,$table,$connecton) {
    $countIt = $connecton->prepare("SELECT $selector FROM $table");
    $countIt->execute();
    $countNow = $countIt->rowCount();
    return $countNow;
}

function getCountV2($selector,$table,$connecton,$whereStatement ,$equalOr = "=", $value) {
    $countIt = $connecton->prepare("SELECT $selector FROM $table WHERE $whereStatement $equalOr $value ");
    $countIt->execute();
    $countNow = $countIt->rowCount();
    return $countNow;
}