let insertButton = document.querySelector(".save-add-booking"),
  bookingData = document.querySelectorAll(".add-booking-input"),
  reqErrors = ["empty", "extension"],
  messageInfo = "";
const sendReq = (e, o) => {
  let t, n, s = new XMLHttpRequest;
  s.onreadystatechange = (() => {
    4 === s.readyState && 200 === s.status && (1 == reqErrors.includes(s.responseText) ? (t = document.createElement("p"), messageInfo = "لم يتم اضافة الحجز", n = document.createTextNode(messageInfo), t.classList.add("unsuccess", "msg")) : (t = document.createElement("p"), messageInfo = "تم اضافة الحجز", n = document.createTextNode(messageInfo), t.classList.add("success", "msg"))), t.appendChild(n), document.querySelector(".formContainer").appendChild(t), setInterval(() => {
      document.querySelector(".formContainer").removeChild(document.querySelector(".msg"))
    }, 3e3)
  }), 1 == o ? (s.open("POST", "management/config/includes/insertbooking.php", !0), s.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), s.send(e)) : (s.open("POST", "management/config/includes/insertbooking.php", !0), s.send(e))
};
insertButton.addEventListener("click", () => {
  booking_name = bookingData[0].value.trim().toString().toLowerCase(), booking_phone = bookingData[1].value.trim().toString().toLowerCase(), booking_date = `${bookingData[2].value.trim().toLowerCase()} ${bookingData[3].value.trim().toLowerCase()}`, hospitals_id = parseInt(document.querySelector("#bookingHospitals").selectedIndex), booking_perm = document.querySelector("#bookingstatuson").checked ? document.querySelector("#bookingstatuson").value : document.querySelector("#bookingstatusoff").value, sendReq(`data=1&booking_name=${booking_name}&booking_phone=${booking_phone}&booking_date=${booking_date}&hospitals_id=${hospitals_id}&booking_perm=${booking_perm}`, 1)
}), document.querySelector("body").addEventListener("keyup", e => {
  13 === e.keyCode && insertButton.click()
});