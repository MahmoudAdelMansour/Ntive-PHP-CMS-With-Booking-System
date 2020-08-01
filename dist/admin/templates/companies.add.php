<div class="container-companies-add">
  <div class="content-companies">
    <div class="title-companies">
      <h1>
        دعم شركة جديدة
      </h1>
      <span>تظهر في صفحة الشركات المدعومة بشكل رأسي</span>
    </div>
    <div class="saveAllchanges">
      <i class="fas fa-save fa-lg save-add-companies save-all"></i>
      <i class="fas fa-undo fa-lg undo-add-companies "></i>
    </div>
    <div class="formContainer">
      <form method="post" class="add-form" id="add-companies-form" enctype="multipart/form-data">
        <div class="avaarea">
          <input class="add-companies-input companies-all-inputs up-input" type="file" name="companiesavataradd" accept=".png,.gif,.jpg,.webp" placeholder="اختار صورة مناسبة" id="companiesavataradd" autocomplete="off" />

          <img class="inputs-companies-upload" src="images/avatar.png" alt="" srcset="">
          <span class="inputs-companies-upload">اختيار صورة</span>
        </div>
        <input class="add-companies-input companies-all-inputs" type="text" name="companiesnameadd" placeholder="اسم الشركة" id="companiesnameadd" autocomplete="off" />
        <input class="add-companies-input companies-all-inputs" type="text" name="companieslinkadd" placeholder="رابط الشركة" id="companieslinkadd" autocomplete="off" />

      </form>

    </div>

  </div>
</div>
<script src=" <?php echo $JS.'addcompanies.js'; ?>"></script>