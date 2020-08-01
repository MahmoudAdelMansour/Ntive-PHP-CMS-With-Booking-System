let
  tableParent = document.querySelector('.table-content'),
  countchief = document.querySelector('.count-chief');

const getTableData = () => {
  let reQ = new XMLHttpRequest();
  reQ.onreadystatechange = () => {

    if (reQ.readyState === 4 && reQ.status === 200) {
      let hasData = JSON.parse(reQ.responseText);
      countchief.textContent = hasData.length;
      hasData.forEach(data => {

        let tableRow = document.createElement('tr'),
          tableData_id = document.createElement('td'),
          tableData_name = document.createElement('td'),
          tableData_title = document.createElement('td'),
          tableData_pic = document.createElement('td'),
          tableData_command = document.createElement('td');
        tableData_id.innerHTML = data['ceo_id'];
        tableData_name.innerHTML = data['ceo_name'];
        tableData_title.innerHTML = data['ceo_aka'];
        tableData_pic.innerHTML = `<img src="uploads/${data['ceo_avatar']}" alt="" srcset="">`;
        tableData_command.innerHTML = `<a class="edit-chief" href="?page=pages&mainpages=chiefexecutiveofficer&subpages=edit&chief_id=${data['ceo_id']}">تعديل <i class="fas fa-edit"></i></a>
                <a class="delete-chief" data-id="?page=pages&mainpages=chiefexecutiveofficer&chief_id=${data['ceo_id']}" href="#" >حذف <i class="fas fa-trash-alt"></i></i></a>`;

        // 
        tableRow.classList.add('table-data');
        tableRow.appendChild(tableData_id).setAttribute('data-id', data['ceo_id']);
        tableRow.appendChild(tableData_name);
        tableRow.appendChild(tableData_title);
        tableRow.appendChild(tableData_pic);
        tableRow.appendChild(tableData_command);


        tableParent.appendChild(tableRow);

      })
      setTimeout(() => {
        document.querySelector('.hidden-load').classList.add('hidden');
      }, 1000)
    }
  }

  reQ.open('POST', 'management/config/includes/getchieftable.php', true);
  reQ.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  reQ.send();

}
document.querySelector('body').onload = getTableData();
// button
setTimeout(() => {
  document.addEventListener('click', event => {
    console.log();
    if (event.target.classList.contains('delete-chief')) {
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
              document.querySelector('.table-of-chief').appendChild(messages);
              setTimeout(() => {
                document.querySelector('.table-of-chief').removeChild(messages);
              }, 2000);
              event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode);
              countchief.textContent -= 1;
            } else {
              let messages = document.createElement('p');
              messages.classList.add('unsuccess', 'msg');
              textOfMessage = document.createTextNode("خطأ : لم يتم الحذف");
              messages.appendChild(textOfMessage);
              document.querySelector('.table-of-chief').appendChild(messages);
              setTimeout(() => {
                document.querySelector('.table-of-chief').removeChild(messages);
              }, 2000);
            }
          }
        }
        delReq.open('GET', 'management/config/includes/deletechief.php?chief_id=' + data_id, true);
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