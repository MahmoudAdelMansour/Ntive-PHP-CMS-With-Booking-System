<div class="container-hospital-add">
  <div class="content-hospital">
    <div class="title-hospital">
      <h1>
        اضافة مستشفي جديدة
      </h1>
      <span>يظهر للعملاء في اختيارات الحجز</span>
    </div>
    <div class="saveAllchanges">
      <i class="fas fa-save fa-lg save-add-hospital save-all"></i>
      <i class="fas fa-undo fa-lg undo-add-hospital "></i>
    </div>
    <div class="formContainer">
      <form method="post" class="add-form" id="add-hospital-form" enctype="multipart/form-data">
        <div class="avaarea">
          <input class="add-hospital-input hospital-all-inputs up-input" type="file" name="hospitalavataradd" accept=".png,.gif,.jpg,.webp" placeholder="اختار صورة مناسبة" id="hospitalavataradd" autocomplete="off" />

          <img class="inputs-hospital-upload" src="images/avatar.png" alt="" srcset="">
          <span class="inputs-hospital-upload">اختيار صورة</span>
        </div>
        <input class="add-hospital-input hospital-all-inputs" type="text" name="hospitalnameadd" placeholder="اسم المستشفي" id="hospitalnameadd" autocomplete="off" require />
        <!-- *********** -->
        <textarea class="add-hospital-input hospital-all-inputs" name="hospitaldescadd" id="hospitaldescadd" placeholder="مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ "></textarea>
        <!-- *********** -->
        <!-- *********** -->
        <div class="radios-user">
          <label for="hospitalstatuson">قابل للحجز</label>
          <input class="add-hospital-input hospital-all-inputs" type="radio" name="hospitalstatus" placeholder="موظف" id="hospitalstatuson" autocomplete="off" require value="0" checked />
        </div>
        <!-- *********** -->
        <div class="radios-mng">
          <label for="hospitalstatusoff">غير قابل للحجز</label>
          <input class="add-hospital-input hospital-all-inputs" type="radio" name="hospitalstatus" placeholder="غير قابل للحجز" id="hospitalstatusoff" autocomplete="off" require value="1" />
        </div>
      </form>

    </div>

  </div>
</div>
<script src=" <?php echo $JS.'addhospitals.js'; ?>"></script>

<!-- 'hospitalname upload'
                'password          upload'
                    'bioword bioword'
                    'email section'
                    'fb twi'
                    'lin google'
                    'manager hospital' -->