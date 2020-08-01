let insertButton = document.querySelector(".save-add-stuff"),
  stuffData = document.querySelectorAll(".add-stuff-input"),
  avatar = new FormData,
  reqErrors = ["empty", "extension"],
  messageInfo = "";
const sendReq = (e, t) => {
  let s, f, a = new XMLHttpRequest;
  a.onreadystatechange = (() => {
    4 === a.readyState && 200 === a.status && (1 == reqErrors.includes(a.responseText) ? (s = document.createElement("p"), messageInfo = "لم يتم اضافة الموظف", f = document.createTextNode(messageInfo), s.classList.add("unsuccess", "msg")) : (s = document.createElement("p"), messageInfo = "تم اضافة الموظف", f = document.createTextNode(messageInfo), s.classList.add("success", "msg"))), s.appendChild(f), document.querySelector(".formContainer").appendChild(s), setInterval(() => {
      document.querySelector(".formContainer").removeChild(document.querySelector(".msg"))
    }, 3e3)
  }), 1 == t ? (a.open("POST", "management/config/includes/insertstuff.php", !0), a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.send(e)) : (a.open("POST", "management/config/includes/insertstuff.php", !0), a.send(e))
};
insertButton.addEventListener("click", () => {
  stuff_name = stuffData[1].value.trim().toString().toLowerCase(), stuff_pass = stuffData[2].value.trim().toString().toLowerCase(), stuff_word = String(encodeURIComponent(tinymce.activeEditor.getContent())), stuff_email = stuffData[4].value.trim().toString().toLowerCase(), stuff_section = stuffData[5].value.trim().toString().toLowerCase(), stuff_fb = stuffData[6].value.trim().toString().toLowerCase(), stuff_twi = stuffData[7].value.trim().toString().toLowerCase(), stuff_lin = stuffData[8].value.trim().toString().toLowerCase(), stuff_go = stuffData[9].value.trim().toString().toLowerCase(), stuff_perm = document.querySelector("#stufflinkadduser").checked ? document.querySelector("#stufflinkadduser").value : document.querySelector("#stufflinkaddmng").value, avatar.append("stuffavataradd", stuffData[0].files[0]), sendReq(avatar), sendReq(`data=1&stuff_name=${stuff_name}&stuff_pass=${stuff_pass}&stuff_word=${stuff_word}&stuff_email=${stuff_email}&stuff_section=${stuff_section}&stuff_fb=${stuff_fb}&stuff_twi=${stuff_twi}&stuff_link=${stuff_lin}&stuff_go=${stuff_go}&stuff_perm=${stuff_perm}`, 1)
}), document.querySelector("body").addEventListener("keyup", e => {
  13 === e.keyCode && insertButton.click()
});