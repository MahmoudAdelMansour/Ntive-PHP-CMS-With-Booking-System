let editInputs = document.querySelectorAll('.edit-chief-input'),
  updateButton = document.querySelector('.save-edit'),
  updateAvatar = new FormData,
  messageInfo = '';
const updateChief = (param, param2) => {
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
    upReq.open('POST', "management/config/includes/updatechief.php", true);
    upReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
    upReq.send(param);
  } else {
    upReq.open('POST', "management/config/includes/updatechief.php", true);
    upReq.send(param);
  }
}
updateButton.addEventListener('click', () => {
  let avatar_Chief = editInputs[0],
    avatarChief = avatar_Chief.value !== "" || avatar_Chief.value.length > 0 ? editInputs[0].files[0] : editInputs[0].getAttribute('data');
  titleChief = editInputs[1].value,
    nameChief = editInputs[2].value,
    id_value = Number(window.location.search.slice(window.location.search.search(/[0-9]{1,}$/)));
  idChief = Number.isInteger(id_value) ? id_value : 1,
    wordChief = String(encodeURIComponent(tinymce.activeEditor.getContent()));
  if (typeof(avatarChief) !== "string") {

    updateAvatar.append("chiefavataredit", avatarChief, id_value + avatarChief.name);
    updateChief(updateAvatar);

  }

  updateChief(`data=1&id=${idChief}&chief_name=${nameChief}&chief_title=${titleChief}&chief_word=${wordChief}`, 1)
})
document.querySelector('body').addEventListener('keyup', event => {
  if (event.keyCode === 13) {
    updateButton.click();
  }
});