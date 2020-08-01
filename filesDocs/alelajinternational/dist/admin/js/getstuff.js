let
  tableParent = document.querySelector('.manage-stuff .table-content'),
  countstuff = document.querySelector('.count-stuff');

const getTableData = () => {
  let reQ = new XMLHttpRequest();
  reQ.onreadystatechange = () => {

    if (reQ.readyState === 4 && reQ.status === 200) {
      let hasData = JSON.parse(reQ.responseText);
      countstuff.textContent = hasData.length;
      hasData.forEach(data => {

        let tableRow = document.createElement('tr'),
          tableData_id = document.createElement('td'),
          tableData_name = document.createElement('td'),
          tableData_section = document.createElement('td'),
          tableData_pic = document.createElement('td'),
          tableData_command = document.createElement('td');
        tableData_id.innerHTML = data['user_id'];
        tableData_name.innerHTML = data['user_name'];
        tableData_section.innerHTML = data['section'];
        tableData_pic.innerHTML = `<img src="uploads/${data['user_avatar']}" alt="" srcset="">`;
        tableData_command.innerHTML = `<a class="edit-stuff" href="?page=pages&mainpages=stuffcompany&subpages=edit&user_id=${data['user_id']}">تعديل <i class="fas fa-edit"></i></a>
            <a class="delete-stuff" data-id="?page=pages&mainpages=stuffcompany&stuff_id=${data['user_id']}" href="#" >حذف <i class="fas fa-trash-alt"></i></i></a>`;

        // 
        tableRow.classList.add('table-data');
        tableRow.appendChild(tableData_id).setAttribute('data-id', data['com_id']);
        tableRow.appendChild(tableData_name);
        tableRow.appendChild(tableData_section);
        tableRow.appendChild(tableData_pic);
        tableRow.appendChild(tableData_command);


        tableParent.appendChild(tableRow);

      })
      setTimeout(() => {
        document.querySelector('.hidden-load').classList.add('hidden');
      }, 1000)
    }
  }

  reQ.open('POST', 'management/config/includes/getstufftable.php', true);
  reQ.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  reQ.send();

}
document.querySelector('body').onload = getTableData();
// button
setTimeout(() => {
  document.addEventListener('click', event => {
    if (event.target.classList.contains('delete-stuff')) {
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
              document.querySelector('.manage-stuff  .table-of-stuff').appendChild(messages);
              setTimeout(() => {
                document.querySelector('.table-of-stuff').removeChild(messages);
              }, 2000);
              event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode);
              countstuff.textContent -= 1;
            } else {
              let messages = document.createElement('p');
              messages.classList.add('unsuccess', 'msg');
              textOfMessage = document.createTextNode("خطأ : لم يتم الحذف");
              messages.appendChild(textOfMessage);
              document.querySelector('.manage-stuff .table-of-stuff').appendChild(messages);
              setTimeout(() => {
                document.querySelector('.manage-stuff .table-of-stuff').removeChild(messages);
              }, 2000);
            }
          }
        }
        delReq.open('GET', 'management/config/includes/deletestuff.php?stuff_id=' + data_id, true);
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