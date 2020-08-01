let editInputs = document.querySelectorAll(".edit-chief-input"),
  updateButton = document.querySelector(".save-edit"),
  updateAvatar = new FormData,
  messageInfo = "";
const updateChief = (e, t) => {
  let a = document.createElement("p");
  textOfMessage = "";
  let n = new XMLHttpRequest;
  n.onreadystatechange = (() => {
    4 === n.readyState && 200 === n.status && (n.responseText > 0 ? (a = document.createElement("p"), messageInfo = "لم يتم حفظ التعديلات", textOfMessage = document.createTextNode(messageInfo), a.classList.add("unsuccess", "msg")) : (a = document.createElement("p"), messageInfo = "تم اضافة التعديلات", textOfMessage = document.createTextNode(messageInfo), a.classList.add("success", "msg"), getData())), a.appendChild(textOfMessage), document.querySelector(".formContainer").appendChild(a), setInterval(() => {
      document.querySelector(".formContainer").removeChild(document.querySelector(".msg"))
    }, 3e3)
  }), 1 == t ? (n.open("POST", "management/config/includes/updatechief.php", !0), n.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), n.send(e)) : (n.open("POST", "management/config/includes/updatechief.php", !0), n.send(e))
};
updateButton.addEventListener("click", () => {
  let e = editInputs[0],
    t = "" !== e.value || e.value.length > 0 ? editInputs[0].files[0] : editInputs[0].getAttribute("data");
  titleChief = editInputs[1].value, nameChief = editInputs[2].value, id_value = Number(window.location.search.slice(window.location.search.search(/[0-9]{1,}$/))), idChief = Number.isInteger(id_value) ? id_value : 1, wordChief = String(encodeURIComponent(tinymce.activeEditor.getContent())), "string" != typeof t && (updateAvatar.append("chiefavataredit", t, id_value + t.name), updateChief(updateAvatar)), updateChief(`data=1&id=${idChief}&chief_name=${nameChief}&chief_title=${titleChief}&chief_word=${wordChief}`, 1)
}), document.querySelector("body").addEventListener("keyup", e => {
  13 === e.keyCode && updateButton.click()
});