const getData = () => {
  document.querySelector('.hidden-load').classList.remove('hidden');
  let reQ = new XMLHttpRequest();
  reQ.onreadystatechange = () => {
    if (reQ.readyState === 4 && reQ.status === 200) {
      if (reQ.responseText == 'id') {
        messages = document.createElement('p');
        messages.classList.add('unsuccess', 'msg');
        textOfMessage = document.createTextNode("رقم الحجز غير صحيح");
        messages.appendChild(textOfMessage);
        document.querySelector('.formContainer').appendChild(messages);
        setTimeout(() => {
          document.querySelector('.formContainer').removeChild(messages);
          window.location = './';
        }, 2000)
      } else {
        let bookingData = document.querySelectorAll('.edit-booking-input'),
          nameInput = bookingData[0];
        numberInput = bookingData[1],
          dateInput = bookingData[2],
          timeInput = bookingData[3],
          hospital_booking = JSON.parse(reQ.responseText)['hospitals_id'],
          permInput = JSON.parse(reQ.responseText)['booking_status'] == 1 ? bookingData[5] : bookingData[4];
        // user_group
        // console.log(JSON.parse(reQ.responseText));
        nameInput.value = JSON.parse(reQ.responseText)['booking_name'];
        numberInput.value = `0${JSON.parse(reQ.responseText)['booking_phone']}`;
        dateInput.value = JSON.parse(reQ.responseText)['booking_date'].split(' ')[0];
        timeInput.value = JSON.parse(reQ.responseText)['booking_date'].split(' ')[1];
        permInput.checked = true;
        selectBox.options[hospital_booking].selected = true
        // perviewImage.src = 'uploads/' + JSON.parse(reQ.responseText)['hospital_avatar'];
        // uploadInput.setAttribute('data','uploads/' + JSON.parse(reQ.responseText)['hospital_avatar'])

      }
      document.querySelector('.hidden-load').classList.add('hidden');

    }
  }
  reQ.open('POST', "management/config/includes/editbooking.php" + window.location.search, true);
  reQ.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  reQ.send();

}
document.querySelector('body').onload = getData();