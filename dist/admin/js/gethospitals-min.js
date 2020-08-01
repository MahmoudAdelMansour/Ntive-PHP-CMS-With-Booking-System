let tableParent = document.querySelector(".manage-hospital .table-content"),
  counthospital = document.querySelector(".count-hospital");
const getTableData = () => {
  let e = new XMLHttpRequest;
  e.onreadystatechange = (() => {
    if (4 === e.readyState && 200 === e.status) {
      let t = JSON.parse(e.responseText);
      counthospital.textContent = t.length, t.forEach(e => {
        let t = document.createElement("tr"),
          a = document.createElement("td"),
          s = document.createElement("td"),
          n = document.createElement("td"),
          d = document.createElement("td"),
          l = document.createElement("td");
        a.innerHTML = e.hospital_id, s.innerHTML = e.hospital_name, n.innerHTML = 1 == e.hospital_status ? '<a class="no-book" href="#">غير قابل للحجز</a>' : '<a href="#">قابل للحجز</a>', d.innerHTML = `<img src="uploads/${e.hospital_avatar}" alt="" srcset="">`, l.innerHTML = `<a class="edit-hospital" href="?page=pages&mainpages=hospitals&subpages=edit&hospital_id=${e.hospital_id}">تعديل <i class="fas fa-edit"></i></a>\n            <a class="delete-hospital" data-id="?page=pages&mainpages=hospitals&hospital_id=${e.hospital_id}" href="#" >حذف <i class="fas fa-trash-alt"></i></i></a>`, t.classList.add("table-data"), t.appendChild(a).setAttribute("data-id", e.hospital_id), t.appendChild(s), t.appendChild(n), t.appendChild(d), t.appendChild(l), tableParent.appendChild(t)
      }), setTimeout(() => {
        document.querySelector(".hidden-load").classList.add("hidden")
      }, 1e3)
    }
  }), e.open("POST", "management/config/includes/gethospitalstable.php", !0), e.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), e.send()
};
document.querySelector("body").onload = getTableData(), setTimeout(() => {
  document.addEventListener("click", e => {
    if (e.target.classList.contains("delete-hospital")) {
      let t = confirm("هل انت متأكد ؟"),
        a = e.target.getAttribute("data-id").slice(e.target.getAttribute("data-id").search(/\W[1-9]{1,}$/) + 1);
      if (1 == t) {
        let t = new XMLHttpRequest;
        t.onreadystatechange = (() => {
          if (4 === t.readyState && 200 === t.status)
            if (t.responseText > 0) {
              let t = document.createElement("p");
              t.classList.add("success", "msg"), textOfMessage = document.createTextNode("تم : الحذف"), t.appendChild(textOfMessage), document.querySelector(".manage-hospital  .table-of-hospital").appendChild(t), setTimeout(() => {
                document.querySelector(".table-of-hospital").removeChild(t)
              }, 2e3), e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode), counthospital.textContent -= 1
            } else {
              let e = document.createElement("p");
              e.classList.add("unsuccess", "msg"), textOfMessage = document.createTextNode("خطأ : لم يتم الحذف"), e.appendChild(textOfMessage), document.querySelector(".manage-hospital .table-of-hospital").appendChild(e), setTimeout(() => {
                document.querySelector(".manage-hospital .table-of-hospital").removeChild(e)
              }, 2e3)
            }
        }), t.open("GET", "management/config/includes/deletehospitals.php?hospital_id=" + a, !0), t.send()
      } else alert("تمام")
    }
  })
}, 1e3);