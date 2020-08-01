        <?php 
        session_start();
        $pageTitle = $_GET['mainpages'];
        if(isset($_SESSION['user']) && !empty($_SESSION['user'])){
                include 'management/config/includes/init.php' ;
                include $LAYOUT . 'header.php';
                include $LAYOUT . 'bodyMainDash.php';
                include $LAYOUT . 'sidebar.php'; 
                include $LAYOUT . 'leftPage.php';
                $pageSplit = (isset($_GET['page'])) ? $_GET['page'] : 'dashboard' ;
                switch ($pageSplit) {
                        case "pages" :
                                $mainPages = (isset($_GET['mainpages'])) ? $_GET['mainpages'] : 'chiefexecutiveofficer' ;
                                switch ($mainPages) {
                                        case "chiefexecutiveofficer" :
                                                
                                                include $PAGES . 'chief.php';
                                        break;
                                        case "companiescare" :

                                                include $PAGES . 'companies.php';
                                        break;
                                        case "stuffcompany" :
                                                include $PAGES . 'stuff.php';                                        
                                        break;
                                        case "hospitals" :
                                                include $PAGES . 'hospitals.php';                                        
                                        break;
                                        case "booking" :
                                                include $PAGES . 'booking.php';                                        
                                        break;
                                }
                        break;
                        case "manage" :
                                include $PAGES . 'manage.php';
                        break;
                        default:
                        include $PAGES . 'manage.php';
                }
                include $LAYOUT . 'footer.php'; 
        } else {
                header("Location:index.php?redirect=nth");
                exit();
        }
        ?>