<?php
 if (isset($_SESSION) && $_SESSION['user_perv']  <= 1) {
     
    ?>

<div class="main-section">
  <div class="dashbord">
    <div class="icon-section">
      <i class="fas fa-chair-office " aria-hidden="true"></i><br>
      <small>الرؤساء التنفيذين</small>
      <p class="ceo_dashboard">
        <?php echo getCount("*","ceo",$conn); ?>
      </p>
    </div>
    <a href="?page=pages&mainpages=chiefexecutiveofficer">
      <div class="detail-section">
        المزيد
      </div>
    </a>
  </div>
  <div class="dashbord dashbord-green">
    <div class="icon-section">
      <i class="fas fa-building" aria-hidden="true"></i><br>
      <small>المؤسسات</small>
      <p class="companies_dashboard">
        <?php echo getCount("*","com",$conn); ?>
      </p>
    </div>
    <a href="?page=pages&mainpages=companiescare">
      <div class="detail-section">
        المزيد
      </div>
    </a>
  </div>
  <div class="dashbord dashbord-orange">
    <div class="icon-section">
      <i class="fas fa-users-crown" aria-hidden="true"></i><br>
      <small>طاقم الشركة</small>
      <p class="stuff_dashboard">
        <?php echo getCount("*","users",$conn); ?>
      </p>
    </div>
    <a href="?page=pages&mainpages=stuffcompany">
      <div class="detail-section">
        المزيد
      </div>
    </a>
  </div>
  <div class="dashbord dashbord-blue">
    <div class="icon-section">
      <i class="fa fa-tasks" aria-hidden="true"></i><br>
      <small>الحجوزات</small>
      <p class="booking_dashboard">
        <?php echo getCount("*","booking",$conn); ?>

      </p>
    </div>
    <a href="?page=pages&mainpages=booking">
      <div class="detail-section">
        المزيد
      </div>
    </a>
  </div>
  <div class="dashbord dashbord-red">
    <div class="icon-section">
      <i class="fas fa-user-cog" aria-hidden="true"></i><br>
      <small>المديرين</small>
      <p class="managers_dashboard">
        <?php  echo getCountV2("*","users",$conn,"user_group" ,"=", '1'); ?>
      </p>
    </div>
    <a href="?page=pages&mainpages=chiefexecutiveofficer&subpages=edit&chief_id=1">
      <div class="detail-section">
        المزيد
      </div>
    </a>
  </div>
  <div class="dashbord dashbord-skyblue">
    <div class="icon-section">
      <i class="fas fa-hospital" aria-hidden="true"></i><br>
      <small>المستشفيات</small>
      <p class="hospitals_dashboard">
        <?php echo getCount("*","hospitals",$conn); ?>
      </p>
    </div>
    <a href="?page=pages&mainpages=hospitals">
      <div class="detail-section">

      </div>
      المزيد
    </a>
  </div>
</div>
<?php    
 }
 else {?>
<div class="main-section">

  <div class="dashbord dashbord-green">
    <div class="icon-section">
      <i class="fas fa-building" aria-hidden="true"></i><br>
      <small>المؤسسات</small>
      <p class="companies_dashboard">
        <?php echo getCount("*","com",$conn); ?>
      </p>
    </div>
  </div>
  <div class="dashbord dashbord-orange">
    <div class="icon-section">
      <i class="fas fa-users-crown" aria-hidden="true"></i><br>
      <small>طاقم الشركة</small>
      <p class="stuff_dashboard">
        <?php echo getCount("*","users",$conn); ?>
      </p>
    </div>
  </div>
  <div class="dashbord dashbord-blue">
    <div class="icon-section">
      <i class="fa fa-tasks" aria-hidden="true"></i><br>
      <small>الحجوزات</small>
      <p class="booking_dashboard">
        <?php echo getCount("*","booking",$conn); ?>
      </p>
    </div>
    <a href="?page=pages&mainpages=booking">
      <div class="detail-section">
        المزيد
      </div>
    </a>
  </div>
  <div class="dashbord dashbord-skyblue">
    <div class="icon-section">
      <i class="fas fa-hospital" aria-hidden="true"></i><br>
      <small>المستشفيات</small>
      <p class="hospitals_dashboard">
        <?php echo getCount("*","hospitals",$conn); ?>
      </p>
    </div>
    <a href="?page=pages&mainpages=hospitals">
      <div class="detail-section">

      </div>
      المزيد
    </a>
  </div>
</div>
<?php } ?>