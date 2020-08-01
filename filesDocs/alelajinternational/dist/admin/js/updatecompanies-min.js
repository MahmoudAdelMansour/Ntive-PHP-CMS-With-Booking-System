let editInputs = document.querySelectorAll(".edit-companies-input"),
  updateButton = document.querySelector(".save-edit-companies"),
  updateAvatar = new FormData,
  messageInfo = "";
const updateCompanies = (e, t) => {
  let a = document.createElement("p");
  textOfMessage = "";
  let n = new XMLHttpRequest;
  n.onreadystatechange = (() => {
    4 === n.readyState && 200 === n.status && (n.responseText > 0 ? (a = document.createElement("p"), messageInfo = "لم يتم حفظ التعديلات", textOfMessage = document.createTextNode(messageInfo), a.classList.add("unsuccess", "msg")) : (a = document.createElement("p"), messageInfo = "تم اضافة التعديلات", textOfMessage = document.createTextNode(messageInfo), a.classList.add("success", "msg"), getData())), a.appendChild(textOfMessage), document.querySelector(".formContainer").appendChild(a), setInterval(() => {
      document.querySelector(".formContainer").removeChild(document.querySelector(".msg"))
    }, 3e3)
  }), 1 == t ? (n.open("POST", "management/config/includes/updatecompanies.php", !0), n.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), n.send(e)) : (n.open("POST", "management/config/includes/updatecompanies.php", !0), n.send(e))
};
updateButton.addEventListener("click", () => {
  let e = editInputs[0],
    t = "" !== e.value || e.value.length > 0 ? editInputs[0].files[0] : editInputs[0].getAttribute("data");
  linksCompanies = editInputs[2].value, nameComapnies = editInputs[1].value, id_value = Number(window.location.search.slice(window.location.search.search(/[0-9]{1,}$/))), idCompanies = Number.isInteger(id_value) ? id_value : 1, "string" != typeof t && (updateAvatar.append("companiesavataredit", t, id_value + t.name), updateCompanies(updateAvatar)), updateCompanies(`data=1&id=${idCompanies}&companies_name=${nameComapnies}&companies_link=${linksCompanies}`, 1)
}), document.querySelector("body").addEventListener("keyup", e => {
  13 === e.keyCode && updateButton.click()
});