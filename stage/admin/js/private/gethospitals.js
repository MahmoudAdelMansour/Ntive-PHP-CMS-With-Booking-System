
let
tableParent = document.querySelector('.manage-hospital .table-content'),
counthospital = document.querySelector('.count-hospital');

const getTableData = () => {
let reQ = new XMLHttpRequest();
reQ.onreadystatechange = () => {

    if (reQ.readyState === 4 && reQ.status === 200) {
        let hasData = JSON.parse(reQ.responseText);
        counthospital.textContent = hasData.length;
        hasData.forEach(data => {
            
            let tableRow = document.createElement('tr'),
                tableData_id = document.createElement('td'),
                tableData_name = document.createElement('td'),
                tableData_status = document.createElement('td'),
                tableData_pic = document.createElement('td'),
                tableData_command = document.createElement('td');
            tableData_id.innerHTML = data['hospital_id'];
            tableData_name.innerHTML = data['hospital_name'];
            tableData_status.innerHTML = data['hospital_status'] == 1 ? `<a class="no-book" href="#">غير قابل للحجز</a>` :`<a href="#">قابل للحجز</a>` ;
            tableData_pic.innerHTML =`<img src="uploads/${data['hospital_avatar']}" alt="" srcset="">`;
            tableData_command.innerHTML =`<a class="edit-hospital" href="?page=pages&mainpages=hospitals&subpages=edit&hospital_id=${data['hospital_id']}">تعديل <i class="fas fa-edit"></i></a>
            <a class="delete-hospital" data-id="?page=pages&mainpages=hospitals&hospital_id=${data['hospital_id']}" href="#" >حذف <i class="fas fa-trash-alt"></i></i></a>`;
            
            // 
            tableRow.classList.add('table-data');
            tableRow.appendChild(tableData_id).setAttribute('data-id',data['hospital_id']);
            tableRow.appendChild(tableData_name);
            tableRow.appendChild(tableData_status);
            tableRow.appendChild(tableData_pic);
            tableRow.appendChild(tableData_command);
            
            
            tableParent.appendChild(tableRow);
            
        })
        setTimeout(() => {
            document.querySelector('.hidden-load').classList.add('hidden');
        }, 1000)
    }
}

reQ.open('POST', 'management/config/includes/gethospitalstable.php', true);
reQ.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
reQ.send();

}
document.querySelector('body').onload = getTableData();
// button
setTimeout(() => {
document.addEventListener('click',event =>{
    if(event.target.classList.contains('delete-hospital')){
        let knowDelete = confirm("هل انت متأكد ؟"),
            data_id     = event.target.getAttribute('data-id').slice(event.target.getAttribute('data-id').search(/\W[1-9]{1,}$/)+1);
        if(knowDelete == true) {
            let delReq = new XMLHttpRequest;
            delReq.onreadystatechange = () => {
                if (delReq.readyState === 4 && delReq.status === 200 ) {
                    if(delReq.responseText > 0 ){
                        let messages = document.createElement('p');
                        messages.classList.add('success','msg');
                        textOfMessage = document.createTextNode("تم : الحذف");
                        messages.appendChild(textOfMessage);
                        document.querySelector('.manage-hospital  .table-of-hospital').appendChild(messages);
                        setTimeout(()=>{
                            document.querySelector('.table-of-hospital').removeChild(messages);
                        },2000);
                        event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode);
                        counthospital.textContent -= 1 ;
                    } else {
                        let messages = document.createElement('p');
                        messages.classList.add('unsuccess','msg');
                        textOfMessage = document.createTextNode("خطأ : لم يتم الحذف");
                        messages.appendChild(textOfMessage);
                        document.querySelector('.manage-hospital .table-of-hospital').appendChild(messages);
                        setTimeout(()=>{
                            document.querySelector('.manage-hospital .table-of-hospital').removeChild(messages);
                        },2000);
                    }
                }
            }
            delReq.open('GET','management/config/includes/deletehospitals.php?hospital_id='+ data_id,true);
            delReq.send();
        } else {
            alert("تمام");
        }
}
})
//     let buttonDelete = document.querySelector('.delete-chief');
// buttonDelete.addEventListener("click", () => {

// });

},1000);
