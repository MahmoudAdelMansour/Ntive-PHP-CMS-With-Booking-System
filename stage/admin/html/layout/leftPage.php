<section class="dashHeader">

    <div class="menuOfHead">
        <i data-sotre="on" class="fas fa-toggle-on fa-lg toggle-side"></i>
        <i data-sotre="empty" class="fas fa-bell fa-lg toggle-noti"></i>
        <i data-sotre="empty" class="fas fa-expand-alt fa-lg toggle-fullscreen "></i>
        <div class="notificationHead" style="display:none;">
            <ul class="notifi">
                <li class="menu-noti-head">الاشعارات</li>
                <li>
                    قام حمادة بطلب نشر منشور
                </li>
                <li>
                    طلب اضافة موظف جديد
                </li>
                <li>
                    حمادة عايز ينشر منشور تاني
                </li>
            </ul>
        </div>
        <div class="profile-avatar">
            <div class="avatar-img">
            
                    <i data-sotre="empty" class="fad fa-user-tie fa-lg toggle-user"></i>
                
                <ul class="menu-avatar ">
                    <li>
                        <a href="?page=pages&mainpages=stuffcompany&subpages=edit&user_id=<?php echo $_SESSION['user_id'];?>">
                            تعديل بياناتي
                        </a>
                    </li>
                    <li>
                        <a href="management/logout.php">
                            تسجيل الخروج
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>
