<div class="container-chief-edit">
  <div class="content-chief">
    <div class="title-chief">
      <h1>
        تعديل الرؤساء التنفيذين
      </h1>
      <span>التعديل علي الرؤساء الموجودين بالفعل </span>
    </div>
    <div class="saveAllchanges">
      <i class="fas fa-save fa-lg save-edit save-all"></i>
      <i class="fas fa-undo fa-lg undo-edit"></i>
    </div>
    <div class="formContainer">
      <form method="post" class="edit-form" id="edit-chief-form" enctype="multipart/form-data">
        <div class="avaarea">
          <input class="edit-chief-input up-input chief-all-inputs" type="file" name="chiefavataredit" placeholder="اختار صورة مناسبة" id="chiefavatarup" autocomplete="off" />

          <img class="inputs-chief-upload" src="images/avatar.png" alt="" srcset="">
          <span class="inputs-chief-upload">اختيار صورة</span>
        </div>
        <input class="edit-chief-input chief-all-inputs" type="text" name="chiefakaedit" placeholder="لقب الرئيس التنفيذي الجديد" id="chiefakaedit" autocomplete="off" />
        <input class="edit-chief-input chief-all-inputs" type="text" name="chiefnameedit" placeholder="اسم الرئيس التنفيذي الجديد" id="chiefnameedit" autocomplete="off" />
        <textarea class="edit-chief-input chief-all-inputs" name="ceowordedit" id="ceowordedit" placeholder="مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ "></textarea>

      </form>
    </div>
    <div class="hidden-load hidden">
      <i class="fad fa-spin fa-circle-notch"></i>
    </div>
  </div>
</div>
<script src=" <?php echo $JS.'editchief.js'; ?>"></script>
<script src=" <?php echo $JS.'updatechief.js'; ?>"></script>