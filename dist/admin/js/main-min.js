let bookingLogin = document.querySelectorAll(".booking-all-inputs");
bookingLogin.forEach(e => {
  e.onfocus = (() => {
    document.querySelector(".save-all").classList.add("shake-animation"), e.setAttribute("data-store", e.getAttribute("placeholder")), e.removeAttribute("placeholder")
  }), e.onblur = (() => {
    document.querySelector(".save-all").classList.remove("shake-animation"), e.setAttribute("placeholder", e.getAttribute("data-store")), e.removeAttribute("data-store")
  })
});
let chiefLogin = document.querySelectorAll(".chief-all-inputs"),
  upinputs = document.querySelectorAll(".inputs-chief-upload"),
  upinputb = null != document.querySelector(".up-input") ? document.querySelector(".up-input") : document.querySelector("body");
window.location.search.search(/\W(e|a|u|d){1}[a-z]{1,}/) > 0 && (upinputs.forEach(e => {
  e.addEventListener("click", () => {
    upinputb.click()
  })
}), chiefLogin.forEach(e => {
  e.onfocus = (() => {
    document.querySelector(".save-all").classList.add("shake-animation"), e.setAttribute("data-store", e.getAttribute("placeholder")), e.removeAttribute("placeholder")
  }), e.onblur = (() => {
    document.querySelector(".save-all").classList.remove("shake-animation"), e.setAttribute("placeholder", e.getAttribute("data-store")), e.removeAttribute("data-store")
  })
}), upinputb.addEventListener("change", () => {
  const e = upinputb.files[0];
  if (e) {
    const t = new FileReader;
    t.addEventListener("load", () => {
      upinputs[0].setAttribute("src", t.result)
    }), t.readAsDataURL(e)
  }
}));
let companiesLogin = document.querySelectorAll(".companies-all-inputs"),
  upinputs_com = document.querySelectorAll(".inputs-companies-upload"),
  upinputb_com = null != document.querySelector(".up-input") ? document.querySelector(".up-input") : document.querySelector("body");
window.location.search.search(/\W(e|a|u|d){1}[a-z]{1,}/) > 0 && (upinputs_com.forEach(e => {
  e.addEventListener("click", () => {
    upinputb_com.click()
  })
}), companiesLogin.forEach(e => {
  e.onfocus = (() => {
    document.querySelector(".save-all").classList.add("shake-animation"), e.setAttribute("data-store", e.getAttribute("placeholder")), e.removeAttribute("placeholder")
  }), e.onblur = (() => {
    document.querySelector(".save-all").classList.remove("shake-animation"), e.setAttribute("placeholder", e.getAttribute("data-store")), e.removeAttribute("data-store")
  })
}), upinputb_com.addEventListener("change", () => {
  const e = upinputb_com.files[0];
  if (e) {
    const t = new FileReader;
    t.addEventListener("load", () => {
      upinputs_com[0].setAttribute("src", t.result)
    }), t.readAsDataURL(e)
  }
}));
let hospitalLogin = document.querySelectorAll(".hospital-all-inputs"),
  upinputs_hospital = document.querySelectorAll(".inputs-hospital-upload"),
  upinputb_hospital = null != document.querySelector(".up-input") ? document.querySelector(".up-input") : document.querySelector("body");
window.location.search.search(/\W(e|a|u|d){1}[a-z]{1,}/) > 0 && (upinputs_hospital.forEach(e => {
  e.addEventListener("click", () => {
    upinputb_hospital.click()
  })
}), hospitalLogin.forEach(e => {
  e.onfocus = (() => {
    document.querySelector(".save-all").classList.add("shake-animation"), e.setAttribute("data-store", e.getAttribute("placeholder")), e.removeAttribute("placeholder")
  }), e.onblur = (() => {
    document.querySelector(".save-all").classList.remove("shake-animation"), e.setAttribute("placeholder", e.getAttribute("data-store")), e.removeAttribute("data-store")
  })
}), upinputb_hospital.addEventListener("change", () => {
  const e = upinputb_hospital.files[0];
  if (e) {
    const t = new FileReader;
    t.addEventListener("load", () => {
      upinputs_hospital[0].setAttribute("src", t.result)
    }), t.readAsDataURL(e)
  }
}));
let storeActiveWindow = localStorage.getItem("active", null),
  theLinks = document.querySelectorAll(".child-links li a");

function activeMenuButton(e, t) {
  theLinks.forEach(l => {
    l.addEventListener("click", () => {
      l.hasAttribute(t) && l.getAttribute(t).search(/(\W)[a-zA-Z]*$/) > 0 && l.classList.add(e), localStorage.setItem("active", l.getAttribute("href").slice(window.location.search.search(/[a-zA-Z]*$/)))
    })
  })
}
activeMenuButton("active", "href"), theLinks.forEach(e => {
  e.getAttribute("href").slice(window.location.search.search(/[a-zA-Z]*$/)) == window.location.search.slice(window.location.search.search(/[a-zA-Z]*$/)) && e.classList.add("active")
}), tinymce.init({
  selector: "#ceowordedit,#stuffwordadd,#hospitaldescadd,#hospitaldescedit",
  plugin: "a_tinymce_plugin",
  a_plugin_option: !0,
  a_configuration_option: 500,
  width: "100%",
  language: "ar",
  plugins: "link image code",
  relative_urls: !0
});
let toggleSide = document.querySelector(".toggle-side"),
  sidebarPart = document.querySelector(".sidebar"),
  getMenuStore = localStorage.getItem("menubar");
