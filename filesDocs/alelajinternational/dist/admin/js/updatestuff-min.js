let editInputs = document.querySelectorAll(".edit-stuff-input"),
  updateButton = document.querySelector(".save-edit-stuff"),
  updateAvatar = new FormData,
  messageInfo = "";
const updateStuff = (e, t) => {
  let s = document.createElement("p");
  textOfMessage = "";
  let u = new XMLHttpRequest;
  u.onreadystatechange = (() => {
    4 === u.readyState && 200 === u.status && (u.responseText > 0 ? (s = document.createElement("p"), messageInfo = "لم يتم حفظ التعديلات", textOfMessage = document.createTextNode(messageInfo), s.classList.add("unsuccess", "msg")) : (s = document.createElement("p"), messageInfo = "تم اضافة التعديلات", textOfMessage = document.createTextNode(messageInfo), s.classList.add("success", "msg"), getData())), s.appendChild(textOfMessage), document.querySelector(".formContainer").appendChild(s), setInterval(() => {
      document.querySelector(".formContainer").removeChild(document.querySelector(".msg"))
    }, 3e3)
  }), 1 == t ? (u.open("POST", "management/config/includes/updatestuff.php", !0), u.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), u.send(e)) : (u.open("POST", "management/config/includes/updatestuff.php", !0), u.send(e))
};
updateButton.addEventListener("click", () => {
  let e = editInputs[0],
    t = "" !== e.value || e.value.length > 0 ? editInputs[0].files[0] : editInputs[0].getAttribute("data");
  stuff_name = editInputs[1].value.trim().toString().toLowerCase(), stuff_pass = editInputs[2].value.trim().toString().toLowerCase(), stuff_word = String(encodeURIComponent(tinymce.activeEditor.getContent())), stuff_email = editInputs[4].value.trim().toString().toLowerCase(), stuff_section = editInputs[5].value.trim().toString().toLowerCase(), stuff_fb = editInputs[6].value.trim().toString().toLowerCase(), stuff_twi = editInputs[7].value.trim().toString().toLowerCase(), stuff_lin = editInputs[8].value.trim().toString().toLowerCase(), stuff_go = editInputs[9].value.trim().toString().toLowerCase(), stuff_perm = document.querySelector("#stufflinkedituser").checked ? document.querySelector("#stufflinkedituser").value : document.querySelector("#stufflinkeditmng").value, id_value = Number(window.location.search.slice(window.location.search.search(/[0-9]{1,}$/))), idStuff = Number.isInteger(id_value) ? id_value : 1, "string" != typeof t && (updateAvatar.append("stuffavataredit", t, id_value + t.name), updateStuff(updateAvatar)), updateStuff(`data=1&id=${idStuff}&stuff_name=${stuff_name}&stuff_pass=${stuff_pass}&stuff_word=${stuff_word}&stuff_email=${stuff_email}&stuff_section=${stuff_section}&stuff_fb=${stuff_fb}&stuff_twi=${stuff_twi}&stuff_link=${stuff_lin}&stuff_go=${stuff_go}&stuff_perm=${stuff_perm}`, 1)
}), document.querySelector("body").addEventListener("keyup", e => {
  13 === e.keyCode && updateButton.click()
});