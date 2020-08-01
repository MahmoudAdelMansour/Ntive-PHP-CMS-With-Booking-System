const getData = () => {
  document.querySelector(".hidden-load").classList.remove("hidden");
  let e = new XMLHttpRequest;
  e.onreadystatechange = (() => {
    if (4 === e.readyState && 200 === e.status) {
      if ("id" == e.responseText) messages = document.createElement("p"), messages.classList.add("unsuccess", "msg"), textOfMessage = document.createTextNode("رقم الشركة غير صحيح"), messages.appendChild(textOfMessage), document.querySelector(".formContainer").appendChild(messages), setTimeout(() => {
        document.querySelector(".formContainer").removeChild(messages), window.location = "./"
      }, 2e3);
      else {
        let t = document.querySelectorAll(".edit-companies-input"),
          s = t[0],
          a = document.querySelector(".inputs-companies-upload");
        linkInput = t[2], nameInput = t[1], linkInput.value = JSON.parse(e.responseText).ceo_link, nameInput.value = JSON.parse(e.responseText).com_name, a.src = "uploads/" + JSON.parse(e.responseText).com_avatar, s.setAttribute("data", "uploads/" + JSON.parse(e.responseText).com_avatar)
      }
      document.querySelector(".hidden-load").classList.add("hidden")
    }
  }), e.open("POST", "management/config/includes/editcompanies.php" + window.location.search, !0), e.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), e.send()
};
document.querySelector("body").onload = getData();