const enableMenu = () => {
    toggleSide.attributes[0].value = "on", toggleSide.classList.remove("fa-toggle-off"), toggleSide.classList.add("fa-toggle-on"), sidebarPart.classList.remove("out"), localStorage.setItem("menubar", "enabled")
  },
  disableMenu = () => {
    toggleSide.attributes[0].value = "off", toggleSide.classList.remove("fa-toggle-on"), toggleSide.classList.add("fa-toggle-off"), sidebarPart.classList.add("out"), localStorage.setItem("menubar", null)
  };
"enabled" == getMenuStore ? enableMenu() : disableMenu(), toggleSide.addEventListener("click", () => {
  "on" == toggleSide.attributes[0].value ? (disableMenu(), getMenuStore = localStorage.getItem("menubar")) : "off" == toggleSide.attributes[0].value && (enableMenu(), getMenuStore = localStorage.getItem("menubar"))
}), document.querySelector(".fa-bell").onclick = (() => {
  alert("لتفعيل الاشعارات تواصل مع المطور")
});
let tMButtons = document.querySelectorAll(".show"),
  tMButtonsOne = tMButtons[0],
  tMButtonsTwo = tMButtons[1],
  getDataStore = localStorage.getItem("subMenu", null),
  getDataStoreTwo = localStorage.getItem("subMenut", null);
const enableSubMenu = (e, t) => {
    e.nextElementSibling.classList.remove("hideChild"), e.firstElementChild.classList.add("active"), localStorage.setItem(t, "enabled")
  },
  disableSubMenu = (e, t) => {
    e.nextElementSibling.classList.add("hideChild"), e.firstElementChild.classList.remove("active"), localStorage.setItem(t, null)
  };

function autoEnable(e, t, l) {
  "enabled" == e ? enableSubMenu(t, l) : disableSubMenu(t, l)
}
autoEnable(getDataStore, tMButtonsOne, "subMenu"), autoEnable(getDataStoreTwo, tMButtonsTwo, "subMenut"), tMButtonsOne.addEventListener("click", () => {
  tMButtonsOne.nextElementSibling.classList.contains("hideChild") ? enableSubMenu(tMButtonsOne, "subMenu") : disableSubMenu(tMButtonsOne, "subMenu")
}), tMButtonsTwo.addEventListener("click", () => {
  tMButtonsTwo.nextElementSibling.classList.contains("hideChild") ? enableSubMenu(tMButtonsTwo, "subMenut") : disableSubMenu(tMButtonsTwo, "subMenut")
});
let ele = document.documentElement,
  buttonFull = document.querySelector(".toggle-fullscreen");

function openFullScreen() {
  ele.requestFullscreen ? ele.requestFullscreen() : ele.mozRequestFullscreen ? ele.mozRequestFullscreen() : ele.webkitRequestFullscreen ? ele.webkitRequestFullscreen() : ele.msRequestFullscreen && ele.msRequestFullscreen()
}

function closeFullScreen() {
  document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullscreen ? document.mozCancelFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen()
}
buttonFull.addEventListener("click", () => {
  buttonFull.classList.toggle("on"), buttonFull.classList.contains("on") ? openFullScreen() : closeFullScreen()
});
let avatarMenu = document.querySelector(".toggle-user"),
  menuOfAvatar = document.querySelector(".menu-avatar");
avatarMenu.addEventListener("click", () => {
  menuOfAvatar.classList.toggle("visimenu")
});
let colorsGallery = document.querySelectorAll(".colors-change li"),
  colorsAtri = [],
  dataColor = localStorage.getItem("colorData", null);
colorsGallery.forEach(e => {
  colorsAtri.push(e.getAttribute("data-color")), e.addEventListener("click", () => {
    document.body.classList.remove(...colorsAtri), document.body.classList.add(e.getAttribute("data-color")), localStorage.setItem("colorData", e.getAttribute("data-color"))
  })
}), document.addEventListener("click", e => {
  "deffault" == e.target.getAttribute("data-color") && (document.body.classList.remove(...colorsAtri), localStorage.setItem("colorData", null))
}), null !== dataColor && document.body.classList.add(dataColor), tinymce.init({
  selector: "textarea#editor",
  auto_focus: "element1",
  width: "700",
  height: "200"
});
let stuffLogin = document.querySelectorAll(".stuff-all-inputs"),
  upinputs_stuff = document.querySelectorAll(".inputs-stuff-upload"),
  upinputb_stuff = null != document.querySelector(".up-input") ? document.querySelector(".up-input") : document.querySelector("body");
window.location.search.search(/\W(e|a|u|d){1}[a-z]{1,}/) > 0 && (upinputs_stuff.forEach(e => {
  e.addEventListener("click", () => {
    upinputb_stuff.click()
  })
}), stuffLogin.forEach(e => {
  e.onfocus = (() => {
    document.querySelector(".save-all").classList.add("shake-animation"), e.setAttribute("data-store", e.getAttribute("placeholder")), e.removeAttribute("placeholder")
  }), e.onblur = (() => {
    document.querySelector(".save-all").classList.remove("shake-animation"), e.setAttribute("placeholder", e.getAttribute("data-store")), e.removeAttribute("data-store")
  })
}), upinputb_stuff.addEventListener("change", () => {
  const e = upinputb_stuff.files[0];
  if (e) {
    const t = new FileReader;
    t.addEventListener("load", () => {
      upinputs_stuff[0].setAttribute("src", t.result)
    }), t.readAsDataURL(e)
  }
}));