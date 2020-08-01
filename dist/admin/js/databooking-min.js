let selectBox = document.querySelector("#bookingHospitals");
const getHospitalsHtml = () => {
  let e = new XMLHttpRequest;
  e.onreadystatechange = (() => {
    4 === e.readyState && 200 === e.status && JSON.parse(e.responseText).forEach(e => {
      console.log(Object.values(e)[3]);
      let t = document.createElement("option"),
        o = null != document.querySelector("option[data='1']") ? o.parentElement.removeChild(document.querySelector("option[data='1']")) : "",
        a = document.createTextNode(Object.values(e)[1]);
      t.setAttribute("value", Object.values(e)[0]), t.setAttribute("data", Object.values(e)[3]), t.appendChild(a), selectBox.appendChild(t)
    })
  }), e.open("POST", "management/config/includes/gethospitalstable.php", !0), e.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), e.send()
};
document.querySelector("body").onload = getHospitalsHtml();