let tableParent = document.querySelector(".table-content"),
  countchief = document.querySelector(".count-chief");
const getTableData = () => {
  let e = new XMLHttpRequest;
  e.onreadystatechange = (() => {
    if (4 === e.readyState && 200 === e.status) {
      let t = JSON.parse(e.responseText);
      countchief.textContent = t.length, t.forEach(e => {
        let t = document.createElement("tr"),
          a = document.createElement("td"),
          d = document.createElement("td"),
          n = document.createElement("td"),
          c = document.createElement("td"),
          i = document.createElement("td");
        a.innerHTML = e.ceo_id, d.innerHTML = e.ceo_name, n.innerHTML = e.ceo_aka, c.innerHTML = `<img src="uploads/${e.ceo_avatar}" alt="" srcset="">`, i.innerHTML = `<a class="edit-chief" href="?page=pages&mainpages=chiefexecutiveofficer&subpages=edit&chief_id=${e.ceo_id}">تعديل <i class="fas fa-edit"></i></a>\n                <a class="delete-chief" data-id="?page=pages&mainpages=chiefexecutiveofficer&chief_id=${e.ceo_id}" href="#" >حذف <i class="fas fa-trash-alt"></i></i></a>`, t.classList.add("table-data"), t.appendChild(a).setAttribute("data-id", e.ceo_id), t.appendChild(d), t.appendChild(n), t.appendChild(c), t.appendChild(i), tableParent.appendChild(t)
      }), setTimeout(() => {
        document.querySelector(".hidden-load").classList.add("hidden")
      }, 1e3)
    }
  }), e.open("POST", "management/config/includes/getchieftable.php", !0), e.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), e.send()
};
document.querySelector("body").onload = getTableData(), setTimeout(() => {
  document.addEventListener("click", e => {
    if (console.log(), e.target.classList.contains("delete-chief")) {
      let t = confirm("هل انت متأكد ؟"),
        a = e.target.getAttribute("data-id").slice(e.target.getAttribute("data-id").search(/\W[1-9]{1,}$/) + 1);
      if (1 == t) {
        let t = new XMLHttpRequest;
        t.onreadystatechange = (() => {
          if (4 === t.readyState && 200 === t.status)
            if (t.responseText > 0) {
              let t = document.createElement("p");
              t.classList.add("success", "msg"), textOfMessage = document.createTextNode("تم : الحذف"), t.appendChild(textOfMessage), document.querySelector(".table-of-chief").appendChild(t), setTimeout(() => {
                document.querySelector(".table-of-chief").removeChild(t)
              }, 2e3), e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode), countchief.textContent -= 1
            } else {
              let e = document.createElement("p");
              e.classList.add("unsuccess", "msg"), textOfMessage = document.createTextNode("خطأ : لم يتم الحذف"), e.appendChild(textOfMessage), document.querySelector(".table-of-chief").appendChild(e), setTimeout(() => {
                document.querySelector(".table-of-chief").removeChild(e)
              }, 2e3)
            }
        }), t.open("GET", "management/config/includes/deletechief.php?chief_id=" + a, !0), t.send()
      } else alert("تمام")
    }
  })
}, 1e3);