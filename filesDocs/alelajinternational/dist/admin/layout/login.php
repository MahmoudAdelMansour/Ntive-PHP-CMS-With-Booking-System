<?php
session_start();
if(isset($_SESSION['user'])){
    header("Location:dashboard.php");
    
}
?>
<section class="loginform-area">
  <div class="content-form">
    <div class="inside-form">
      <h1>تسجيل الدخول</h1>
      <form method="post" class="login-form" id="login-form">
        <input type="text" name="username" placeholder="أسم المستخدم" id="username" autocomplete="off" />
        <input type="password" name="password" placeholder="كلمة المرور" id="password" autocomplete="off" />
      </form>
      <!-- form="login-form -->
      <button class="login-button" id="login-button">دخول</button>
    </div>
  </div>
</section>