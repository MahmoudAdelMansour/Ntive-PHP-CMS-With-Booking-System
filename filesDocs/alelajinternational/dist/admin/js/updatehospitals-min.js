let editInputs = document.querySelectorAll(".edit-hospital-input"),
  updateButton = document.querySelector(".save-edit-hospital"),
  updateAvatar = new FormData,
  messageInfo = "";
const updatehospital = (e, t) => {
  let a = document.createElement("p");
  textOfMessage = "";
  let o = new XMLHttpRequest;
  o.onreadystatechange = (() => {
    4 === o.readyState && 200 === o.status && (o.responseText > 0 ? (a = document.createElement("p"), messageInfo = "لم يتم حفظ التعديلات", textOfMessage = document.createTextNode(messageInfo), a.classList.add("unsuccess", "msg")) : (a = document.createElement("p"), messageInfo = "تم اضافة التعديلات", textOfMessage = document.createTextNode(messageInfo), a.classList.add("success", "msg"), getData())), a.appendChild(textOfMessage), document.querySelector(".formContainer").appendChild(a), setInterval(() => {
      document.querySelector(".formContainer").removeChild(document.querySelector(".msg"))
    }, 3e3)
  }), 1 == t ? (o.open("POST", "management/config/includes/updatehospitals.php", !0), o.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), o.send(e)) : (o.open("POST", "management/config/includes/updatehospitals.php", !0), o.send(e))
};
updateButton.addEventListener("click", () => {
  let e = editInputs[0],
    t = "" !== e.value || e.value.length > 0 ? editInputs[0].files[0] : editInputs[0].getAttribute("data");
  hospital_name = editInputs[1].value.trim().toString().toLowerCase(), hospital_word = String(encodeURIComponent(tinymce.activeEditor.getContent())), hospital_perm = document.querySelector("#hospitalstatuson").checked ? document.querySelector("#hospitalstatuson").value : document.querySelector("#hospitalstatusoff").value, id_value = Number(window.location.search.slice(window.location.search.search(/[0-9]{1,}$/))), idHospital = Number.isInteger(id_value) ? id_value : 1, "string" != typeof t && (updateAvatar.append("hospitalavataredit", t, id_value + t.name), updatehospital(updateAvatar)), updatehospital(`data=1&id=${idHospital}&hospital_name=${hospital_name}&hospital_word=${hospital_word}&hospital_perm=${hospital_perm}`, 1)
}), document.querySelector("body").addEventListener("keyup", e => {
  13 === e.keyCode && updateButton.click()
});