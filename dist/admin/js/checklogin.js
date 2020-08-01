// Check Ajax
let loginButton = document.getElementById('login-button'),
  dataInputs = document.querySelectorAll('.login-form input'),
  formBox = document.querySelector('.inside-form');
loginButton.onclick = () => {
  let myReq = new XMLHttpRequest();
  let username = dataInputs[0].value.trim().toString().toLowerCase(),
    password = dataInputs[1].value.trim().toString().toLowerCase();
  formBox.classList.remove('shake-animation');
  myReq.onreadystatechange = () => {
    if (myReq.readyState === 4 && myReq.status === 200) {
      if (myReq.responseText > 0) {
        window.location.href = `dashboard.php`;
      } else {
        if (formBox.classList.contains('shake-animation')) {
          setTimeout(() => {
            formBox.classList.remove('shake-animation');
          }, 0900);
        }
        formBox.classList.add('shake-animation');
      }
    }
  }
  myReq.open("POST", "management/config/includes/logincheck.php", true);
  myReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  myReq.send(`login=submit&username=${username}&password=${password}`);
};
//  Toggle PlaceHolder  In Inputs
dataInputs.forEach(input => {
  input.onfocus = () => {
    input.setAttribute('data-store', input.getAttribute('placeholder'));
    input.removeAttribute('placeholder');
  }
  input.onblur = () => {
    input.setAttribute('placeholder', input.getAttribute('data-store'));
    input.removeAttribute('data-store');
  }
});
document.body.addEventListener('keypress', () => {
  if (event.keyCode === 13) {
    loginButton.click();
  }
});