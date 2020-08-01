<div class="container-stuff-add">
  <div class="content-stuff">
    <div class="title-stuff">
      <h1>
        اضافة موظف جديد
      </h1>
      <span>يظهر ملفه الشخصي في صفحة الموظفين</span>
    </div>
    <div class="saveAllchanges">
      <i class="fas fa-save fa-lg save-add-stuff save-all"></i>
      <i class="fas fa-undo fa-lg undo-add-stuff "></i>
    </div>
    <div class="formContainer">
      <form method="post" class="add-form" id="add-stuff-form" enctype="multipart/form-data">
        <div class="avaarea">
          <input class="add-stuff-input stuff-all-inputs up-input" type="file" name="stuffavataradd" accept=".png,.gif,.jpg,.webp" placeholder="اختار صورة مناسبة" id="stuffavataradd" autocomplete="off" />

          <img class="inputs-stuff-upload" src="images/avatar.png" alt="" srcset="">
          <span class="inputs-stuff-upload">اختيار صورة</span>
        </div>
        <input class="add-stuff-input stuff-all-inputs" type="text" name="stuffnameadd" placeholder="اسم الموظف" id="stuffnameadd" autocomplete="off" require />
        <!-- *********** -->
        <input class="add-stuff-input stuff-all-inputs" type="password" name="stuffpasswordadd" placeholder="كلمة المرور" id="stuffpasswordadd" autocomplete="off" require />
        <!-- *********** -->
        <textarea class="add-stuff-input stuff-all-inputs" name="stuffwordadd" id="stuffwordadd" placeholder="مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ "></textarea>
        <!-- *********** -->
        <input class="add-stuff-input stuff-all-inputs" type="email" name="stuffemailadd" placeholder="البريد الالكتروني" id="stuffemailadd" autocomplete="on" require />
        <!-- *********** -->
        <input class="add-stuff-input stuff-all-inputs" type="text" name="stuffsectionadd" placeholder="موظف في قسم ؟" id="stuffsectionadd" autocomplete="off" require />
        <!-- *********** -->
        <input class="add-stuff-input stuff-all-inputs" type="text" name="stufflinkaddfb" placeholder="رابط الفيسبوك" id="stufflinkaddfb" autocomplete="off" require />
        <!-- *********** -->
        <input class="add-stuff-input stuff-all-inputs" type="text" name="stufflinkaddtw" placeholder="رابط التويتر" id="stufflinkaddtw" autocomplete="off" require />
        <!-- *********** -->
        <input class="add-stuff-input stuff-all-inputs" type="text" name="stufflinkaddli" placeholder="رابط اللينكد ان" id="stufflinkaddli" autocomplete="off" require />
        <!-- *********** -->
        <input class="add-stuff-input stuff-all-inputs" type="text" name="stufflinkaddgo" placeholder="رابط جوجل" id="stufflinkaddgo" autocomplete="off" require />
        <!-- *********** -->
        <div class="radios-user">
          <label for="stufflinkadduser">موظف</label>
          <input class="add-stuff-input stuff-all-inputs" type="radio" name="stufflinkaddmng" placeholder="موظف" id="stufflinkadduser" autocomplete="off" require value="0" />
        </div>
        <!-- *********** -->
        <div class="radios-mng">
          <label for="stufflinkaddmng">مدير</label>
          <input class="add-stuff-input stuff-all-inputs" type="radio" name="stufflinkaddmng" placeholder="مدير" id="stufflinkaddmng" autocomplete="off" require value="1" />
        </div>
      </form>

    </div>

  </div>
</div>
<script src=" <?php echo $JS.'addstuff.js'; ?>"></script>

<!-- 'stuffname upload'
                'password          upload'
                    'bioword bioword'
                    'email section'
                    'fb twi'
                    'lin google'
                    'manager stuff' -->