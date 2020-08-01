let insertButton = document.querySelector(".save-add"),
  chiefData = document.querySelectorAll(".add-chief-input"),
  avatar = new FormData,
  reqErrors = ["empty", "extension"],
  messageInfo = "";
const sendReq = (e, t) => {
  let n, a, o = new XMLHttpRequest;
  o.onreadystatechange = (() => {
    4 === o.readyState && 200 === o.status && (1 == reqErrors.includes(o.responseText) ? (n = document.createElement("p"), messageInfo = "لم يتم اضافة رئيس تنفيذي", a = document.createTextNode(messageInfo), n.classList.add("unsuccess", "msg")) : (n = document.createElement("p"), messageInfo = "تم اضافة رئيس تنفيذي جديد", a = document.createTextNode(messageInfo), n.classList.add("success", "msg"))), n.appendChild(a), document.querySelector(".formContainer").appendChild(n), setInterval(() => {
      document.querySelector(".formContainer").removeChild(document.querySelector(".msg"))
    }, 3e3)
  }), 1 == t ? (o.open("POST", "management/config/includes/insertchief.php", !0), o.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), o.send(e)) : (o.open("POST", "management/config/includes/insertchief.php", !0), o.send(e))
};
insertButton.addEventListener("click", () => {
  title = chiefData[1].value.trim().toString().toLowerCase(), name = chiefData[2].value.trim().toString().toLowerCase(), word = String(encodeURIComponent(tinymce.activeEditor.getContent())), avatar.append("chiefavataradd", chiefData[0].files[0]), sendReq(avatar), sendReq(`data=1&chief_name=${name}&chief_title=${title}&chief_word=${word}`, 1)
}), document.querySelector("body").addEventListener("keyup", e => {
  13 === e.keyCode && insertButton.click()
});