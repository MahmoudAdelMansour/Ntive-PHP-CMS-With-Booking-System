let insertButton = document.querySelector(".save-add-hospital"),
  hospitalData = document.querySelectorAll(".add-hospital-input"),
  avatar = new FormData,
  reqErrors = ["empty", "extension"],
  messageInfo = "";
const sendReq = (e, t) => {
  let a, o, s = new XMLHttpRequest;
  s.onreadystatechange = (() => {
    4 === s.readyState && 200 === s.status && (1 == reqErrors.includes(s.responseText) ? (a = document.createElement("p"), messageInfo = "لم يتم اضافة المستشفي", o = document.createTextNode(messageInfo), a.classList.add("unsuccess", "msg")) : (a = document.createElement("p"), messageInfo = "تم اضافة المستشفي", o = document.createTextNode(messageInfo), a.classList.add("success", "msg"))), a.appendChild(o), document.querySelector(".formContainer").appendChild(a), setInterval(() => {
      document.querySelector(".formContainer").removeChild(document.querySelector(".msg"))
    }, 3e3)
  }), 1 == t ? (s.open("POST", "management/config/includes/inserthospitals.php", !0), s.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), s.send(e)) : (s.open("POST", "management/config/includes/inserthospitals.php", !0), s.send(e))
};
insertButton.addEventListener("click", () => {
  hospital_name = hospitalData[1].value.trim().toString().toLowerCase(), hospital_word = String(encodeURIComponent(tinymce.activeEditor.getContent())), hospital_perm = document.querySelector("#hospitalstatuson").checked ? document.querySelector("#hospitalstatuson").value : document.querySelector("#hospitalstatusoff").value, avatar.append("hospitalavataradd", hospitalData[0].files[0]), sendReq(avatar), sendReq(`data=1&hospital_name=${hospital_name}&hospital_word=${hospital_word}&hospital_perm=${hospital_perm}`, 1)
}), document.querySelector("body").addEventListener("keyup", e => {
  13 === e.keyCode && insertButton.click()
});