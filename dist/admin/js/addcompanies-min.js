let insertButton = document.querySelector(".save-add-companies"),
  companiesData = document.querySelectorAll(".add-companies-input"),
  avatar = new FormData,
  reqErrors = ["empty", "extension"],
  messageInfo = "";
const sendReq = (e, t) => {
  let n, a, o = new XMLHttpRequest;
  o.onreadystatechange = (() => {
    4 === o.readyState && 200 === o.status && (1 == reqErrors.includes(o.responseText) ? (n = document.createElement("p"), messageInfo = "لم يتم اضافة الشركة", a = document.createTextNode(messageInfo), n.classList.add("unsuccess", "msg")) : (n = document.createElement("p"), messageInfo = "تم اضافة الشركة", a = document.createTextNode(messageInfo), n.classList.add("success", "msg"))), n.appendChild(a), document.querySelector(".formContainer").appendChild(n), setInterval(() => {
      document.querySelector(".formContainer").removeChild(document.querySelector(".msg"))
    }, 3e3)
  }), 1 == t ? (o.open("POST", "management/config/includes/insertcompanies.php", !0), o.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), o.send(e)) : (o.open("POST", "management/config/includes/insertcompanies.php", !0), o.send(e))
};
insertButton.addEventListener("click", () => {
  com_link = companiesData[2].value.trim().toString().toLowerCase(), com_name = companiesData[1].value.trim().toString().toLowerCase(), avatar.append("companiesavataradd", companiesData[0].files[0]), sendReq(avatar), sendReq(`data=1&com_name=${com_name}&com_link=${com_link}`, 1)
}), document.querySelector("body").addEventListener("keyup", e => {
  13 === e.keyCode && insertButton.click()
});