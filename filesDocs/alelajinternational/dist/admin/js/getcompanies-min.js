let tableParent = document.querySelector(".manage-companies .table-content"),
  countcompanies = document.querySelector(".count-companies");
const getTableData = () => {
  let e = new XMLHttpRequest;
  e.onreadystatechange = (() => {
    if (4 === e.readyState && 200 === e.status) {
      let t = JSON.parse(e.responseText);
      countcompanies.textContent = t.length, t.forEach(e => {
        let t = document.createElement("tr"),
          a = document.createElement("td"),
          n = document.createElement("td"),
          s = document.createElement("td"),
          c = document.createElement("td"),
          d = document.createElement("td");
        a.innerHTML = e.com_id, n.innerHTML = e.com_name, s.innerHTML = `<a target="_blank" href="${e.ceo_link}">فتح</a>`, c.innerHTML = `<img src="uploads/${e.com_avatar}" alt="" srcset="">`, d.innerHTML = `<a class="edit-companies" href="?page=pages&mainpages=companiescare&subpages=edit&companies_id=${e.com_id}">تعديل <i class="fas fa-edit"></i></a>\n            <a class="delete-companies" data-id="?page=pages&mainpages=companiescare&companies_id=${e.com_id}" href="#" >حذف <i class="fas fa-trash-alt"></i></i></a>`, t.classList.add("table-data"), t.appendChild(a).setAttribute("data-id", e.com_id), t.appendChild(n), t.appendChild(s), t.appendChild(c), t.appendChild(d), tableParent.appendChild(t)
      }), setTimeout(() => {
        document.querySelector(".hidden-load").classList.add("hidden")
      }, 1e3)
    }
  }), e.open("POST", "management/config/includes/getcompaniestable.php", !0), e.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), e.send()
};
document.querySelector("body").onload = getTableData(), setTimeout(() => {
  document.addEventListener("click", e => {
    if (console.log(), e.target.classList.contains("delete-companies")) {
      let t = confirm("هل انت متأكد ؟"),
        a = e.target.getAttribute("data-id").slice(e.target.getAttribute("data-id").search(/\W[1-9]{1,}$/) + 1);
      if (1 == t) {
        let t = new XMLHttpRequest;
        t.onreadystatechange = (() => {
          if (4 === t.readyState && 200 === t.status)
            if (t.responseText > 0) {
              let t = document.createElement("p");
              t.classList.add("success", "msg"), textOfMessage = document.createTextNode("تم : الحذف"), t.appendChild(textOfMessage), document.querySelector(".manage-companies  .table-of-companies").appendChild(t), setTimeout(() => {
                document.querySelector(".table-of-companies").removeChild(t)
              }, 2e3), e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode), countcompanies.textContent -= 1
            } else {
              let e = document.createElement("p");
              e.classList.add("unsuccess", "msg"), textOfMessage = document.createTextNode("خطأ : لم يتم الحذف"), e.appendChild(textOfMessage), document.querySelector(".manage-companies .table-of-companies").appendChild(e), setTimeout(() => {
                document.querySelector(".manage-companies .table-of-companies").removeChild(e)
              }, 2e3)
            }
        }), t.open("GET", "management/config/includes/deletecompanies.php?companies_id=" + a, !0), t.send()
      } else alert("تمام")
    }
  })
}, 1e3);