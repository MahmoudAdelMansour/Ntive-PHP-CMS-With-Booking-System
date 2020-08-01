<div class="container-chief-add">
  <div class="content-chief">
    <div class="title-chief">
      <h1>
        اضافة رئيس تنفيذي جديد
      </h1>
      <span>تظهر في صفحة المدير التنفيذي بشكل عامودي</span>
    </div>
    <div class="saveAllchanges">
      <i class="fas fa-save fa-lg save-add save-all"></i>
      <i class="fas fa-undo fa-lg undo-add "></i>
    </div>
    <div class="formContainer">
      <form method="post" class="add-form" id="add-chief-form" enctype="multipart/form-data">
        <div class="avaarea">
          <input class="add-chief-input chief-all-inputs up-input" type="file" name="chiefavataradd" accept=".png,.gif,.jpg,.webp" placeholder="اختار صورة مناسبة" id="chiefavataradd" autocomplete="off" />

          <img class="inputs-chief-upload" src="images/avatar.png" alt="" srcset="">
          <span class="inputs-chief-upload">اختيار صورة</span>
        </div>
        <input class="add-chief-input chief-all-inputs" type="text" name="chiefakaedd" placeholder="لقب الرئيس التنفيذي " id="chiefakaadd" autocomplete="off" />
        <input class="add-chief-input chief-all-inputs" type="text" name="chiefnamedd" placeholder="اسم الرئيس التنفيذي " id="chiefnamedd" autocomplete="off" />
        <textarea class="add-chief-input chief-all-inputs" name="ceowordadd" id="ceowordedit" placeholder="مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ "></textarea>

      </form>

    </div>

  </div>
</div>
<script src=" <?php echo $JS.'addchief.js'; ?>"></script>