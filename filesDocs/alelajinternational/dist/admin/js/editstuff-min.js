const getData = () => {
  document.querySelector(".hidden-load").classList.remove("hidden");
  let e = new XMLHttpRequest;
  e.onreadystatechange = (() => {
    if (4 === e.readyState && 200 === e.status) {
      if ("id" == e.responseText) messages = document.createElement("p"), messages.classList.add("unsuccess", "msg"), textOfMessage = document.createTextNode("رقم الموظف غير صحيح"), messages.appendChild(textOfMessage), document.querySelector(".formContainer").appendChild(messages), setTimeout(() => {
        document.querySelector(".formContainer").removeChild(messages), window.location = "./"
      }, 2e3);
      else {
        let t = document.querySelectorAll(".edit-stuff-input"),
          s = t[0],
          a = document.querySelector(".inputs-stuff-upload");
        nameInput = t[1], passInput = t[2], wordInput = t[3], emailInput = t[4], sectionInput = t[5], faceInput = t[6], twiInput = t[7], linkInput = t[8], goInput = t[9], permInput = 1 == JSON.parse(e.responseText).user_group ? t[11] : t[10], nameInput.value = JSON.parse(e.responseText).user_name, passInput.value = JSON.parse(e.responseText).user_pass, wordInput.value = JSON.parse(e.responseText).bio, emailInput.value = JSON.parse(e.responseText).user_email, sectionInput.value = JSON.parse(e.responseText).section, faceInput.value = JSON.parse(e.responseText).social_fb, twiInput.value = JSON.parse(e.responseText).social_twitter, linkInput.value = JSON.parse(e.responseText).social_linked, goInput.value = JSON.parse(e.responseText).social_google, permInput.checked = !0, a.src = "uploads/" + JSON.parse(e.responseText).user_avatar, s.setAttribute("data", "uploads/" + JSON.parse(e.responseText).user_avatar)
      }
      document.querySelector(".hidden-load").classList.add("hidden")
    }
  }), e.open("POST", "management/config/includes/editstuff.php" + window.location.search, !0), e.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), e.send()
};
document.querySelector("body").onload = getData();