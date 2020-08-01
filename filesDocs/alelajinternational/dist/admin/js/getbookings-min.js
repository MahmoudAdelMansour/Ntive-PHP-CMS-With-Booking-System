let tableParent = document.querySelector(".manage-booking .table-content"),
  countbooking = null == document.querySelector(".companies_dashboard") ? document.querySelector(".count-booking") : document.querySelector(".companies_dashboard");
const getTableData = () => {
  let e = new XMLHttpRequest;
  e.onreadystatechange = (() => {
    if (4 === e.readyState && 200 === e.status) {
      let t = JSON.parse(e.responseText);
      countbooking.textContent = t.length, t.forEach(e => {
        let t = document.createElement("tr"),
          a = document.createElement("td"),
          n = document.createElement("td"),
          o = document.createElement("td"),
          d = document.createElement("td"),
          i = document.createElement("td"),
          s = document.createElement("td"),
          l = document.createElement("td");
        i.setAttribute("hospitals", e.hospitals_id), i.classList.add("hospitalbook"), a.innerHTML = e.booking_id, n.innerHTML = e.booking_name, o.innerHTML = `${e.booking_phone} - 0`, d.innerHTML = e.booking_date, s.innerHTML = 1 == e.booking_status ? '<a class="no-book" href="#">غير مفعل</a>' : '<a href="#">مفعل</a>', l.innerHTML = `<a class="edit-hospital" href="?page=pages&mainpages=booking&subpages=edit&booking_id=${e.booking_id}">تعديل <i class="fas fa-edit"></i></a>\n            <a class="delete-booking" data-id="?page=pages&mainpages=booking&hbooking_id=${e.booking_id}" href="#" >حذف <i class="fas fa-trash-alt"></i></i></a>`, t.classList.add("table-data"), t.appendChild(a).setAttribute("data-id", e.booking_id), t.appendChild(n), t.appendChild(o), t.appendChild(d), t.appendChild(i), t.appendChild(s), t.appendChild(l), tableParent.appendChild(t)
      }), setTimeout(() => {
        document.querySelector(".hidden-load").classList.add("hidden")
      }, 20)
    }
  }), e.open("POST", "management/config/includes/getbookingtable.php", !0), e.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), e.send()
};
document.querySelector("body").onload = getTableData(), setTimeout(() => {
  document.addEventListener("click", e => {
    if (e.target.classList.contains("delete-booking")) {
      let t = confirm("هل انت متأكد ؟"),
        a = e.target.getAttribute("data-id").slice(e.target.getAttribute("data-id").search(/\W[1-9]{1,}$/) + 1);
      if (1 == t) {
        let t = new XMLHttpRequest;
        t.onreadystatechange = (() => {
          if (4 === t.readyState && 200 === t.status)
            if (t.responseText > 0) {
              let t = document.createElement("p");
              t.classList.add("success", "msg"), textOfMessage = document.createTextNode("تم : الحذف"), t.appendChild(textOfMessage), document.querySelector(".manage-booking  .table-of-booking").appendChild(t), setTimeout(() => {
                document.querySelector(".table-of-booking").removeChild(t)
              }, 2e3), e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode), countbooking.textContent -= 1
            } else {
              let e = document.createElement("p");
              e.classList.add("unsuccess", "msg"), textOfMessage = document.createTextNode("خطأ : لم يتم الحذف"), e.appendChild(textOfMessage), document.querySelector(".manage-booking .table-of-booking").appendChild(e), setTimeout(() => {
                document.querySelector(".manage-booking .table-of-booking").removeChild(e)
              }, 2e3)
            }
        }), t.open("GET", "management/config/includes/deletebooking.php?booking_id=" + a, !0), t.send()
      } else alert("تمام")
    }
  })
}, 1e3);