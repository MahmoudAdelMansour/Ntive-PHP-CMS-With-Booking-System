<?php 
function getCount($selector,$table,$connecton) {
    $countIt = $connecton->prepare("SELECT $selector FROM $table");
    $countIt->execute();
    $countNow = $countIt->rowCount();
    return $countNow;
}
function getCountV2($selector,$table,$connecton,$whereStatement ,$equalOr = "=", $value) {
    $countItwo = $connecton->prepare("SELECT $selector FROM $table WHERE $whereStatement $equalOr :val");
    $countItwo->bindParam(":val",$value,PDO::PARAM_STR);
    $countItwo->execute();
    $rowfetchtwo = $countItwo->rowCount();
    return $rowfetchtwo;
} 
function getContentV2($selector,$table,$connecton,$whereStatement ,$equalOr = "=", $value) {
    $countIt = $connecton->prepare("SELECT $selector FROM $table WHERE $whereStatement $equalOr :val ");
    $countIt->bindParam(":val",$value,PDO::PARAM_STR);
    $countIt->execute();
    $rowfetch = $countIt->fetchAll();
    return $rowfetch;
}
function getContent($selector,$table,$connecton) {
    $countIt = $connecton->prepare("SELECT $selector FROM $table");
    $countIt->execute();
    $rowfetch = $countIt->fetchAll();
    return $rowfetch;
}
function insertData($table,$booking_name,$booking_phone,$booking_date,$booking_hospital,$connecton) {
    $always = 1;
     $stmt = $connecton->prepare("INSERT INTO 
                                $table(
                                    booking_name ,
                                    booking_phone ,
                                    booking_date ,
                                    booking_status,
                                    hospitals_id
                                    )
                                VALUES(
                                    :bname,
                                    :bphone,
                                    :bdate,
                                    :bstuts,
                                    :bhost
                                    )");
        $stmt->execute(array(
            'bname'     => $booking_name,
            'bphone'    => $booking_phone,
            'bdate'     => $booking_date,
            'bstuts'    => $always,
            'bhost'     => $booking_hospital
        ));
        $rowCountGet = $stmt->rowCount();
    return $rowCountGet;
}

?>