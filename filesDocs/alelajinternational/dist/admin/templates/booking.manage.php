<section class="manage-booking">
  <div class="hidden-load ">
    <i class="fad fa-spin fa-circle-notch"></i>
  </div>
  <div class="content-manage">
    <div class="title-of-manage">
      <h1>ادارة الحجوزات</h1>
      <p>
        لديك عدد
        <span class="count-booking">1</span>
        حجوزات
      </p>
    </div>
    <div class="table-of-booking">
      <div class="table-add-button">
        <a href="?page=pages&mainpages=booking&subpages=add">
          <i class="fas fa-plus-circle fa-lg"></i>
        </a>
      </div>
      <table class="table-content">
        <tr>
          <td>ID#</td>
          <td>الحجز بأسم</td>
          <td>رقم الهاتف</td>
          <td>تاريخ الحجز</td>
          <td>مستشفي</td>
          <td>حالة الحجز</td>
          <td>اجراء</td>
        </tr>

      </table>
    </div>

  </div>
</section>
<script src=" <?php echo $JS.'hostbooking.js'; ?>"></script>
<script src=" <?php echo $JS.'getbookings.js'; ?>"></script>