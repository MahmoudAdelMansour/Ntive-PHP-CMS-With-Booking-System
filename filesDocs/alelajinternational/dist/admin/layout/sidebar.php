<?php

 if (isset($_SESSION) && $_SESSION['user_perv']  == 1) {
    ?>
<div data-sotre="in" class="sidebar">
  <div class="content-area">
    <div class="headOfside">
      <h1 class="c-headOfside">
        <a href="dashboard.php">لوحة التحكم</a>
      </h1>
    </div>
    <div class="menu">
      <ul class="linksmain">
        <li><a href="#" class="show">
            الصفحات
            <i class="fas fa-arrow-circle-left"></i>
          </a>
          <ul class="min-ul-pages child-links hideChild">
            <li>
              <a href="?page=pages&mainpages=chiefexecutiveofficer">
                الرئيس التنفيذي
              </a>
            </li>
            <li>
              <a href="?page=pages&mainpages=companiescare">
                رعاية المؤسسات
              </a>
            </li>
            <li>
              <a href="?page=pages&mainpages=stuffcompany">
                طاقم الشركة
              </a>
            </li>
          </ul>
        </li>
        <li><a href="#" class="show">
            التحكم
            <i class="fas fa-arrow-circle-left"></i>
          </a>
          <ul class="min-ul-management child-links hideChild">
            <li>
              <a href="?page=pages&mainpages=hospitals">
                المستشفيات والمواعيد
              </a></li>
            <li>
              <a href="?page=pages&mainpages=booking">
                الحجوزات
              </a></li>

          </ul>
        </li>
        <li>
          <ul class="colors-change">
            <li class="flatreddark" data-color="red"></li>
            <li class="purpledark" data-color="purple"></li>
            <li class="yellowlight" data-color="yellow"></li>
            <li class="deffault" data-color="deffault"></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</div>
<?php    
 }
 else {?>

<div data-sotre="in" class="sidebar">
  <div class="content-area">
    <div class="headOfside">
      <h1 class="c-headOfside">
        <a href="dashboard.php">لوحة التحكم</a>
      </h1>
    </div>
    <div class="menu">
      <ul class="linksmain">
        <li style="display:none;"><a href="#" class="show">
            لا تملك صلاحيات
            <i class="fas fa-arrow-circle-left"></i>
          </a>
          <ul style="display:none;" class="min-ul-pages child-links hideChild">
            <li>
              <a href="">

              </a>
            </li>
            <li>
              <a href="">

              </a>
            </li>
            <li>
              <a href="">

              </a>
            </li>
          </ul>
        </li>
        <li><a href="#" class="show">
            التحكم
            <i class="fas fa-arrow-circle-left"></i>
          </a>
          <ul class="min-ul-management child-links hideChild">
            <li>
              <a href="?page=pages&mainpages=hospitals">
                المستشفيات والمواعيد
              </a></li>
            <li>
              <a href="?page=pages&mainpages=booking">
                الحجوزات
              </a></li>

          </ul>
        </li>
        <li>
          <ul class="colors-change">
            <li class="flatreddark" data-color="red"></li>
            <li class="purpledark" data-color="purple"></li>
            <li class="yellowlight" data-color="yellow"></li>
            <li class="deffault" data-color="deffault"></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</div>
<?php } ?>