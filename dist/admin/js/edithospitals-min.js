const getData = () => {
  document.querySelector(".hidden-load").classList.remove("hidden");
  let e = new XMLHttpRequest;
  e.onreadystatechange = (() => {
    if (4 === e.readyState && 200 === e.status) {
      if ("id" == e.responseText) messages = document.createElement("p"), messages.classList.add("unsuccess", "msg"), textOfMessage = document.createTextNode("رقم المستشفي غير صحيح"), messages.appendChild(textOfMessage), document.querySelector(".formContainer").appendChild(messages), setTimeout(() => {
        document.querySelector(".formContainer").removeChild(messages), window.location = "./"
      }, 2e3);
      else {
        let t = document.querySelectorAll(".edit-hospital-input"),
          s = t[0],
          a = document.querySelector(".inputs-hospital-upload");
        nameInput = t[1], wordInput = t[2], permInput = 1 == JSON.parse(e.responseText).hospital_status ? t[4] : t[3], nameInput.value = JSON.parse(e.responseText).hospital_name, wordInput.value = JSON.parse(e.responseText).hospital_description, permInput.checked = !0, a.src = "uploads/" + JSON.parse(e.responseText).hospital_avatar, s.setAttribute("data", "uploads/" + JSON.parse(e.responseText).hospital_avatar)
      }
      document.querySelector(".hidden-load").classList.add("hidden")
    }
  }), e.open("POST", "management/config/includes/edithospitals.php" + window.location.search, !0), e.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), e.send()
};
document.querySelector("body").onload = getData();