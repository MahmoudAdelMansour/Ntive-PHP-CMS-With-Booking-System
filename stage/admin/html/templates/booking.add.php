<div class="container-booking-add">
    <div class="content-booking">
        <div class="title-booking">
            <h1>
                اضافة حجز جديد
            </h1>
            <span>حجز خاص بالعملاء</span>
        </div>
        <div class="saveAllchanges">
            <i class="fas fa-save fa-lg save-add-booking save-all"></i>
            <i class="fas fa-undo fa-lg undo-add-booking "></i>
        </div>
        <div class="formContainer">
            <form method="post" class="add-form" id="add-booking-form" enctype="multipart/form-data">
                <!-- <div class="avaarea">
                    <input class="add-booking-input booking-all-inputs up-input" type="file" name="bookingavataradd"
                        accept=".png,.gif,.jpg,.webp" placeholder="اختار صورة مناسبة" id="bookingavataradd"
                        autocomplete="off" />

                    <img class="inputs-booking-upload" src="images/avatar.png" alt="" srcset="">
                    <span class="inputs-booking-upload">اختيار صورة</span>
                </div> -->
                <input class="add-booking-input booking-all-inputs" type="text" name="bookingnameadd" placeholder="اسم الحجز"
                    id="bookingnameadd" autocomplete="off" require />
                <!-- *********** -->
                <input class="add-booking-input booking-all-inputs" type="tel" name="bookingphoneadd" placeholder="رقم الهاتف"
                    id="bookingphoneadd" autocomplete="off" pattern="[0-9]{3}[0-9]{3}[0-9]{3}[0-9]{2}" />
                <!-- *********** -->
                <input class="add-booking-input booking-all-inputs" type="date" name="bookingdateadd" placeholder="تاريخ الحجز"
                    id="bookingdateadd" autocomplete="off" />
                      <!-- *********** -->
                    <input class="add-booking-input booking-all-inputs" type="time" name="bookingtimeadd" placeholder="وقت الحجز"
                    id="bookingtimeadd" autocomplete="off" value="<?php echo date("h:i"); ?>" />
                <!-- *********** -->
                <select name="bookingHospitals" id="bookingHospitals" required>
                    <option value="null">اختيار مستشفي</option>
                </select>
                <!-- *********** -->

                <div class="radios-user">
                <label for="bookingstatuson">مفعل</label>
                <input class="add-booking-input booking-all-inputs" type="radio" name="bookingstatus" placeholder="مفعل"
                    id="bookingstatuson" autocomplete="off"  require  value="0" checked/>
                </div>
                <!-- *********** -->
                <div class="radios-mng">
                <label for="bookingstatusoff">غير مفعل</label>
                <input class="add-booking-input booking-all-inputs" type="radio" name="bookingstatus" placeholder="غير مفعل"
                    id="bookingstatusoff" autocomplete="off"  require value="1"/>
                    </div>
            </form>
        </div>

    </div>
</div>
<script src=" <?php echo $JS.'addbooking.js'; ?>"></script>
<script src=" <?php echo $JS.'databooking.js'; ?>"></script>