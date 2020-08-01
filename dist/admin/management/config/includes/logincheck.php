<?php 
session_start();
if (isset($_POST['login']) && $_SERVER['REQUEST_METHOD'] == 'POST') {
        function login() {
                require("../connect_db_1220.php");
                $user_name = htmlspecialchars(strtolower($_POST['username']), ENT_QUOTES);
                $user_pass = md5(htmlspecialchars($_POST['password'], ENT_QUOTES));
                // Statement
        $stmt = $conn->prepare("SELECT 
                                user_id , user_name , user_pass ,user_group
                                FROM users 
                                WHERE 
                                        user_name = ? 
                                        AND 
                                        user_pass = ? 
                                LIMIT 1 
                ");
                $stmt->execute(array($user_name,$user_pass));
                $row = $stmt->fetch();
                $resultCount = $stmt->rowCount();
                if($resultCount > 0) {
                        $_SESSION['user_perv'] = $row['user_group'];
                        $_SESSION['user'] = $user_name ;
                        $_SESSION['user_id'] = $row['user_id'];
                        
                        if ($_SESSION['user_id'] == $row['user_id']){
                                return $resultCount;
                        } else {
                                $_SESSION['user_id'] = $row['user_id'];
                        }
                        
                }
                else {
                return $resultCount;
                }

        }
         echo login();
        } else {
                // redirect it
        }
?>