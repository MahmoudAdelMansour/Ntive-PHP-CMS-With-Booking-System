let
  tableParent = document.querySelector('.manage-booking .table-content'),
  countbooking = document.querySelector('.companies_dashboard') == null ? document.querySelector('.count-booking') : document.querySelector('.companies_dashboard');

const getTableData = () => {
  let reQ = new XMLHttpRequest();
  reQ.onreadystatechange = () => {

    if (reQ.readyState === 4 && reQ.status === 200) {
      let hasData = JSON.parse(reQ.responseText);
      countbooking.textContent = hasData.length;
      hasData.forEach(data => {
        let tableRow = document.createElement('tr'),
          tableData_id = document.createElement('td'),
          tableData_name = document.createElement('td'),
          tableData_phone = document.createElement('td'),
          tableData_date = document.createElement('td'),
          tableData_hospital = document.createElement('td'),
          tableData_status = document.createElement('td'),
          tableData_command = document.createElement('td');
        tableData_hospital.setAttribute('hospitals', data['hospitals_id']);
        tableData_hospital.classList.add('hospitalbook');
        tableData_id.innerHTML = data['booking_id'];
        tableData_name.innerHTML = data['booking_name'];
        tableData_phone.innerHTML = `${data['booking_phone']} - 0`;
        tableData_date.innerHTML = data['booking_date'];
        tableData_status.innerHTML = data['booking_status'] == 1 ? `<a class="no-book" href="#">غير مفعل</a>` : `<a href="#">مفعل</a>`;
        tableData_command.innerHTML = `<a class="edit-hospital" href="?page=pages&mainpages=booking&subpages=edit&booking_id=${data['booking_id']}">تعديل <i class="fas fa-edit"></i></a>
            <a class="delete-booking" data-id="?page=pages&mainpages=booking&hbooking_id=${data['booking_id']}" href="#" >حذف <i class="fas fa-trash-alt"></i></i></a>`;

        // 
        tableRow.classList.add('table-data');
        tableRow.appendChild(tableData_id).setAttribute('data-id', data['booking_id']);
        tableRow.appendChild(tableData_name);
        tableRow.appendChild(tableData_phone);
        tableRow.appendChild(tableData_date);
        tableRow.appendChild(tableData_hospital);
        tableRow.appendChild(tableData_status);
        tableRow.appendChild(tableData_command);


        tableParent.appendChild(tableRow);

      })
      setTimeout(() => {
        document.querySelector('.hidden-load').classList.add('hidden');
      }, 20)
    }
  }

  reQ.open('POST', 'management/config/includes/getbookingtable.php', true);
  reQ.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  reQ.send();

}
document.querySelector('body').onload = getTableData();
// button
setTimeout(() => {
  document.addEventListener('click', event => {

    if (event.target.classList.contains('delete-booking')) {
      let knowDelete = confirm("هل انت متأكد ؟"),
        data_id = event.target.getAttribute('data-id').slice(event.target.getAttribute('data-id').search(/\W[1-9]{1,}$/) + 1);
      if (knowDelete == true) {
        let delReq = new XMLHttpRequest;
        delReq.onreadystatechange = () => {
          if (delReq.readyState === 4 && delReq.status === 200) {
            if (delReq.responseText > 0) {
              let messages = document.createElement('p');
              messages.classList.add('success', 'msg');
              textOfMessage = document.createTextNode("تم : الحذف");
              messages.appendChild(textOfMessage);
              document.querySelector('.manage-booking  .table-of-booking').appendChild(messages);
              setTimeout(() => {
                document.querySelector('.table-of-booking').removeChild(messages);
              }, 2000);
              event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode);
              countbooking.textContent -= 1;
            } else {
              let messages = document.createElement('p');
              messages.classList.add('unsuccess', 'msg');
              textOfMessage = document.createTextNode("خطأ : لم يتم الحذف");
              messages.appendChild(textOfMessage);
              document.querySelector('.manage-booking .table-of-booking').appendChild(messages);
              setTimeout(() => {
                document.querySelector('.manage-booking .table-of-booking').removeChild(messages);
              }, 2000);
            }
          }
        }
        delReq.open('GET', 'management/config/includes/deletebooking.php?booking_id=' + data_id, true);
        delReq.send();
      } else {
        alert("تمام");
      }
    }
  })
  //     let buttonDelete = document.querySelector('.delete-chief');
  // buttonDelete.addEventListener("click", () => {

  // });

}, 1000);