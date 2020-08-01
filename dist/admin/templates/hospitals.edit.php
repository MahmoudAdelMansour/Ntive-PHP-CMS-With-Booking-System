<div class="container-hospital-edit">
  <div class="content-hospital">
    <div class="title-hospital">
      <h1>
        تعديل المستشفيات
      </h1>
      <span>تعديل المستشفي قد يحذف الحجوزات</span>
    </div>
    <div class="saveAllchanges">
      <i class="fas fa-save fa-lg save-edit-hospital save-all"></i>
      <i class="fas fa-undo fa-lg undo-edit-hospital "></i>
    </div>
    <div class="formContainer">
      <form method="post" class="edit-form" id="edit-hospital-form" enctype="multipart/form-data">
        <div class="avaarea">
          <input class="edit-hospital-input hospital-all-inputs up-input" type="file" name="hospitalavataredit" accept=".png,.gif,.jpg,.webp" placeholder="اختار صورة مناسبة" id="hospitalavataredit" autocomplete="off" />

          <img class="inputs-hospital-upload" src="images/avatar.png" alt="" srcset="">
          <span class="inputs-hospital-upload">اختيار صورة</span>
        </div>
        <input class="edit-hospital-input hospital-all-inputs" type="text" name="hospitalnameedit" placeholder="اسم المستشفي الجديد" id="hospitalnameedit" autocomplete="off" require />
        <!-- *********** -->
        <textarea class="edit-hospital-input hospital-all-inputs" name="hospitaldescedit" id="hospitaldescedit" placeholder="مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ "></textarea>
        <!-- *********** -->
        <!-- *********** -->
        <div class="radios-user">
          <label for="hospitalstatuson">قابل للحجز</label>
          <input class="edit-hospital-input hospital-all-inputs" type="radio" name="hospitalstatus" placeholder="موظف" id="hospitalstatuson" autocomplete="off" require value="0" checked />
        </div>
        <!-- *********** -->
        <div class="radios-mng">
          <label for="hospitalstatusoff">غير قابل للحجز</label>
          <input class="edit-hospital-input hospital-all-inputs" type="radio" name="hospitalstatus" placeholder="غير قابل للحجز" id="hospitalstatusoff" autocomplete="off" require value="1" />
        </div>
      </form>

    </div>
    <div class="hidden-load hidden">
      <i class="fad fa-spin fa-circle-notch"></i>
    </div>
  </div>
</div>
<script src=" <?php echo $JS.'edithospitals.js'; ?>"></script>
<script src=" <?php echo $JS.'updatehospitals.js'; ?>"></script>