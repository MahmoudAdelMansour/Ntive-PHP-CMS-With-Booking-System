let editInputs = document.querySelectorAll(".edit-booking-input"),
  updateButton = document.querySelector(".save-edit-booking"),
  updateAvatar = new FormData,
  messageInfo = "";
const updatebooking = (e, t) => {
  let o = document.createElement("p");
  textOfMessage = "";
  let n = new XMLHttpRequest;
  n.onreadystatechange = (() => {
    4 === n.readyState && 200 === n.status && (n.responseText > 0 ? (o = document.createElement("p"), messageInfo = "لم يتم حفظ التعديلات", textOfMessage = document.createTextNode(messageInfo), o.classList.add("unsuccess", "msg")) : (o = document.createElement("p"), messageInfo = "تم اضافة التعديلات", textOfMessage = document.createTextNode(messageInfo), o.classList.add("success", "msg"), getData())), o.appendChild(textOfMessage), document.querySelector(".formContainer").appendChild(o), setInterval(() => {
      document.querySelector(".formContainer").removeChild(document.querySelector(".msg"))
    }, 3e3)
  }), 1 == t ? (n.open("POST", "management/config/includes/updatebooking.php", !0), n.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), n.send(e)) : (n.open("POST", "management/config/includes/updatebooking.php", !0), n.send(e))
};
updateButton.addEventListener("click", () => {
  let e = editInputs[0].value.trim().toString().toLowerCase();
  booking_number = editInputs[1].value.trim().toLowerCase(), booking_date = `${editInputs[2].value.trim().toLowerCase()} ${editInputs[3].value.trim().toLowerCase()}`, booking_hospital = selectBox.selectedIndex, booking_perm = document.querySelector("#bookingstatuson").checked ? document.querySelector("#bookingstatuson").value : document.querySelector("#bookingstatusoff").value, id_value = Number(window.location.search.slice(window.location.search.search(/[0-9]{1,}$/))), idBooking = Number.isInteger(id_value) ? id_value : 1, updatebooking(`data=1&id=${idBooking}&booking_name=${e}&booking_number=${booking_number}&booking_date=${booking_date}&booking_hospital=${booking_hospital}&booking_perm=${booking_perm}`, 1)
}), document.querySelector("body").addEventListener("keyup", e => {
  13 === e.keyCode && updateButton.click()
});