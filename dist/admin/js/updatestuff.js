let editInputs = document.querySelectorAll('.edit-stuff-input'),
  updateButton = document.querySelector('.save-edit-stuff'),
  updateAvatar = new FormData,
  messageInfo = '';
const updateStuff = (param, param2) => {
  let messages = document.createElement('p');
  textOfMessage = '';
  let upReq = new XMLHttpRequest();
  upReq.onreadystatechange = () => {
    if (upReq.readyState === 4 && upReq.status === 200) {
      // console.log(upReq.responseText);
      if (upReq.responseText > 0) {
        messages = document.createElement('p');
        messageInfo = 'لم يتم حفظ التعديلات';
        textOfMessage = document.createTextNode(messageInfo);
        messages.classList.add('unsuccess', 'msg');

      } else {
        messages = document.createElement('p');
        messageInfo = 'تم اضافة التعديلات';
        textOfMessage = document.createTextNode(messageInfo);
        messages.classList.add('success', 'msg');
        getData();
      }
    }
    messages.appendChild(textOfMessage);
    document.querySelector('.formContainer').appendChild(messages);
    setInterval(() => {
      document.querySelector('.formContainer').removeChild(document.querySelector('.msg'));
    }, 3000);
  }
  if (param2 == 1) {
    upReq.open('POST', "management/config/includes/updatestuff.php", true);
    upReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
    upReq.send(param);
  } else {
    upReq.open('POST', "management/config/includes/updatestuff.php", true);
    upReq.send(param);
  }
}
updateButton.addEventListener('click', () => {
  let avatar_stuff = editInputs[0],
    avatarstuff = avatar_stuff.value !== "" || avatar_stuff.value.length > 0 ? editInputs[0].files[0] : editInputs[0].getAttribute('data');
  stuff_name = editInputs[1].value.trim().toString().toLowerCase();
  stuff_pass = editInputs[2].value.trim().toString().toLowerCase();
  stuff_word = String(encodeURIComponent(tinymce.activeEditor.getContent()));
  stuff_email = editInputs[4].value.trim().toString().toLowerCase();
  stuff_section = editInputs[5].value.trim().toString().toLowerCase();
  stuff_fb = editInputs[6].value.trim().toString().toLowerCase();
  stuff_twi = editInputs[7].value.trim().toString().toLowerCase();
  stuff_lin = editInputs[8].value.trim().toString().toLowerCase();
  stuff_go = editInputs[9].value.trim().toString().toLowerCase();
  stuff_perm = document.querySelector("#stufflinkedituser").checked ? document.querySelector("#stufflinkedituser").value : document.querySelector("#stufflinkeditmng").value;
  id_value = Number(window.location.search.slice(window.location.search.search(/[0-9]{1,}$/)));
  idStuff = Number.isInteger(id_value) ? id_value : 1;
  if (typeof(avatarstuff) !== "string") {

    updateAvatar.append("stuffavataredit", avatarstuff, id_value + avatarstuff.name);
    updateStuff(updateAvatar);

  }

  updateStuff(`data=1&id=${idStuff}&stuff_name=${stuff_name}&stuff_pass=${stuff_pass}&stuff_word=${stuff_word}&stuff_email=${stuff_email}&stuff_section=${stuff_section}&stuff_fb=${stuff_fb}&stuff_twi=${stuff_twi}&stuff_link=${stuff_lin}&stuff_go=${stuff_go}&stuff_perm=${stuff_perm}`, 1)
})
document.querySelector('body').addEventListener('keyup', event => {
  if (event.keyCode === 13) {
    updateButton.click();
  }
});