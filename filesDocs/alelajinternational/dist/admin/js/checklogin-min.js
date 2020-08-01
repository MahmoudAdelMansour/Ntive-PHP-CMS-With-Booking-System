let loginButton = document.getElementById("login-button"),
  dataInputs = document.querySelectorAll(".login-form input"),
  formBox = document.querySelector(".inside-form");
loginButton.onclick = (() => {
  let t = new XMLHttpRequest,
    e = dataInputs[0].value.trim().toString().toLowerCase(),
    o = dataInputs[1].value.trim().toString().toLowerCase();
  formBox.classList.remove("shake-animation"), t.onreadystatechange = (() => {
    4 === t.readyState && 200 === t.status && (t.responseText > 0 ? window.location.href = "dashboard.php" : (formBox.classList.contains("shake-animation") && setTimeout(() => {
      formBox.classList.remove("shake-animation")
    }, 900), formBox.classList.add("shake-animation")))
  }), t.open("POST", "management/config/includes/logincheck.php", !0), t.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), t.send(`login=submit&username=${e}&password=${o}`)
}), dataInputs.forEach(t => {
  t.onfocus = (() => {
    t.setAttribute("data-store", t.getAttribute("placeholder")), t.removeAttribute("placeholder")
  }), t.onblur = (() => {
    t.setAttribute("placeholder", t.getAttribute("data-store")), t.removeAttribute("data-store")
  })
}), document.body.addEventListener("keypress", () => {
  13 === event.keyCode && loginButton.click()
});