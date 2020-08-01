const getData = () => {
  document.querySelector('.hidden-load').classList.remove('hidden');
  let reQ = new XMLHttpRequest();
  reQ.onreadystatechange = () => {
    if (reQ.readyState === 4 && reQ.status === 200) {
      if (reQ.responseText == 'id') {
        messages = document.createElement('p');
        messages.classList.add('unsuccess', 'msg');
        textOfMessage = document.createTextNode("رقم الموظف غير صحيح");
        messages.appendChild(textOfMessage);
        document.querySelector('.formContainer').appendChild(messages);
        setTimeout(() => {
          document.querySelector('.formContainer').removeChild(messages);
          window.location = './';
        }, 2000)
      } else {
        let stuffData = document.querySelectorAll('.edit-stuff-input'),
          uploadInput = stuffData[0],
          perviewImage = document.querySelector('.inputs-stuff-upload');
        nameInput = stuffData[1];
        passInput = stuffData[2],
          wordInput = stuffData[3],
          emailInput = stuffData[4],
          sectionInput = stuffData[5],
          faceInput = stuffData[6],
          twiInput = stuffData[7],
          linkInput = stuffData[8],
          goInput = stuffData[9],
          permInput = JSON.parse(reQ.responseText)['user_group'] == 1 ? stuffData[11] : stuffData[10];

        // user_group
        // console.log(JSON.parse(reQ.responseText));
        nameInput.value = JSON.parse(reQ.responseText)['user_name'];
        passInput.value = JSON.parse(reQ.responseText)['user_pass'];
        wordInput.value = JSON.parse(reQ.responseText)['bio'];
        emailInput.value = JSON.parse(reQ.responseText)['user_email'];
        sectionInput.value = JSON.parse(reQ.responseText)['section'];
        faceInput.value = JSON.parse(reQ.responseText)['social_fb'];
        twiInput.value = JSON.parse(reQ.responseText)['social_twitter'];
        linkInput.value = JSON.parse(reQ.responseText)['social_linked'];
        goInput.value = JSON.parse(reQ.responseText)['social_google'];
        permInput.checked = true;

        perviewImage.src = 'uploads/' + JSON.parse(reQ.responseText)['user_avatar'];
        uploadInput.setAttribute('data', 'uploads/' + JSON.parse(reQ.responseText)['user_avatar'])

      }
      document.querySelector('.hidden-load').classList.add('hidden');

    }
  }
  reQ.open('POST', "management/config/includes/editstuff.php" + window.location.search, true);
  reQ.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  reQ.send();

}
document.querySelector('body').onload = getData();