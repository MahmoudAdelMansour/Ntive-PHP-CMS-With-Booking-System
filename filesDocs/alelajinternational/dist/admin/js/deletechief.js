let buttonDelete = document.querySelector('.delete-chief');
buttonDelete.addEventListener("click", () => {
  let knowDelete = confirm("هل انت متأكد ؟");
  if (knowDelete == true) {
    let delReq = new XMLHttpRequest;
    delReq.onreadystatechange = () => {
      if (delReq.readyState === 4 && delReq.status === 200) {
        console.log(delReq.responseText);
        if (delReq.responseText > 0) {

        } else {
          let messages = document.createElement('p');
          messages.classList.add('unsuccess', 'msg');
          textOfMessage = document.createTextNode("خطأ : لم يتم الحذف");
          messages.appendChild(textOfMessage);
          document.querySelector('.table-of-chief').appendChild(messages);
          setTimeout(() => {
            document.querySelector('.table-of-chief').removeChild(messages);
            window.location = './';
          }, 2000)
        }
      }
    }
    delReq.open('POST', 'management/config/includes/deletechief.php', true);
    reQ.send(`id=${data['ceo_id']}`);
  }
});