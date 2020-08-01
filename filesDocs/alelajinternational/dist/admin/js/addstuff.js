let insertButton = document.querySelector('.save-add-stuff'),
  stuffData = document.querySelectorAll('.add-stuff-input'),
  avatar = new FormData(),
  reqErrors = ["empty", "extension"],
  messageInfo = '';
// chiefData.forEach(e => {
//     e.addEventListener('change', () => {
//     })
// })
const sendReq = (param, param2) => {
  let messages, textOfMessage;
  let myReq = new XMLHttpRequest();
  myReq.onreadystatechange = () => {
    if (myReq.readyState === 4 && myReq.status === 200) {
      if (reqErrors.includes(myReq.responseText) == true) {
        messages = document.createElement('p');
        messageInfo = 'لم يتم اضافة الموظف';
        textOfMessage = document.createTextNode(messageInfo);
        messages.classList.add('unsuccess', 'msg');
      } else {

        messages = document.createElement('p');
        messageInfo = 'تم اضافة الموظف';
        textOfMessage = document.createTextNode(messageInfo);
        messages.classList.add('success', 'msg');
        // console.log(myReq.responseText);
      }


    }
    messages.appendChild(textOfMessage);
    document.querySelector('.formContainer').appendChild(messages);
    setInterval(() => {
      document.querySelector('.formContainer').removeChild(document.querySelector('.msg'));
    }, 3000);

  }
  if (param2 == 1) {
    myReq.open('POST', "management/config/includes/insertstuff.php", true);
    myReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
    myReq.send(param);
  } else {
    myReq.open('POST', "management/config/includes/insertstuff.php", true);
    myReq.send(param);
  }
}
insertButton.addEventListener('click', () => {

  stuff_name = stuffData[1].value.trim().toString().toLowerCase();
  stuff_pass = stuffData[2].value.trim().toString().toLowerCase();
  stuff_word = String(encodeURIComponent(tinymce.activeEditor.getContent()));
  stuff_email = stuffData[4].value.trim().toString().toLowerCase();
  stuff_section = stuffData[5].value.trim().toString().toLowerCase();
  stuff_fb = stuffData[6].value.trim().toString().toLowerCase();
  stuff_twi = stuffData[7].value.trim().toString().toLowerCase();
  stuff_lin = stuffData[8].value.trim().toString().toLowerCase();
  stuff_go = stuffData[9].value.trim().toString().toLowerCase();
  stuff_perm = document.querySelector("#stufflinkadduser").checked ? document.querySelector("#stufflinkadduser").value : document.querySelector("#stufflinkaddmng").value;


  avatar.append("stuffavataradd", stuffData[0].files[0]);
  sendReq(avatar);
  sendReq(`data=1&stuff_name=${stuff_name}&stuff_pass=${stuff_pass}&stuff_word=${stuff_word}&stuff_email=${stuff_email}&stuff_section=${stuff_section}&stuff_fb=${stuff_fb}&stuff_twi=${stuff_twi}&stuff_link=${stuff_lin}&stuff_go=${stuff_go}&stuff_perm=${stuff_perm}`, 1);
});
document.querySelector('body').addEventListener('keyup', event => {
  if (event.keyCode === 13) {
    insertButton.click();
  }
});