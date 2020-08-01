<div class="container-companies-edit">
    <div class="content-companies">
        <div class="title-companies">
            <h1>
                تعديل الشركات المدعومة
            </h1>
            <span>التعديل علي الشركات الموجوده بالفعل </span>
        </div>
        <div class="saveAllchanges">
            <i class="fas fa-save fa-lg save-edit-companies save-all"></i>
            <i class="fas fa-undo fa-lg undo-edit-companies "></i>
        </div>
        <div class="formContainer">
            <form method="post" class="edit-form" id="edit-companies-form" enctype="multipart/form-data">
                <div class="avaarea">
                    <input class="edit-companies-input up-input companies-all-inputs" type="file"
                        name="companiesavataredit" placeholder="اختار صورة مناسبة" id="companiesavatarup"
                        autocomplete="off" />

                    <img class="inputs-companies-upload" src="images/avatar.png" alt="" srcset="">
                    <span class="inputs-companies-upload">اختيار صورة</span>
                </div>
                <input class="edit-companies-input companies-all-inputs" type="text" name="companiesnameedit"
                    placeholder="اسم الشركة الجديد" id="companiesnameedit" autocomplete="off" />
                <input class="edit-companies-input companies-all-inputs" type="text" name="companieslinkedit"
                    placeholder="رابط الشركة الجديد" id="companieslinkedit" autocomplete="off" />

            </form>
        </div>
        <div class="hidden-load hidden">
            <i class="fad fa-spin fa-circle-notch"></i>
        </div>
    </div>
</div>
<script src=" <?php echo $JS.'editcompanies.js'; ?>"></script>
<script src=" <?php echo $JS.'updatecompanies.js'; ?>"></script>