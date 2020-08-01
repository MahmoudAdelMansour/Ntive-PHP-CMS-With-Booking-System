const getData = () => {
  document.querySelector(".hidden-load").classList.remove("hidden");
  let e = new XMLHttpRequest;
  e.onreadystatechange = (() => {
    if (4 === e.readyState && 200 === e.status) {
      if ("id" == e.responseText) messages = document.createElement("p"), messages.classList.add("unsuccess", "msg"), textOfMessage = document.createTextNode("رقم الحجز غير صحيح"), messages.appendChild(textOfMessage), document.querySelector(".formContainer").appendChild(messages), setTimeout(() => {
        document.querySelector(".formContainer").removeChild(messages), window.location = "./"
      }, 2e3);
      else {
        let t = document.querySelectorAll(".edit-booking-input"),
          s = t[0];
        numberInput = t[1], dateInput = t[2], timeInput = t[3], hospital_booking = JSON.parse(e.responseText).hospitals_id, permInput = 1 == JSON.parse(e.responseText).booking_status ? t[5] : t[4], s.value = JSON.parse(e.responseText).booking_name, numberInput.value = `0${JSON.parse(e.responseText).booking_phone}`, dateInput.value = JSON.parse(e.responseText).booking_date.split(" ")[0], timeInput.value = JSON.parse(e.responseText).booking_date.split(" ")[1], permInput.checked = !0, selectBox.options[hospital_booking].selected = !0
      }
      document.querySelector(".hidden-load").classList.add("hidden")
    }
  }), e.open("POST", "management/config/includes/editbooking.php" + window.location.search, !0), e.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), e.send()
};
document.querySelector("body").onload = getData();