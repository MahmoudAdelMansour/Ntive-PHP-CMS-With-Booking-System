            <?php $pageTitle = "Login"; ?>
            <?php include 'management/config/includes/init.php' ?>
            <?php include $LAYOUT . 'header.php';  ?>
            <?php include $LAYOUT . 'bodyMain.php'; ?>
            <!-- The Page Content -->
            <?php include $LAYOUT . 'login.php'; ?>
            <!-- End Of Page Content -->
            <?php include $LAYOUT . 'footer.php'; ?>
            <script src=" <?php echo $JS.'checklogin.js'; ?>"></script>