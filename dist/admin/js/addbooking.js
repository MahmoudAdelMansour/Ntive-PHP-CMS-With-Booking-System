let insertButton = document.querySelector('.save-add-booking'),
  bookingData = document.querySelectorAll('.add-booking-input'),
  reqErrors = ["empty", "extension"],
  messageInfo = '';
// chiefData.forEach(e => {
//     e.addEventListener('change', () => {
//     })
// })
const sendReq = (param, param2) => {
  let messages, textOfMessage;
  let myReq = new XMLHttpRequest();
  myReq.onreadystatechange = () => {
    if (myReq.readyState === 4 && myReq.status === 200) {
      if (reqErrors.includes(myReq.responseText) == true) {
        messages = document.createElement('p');
        messageInfo = 'لم يتم اضافة الحجز';
        textOfMessage = document.createTextNode(messageInfo);
        messages.classList.add('unsuccess', 'msg');
      } else {

        messages = document.createElement('p');
        messageInfo = 'تم اضافة الحجز';
        textOfMessage = document.createTextNode(messageInfo);
        messages.classList.add('success', 'msg');
        // console.log(myReq.responseText);
      }


    }
    messages.appendChild(textOfMessage);
    document.querySelector('.formContainer').appendChild(messages);
    setInterval(() => {
      document.querySelector('.formContainer').removeChild(document.querySelector('.msg'));
    }, 3000);

  }
  if (param2 == 1) {
    myReq.open('POST', "management/config/includes/insertbooking.php", true);
    myReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
    myReq.send(param);
  } else {
    myReq.open('POST', "management/config/includes/insertbooking.php", true);
    myReq.send(param);
  }
}
insertButton.addEventListener('click', () => {

  booking_name = bookingData[0].value.trim().toString().toLowerCase();
  booking_phone = bookingData[1].value.trim().toString().toLowerCase();
  booking_date = `${bookingData[2].value.trim().toLowerCase()} ${bookingData[3].value.trim().toLowerCase()}`;
  hospitals_id = parseInt(document.querySelector("#bookingHospitals").selectedIndex);
  booking_perm = document.querySelector("#bookingstatuson").checked ? document.querySelector("#bookingstatuson").value : document.querySelector("#bookingstatusoff").value;
  sendReq(`data=1&booking_name=${booking_name}&booking_phone=${booking_phone}&booking_date=${booking_date}&hospitals_id=${hospitals_id}&booking_perm=${booking_perm}`, 1);
});
document.querySelector('body').addEventListener('keyup', event => {
  if (event.keyCode === 13) {
    insertButton.click();
  }
});