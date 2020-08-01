setTimeout(() => {
  let e = document.querySelectorAll(".hospitalbook");
  e.length <= 0 && (e = document.querySelectorAll(".hospitalbook"));
  document.querySelector("body").onload = (() => {
    let t = new XMLHttpRequest;
    t.onreadystatechange = (() => {
      4 === t.readyState && 200 === t.status && e.forEach(e => {
        let o = document.createTextNode(JSON.parse(t.responseText)[e.getAttribute("hospitals") - 1].hospital_name);
        e.appendChild(o)
      })
    }), t.open("POST", "management/config/includes/gethospitalstable.php", !0), t.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), t.send()
  })()
}, 500);