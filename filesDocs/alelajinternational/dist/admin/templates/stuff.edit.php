<div class="container-stuff-edit">
  <div class="content-stuff">
    <div class="title-stuff">
      <h1>
        تعديل الموظفين
      </h1>
      <span>لا تترك حقول فارغه ليتم التعديل</span>
    </div>
    <div class="saveAllchanges">
      <i class="fas fa-save fa-lg save-edit-stuff save-all"></i>
      <i class="fas fa-undo fa-lg undo-edit-stuff "></i>
    </div>
    <div class="formContainer">
      <form method="post" class="edit-form" id="edit-stuff-form" enctype="multipart/form-data">
        <div class="avaarea">
          <input class="edit-stuff-input stuff-all-inputs up-input" type="file" name="stuffavataredit" accept=".png,.gif,.jpg,.webp" placeholder="اختار صورة مناسبة" id="stuffavataredit" autocomplete="off" />

          <img class="inputs-stuff-upload" src="images/avatar.png" alt="" srcset="">
          <span class="inputs-stuff-upload">اختيار صورة</span>
        </div>
        <input class="edit-stuff-input stuff-all-inputs" type="text" name="stuffnameedit" placeholder="اسم الموظف" id="stuffnameedit" autocomplete="off" require />
        <!-- *********** -->
        <input class="edit-stuff-input stuff-all-inputs" type="password" name="stuffpasswordedit" placeholder="كلمة المرور" id="stuffpasswordedit" autocomplete="off" require />
        <!-- *********** -->
        <textarea class="edit-stuff-input stuff-all-inputs" name="stuffwordedit" id="stuffwordadd" placeholder="مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ "></textarea>
        <!-- *********** -->
        <input class="edit-stuff-input stuff-all-inputs" type="email" name="stuffemailedit" placeholder="البريد الالكتروني" id="stuffemailedit" autocomplete="on" require />
        <!-- *********** -->
        <input class="edit-stuff-input stuff-all-inputs" type="text" name="stuffsectionedit" placeholder="موظف في قسم ؟" id="stuffsectionedit" autocomplete="off" require />
        <!-- *********** -->
        <input class="edit-stuff-input stuff-all-inputs" type="text" name="stufflinkeditfb" placeholder="رابط الفيسبوك" id="stufflinkeditfb" autocomplete="off" require />
        <!-- *********** -->
        <input class="edit-stuff-input stuff-all-inputs" type="text" name="stufflinkedittw" placeholder="رابط التويتر" id="stufflinkedittw" autocomplete="off" require />
        <!-- *********** -->
        <input class="edit-stuff-input stuff-all-inputs" type="text" name="stufflinkeditli" placeholder="رابط اللينكد ان" id="stufflinkeditli" autocomplete="off" require />
        <!-- *********** -->
        <input class="edit-stuff-input stuff-all-inputs" type="text" name="stufflinkeditgo" placeholder="رابط جوجل" id="stufflinkeditgo" autocomplete="off" require />
        <!-- *********** -->
        <?php 
                if (isset($_SESSION) && $_SESSION['user_perv']  == 1) {
                    ?>
        <div class="radios-user">
          <label for="stufflinkedituser">موظف</label>
          <input class="edit-stuff-input stuff-all-inputs" type="radio" name="stufflinkeditmng" placeholder="موظف" id="stufflinkedituser" autocomplete="off" require value="0" />
        </div>
        <!-- *********** -->
        <div class="radios-mng">
          <label for="stufflinkeditmng">مدير</label>
          <input class="edit-stuff-input stuff-all-inputs" type="radio" name="stufflinkeditmng" placeholder="مدير" id="stufflinkeditmng" autocomplete="off" require value="1" />
        </div>
        <?php
                } else { ?>
        <div class="radios-user" style="display:none;">
          <label for="stufflinkedituser"></label>
          <input class="edit-stuff-input stuff-all-inputs" type="radio" name="stufflinkeditmng" placeholder="موظف" id="stufflinkedituser" autocomplete="off" require value="0" disabled />
        </div>
        <!-- *********** -->
        <div class="radios-mng" style="display:none;">
          <label for="stufflinkeditmng"></label>
          <input class="edit-stuff-input stuff-all-inputs" type="radio" name="stufflinkeditmng" placeholder="" id="stufflinkeditmng" autocomplete="off" require value="0" disabled />
          <?php }
                                    
                    ?>
      </form>

    </div>
    <div class="hidden-load hidden">
      <i class="fad fa-spin fa-circle-notch"></i>
    </div>
  </div>
</div>
<script src=" <?php echo $JS.'editstuff.js'; ?>"></script>
<script src=" <?php echo $JS.'updatestuff.js'; ?>"></script>