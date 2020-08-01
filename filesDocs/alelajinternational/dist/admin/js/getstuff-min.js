let tableParent = document.querySelector(".manage-stuff .table-content"),
  countstuff = document.querySelector(".count-stuff");
const getTableData = () => {
  let e = new XMLHttpRequest;
  e.onreadystatechange = (() => {
    if (4 === e.readyState && 200 === e.status) {
      let t = JSON.parse(e.responseText);
      countstuff.textContent = t.length, t.forEach(e => {
        let t = document.createElement("tr"),
          a = document.createElement("td"),
          s = document.createElement("td"),
          n = document.createElement("td"),
          d = document.createElement("td"),
          u = document.createElement("td");
        a.innerHTML = e.user_id, s.innerHTML = e.user_name, n.innerHTML = e.section, d.innerHTML = `<img src="uploads/${e.user_avatar}" alt="" srcset="">`, u.innerHTML = `<a class="edit-stuff" href="?page=pages&mainpages=stuffcompany&subpages=edit&user_id=${e.user_id}">تعديل <i class="fas fa-edit"></i></a>\n            <a class="delete-stuff" data-id="?page=pages&mainpages=stuffcompany&stuff_id=${e.user_id}" href="#" >حذف <i class="fas fa-trash-alt"></i></i></a>`, t.classList.add("table-data"), t.appendChild(a).setAttribute("data-id", e.com_id), t.appendChild(s), t.appendChild(n), t.appendChild(d), t.appendChild(u), tableParent.appendChild(t)
      }), setTimeout(() => {
        document.querySelector(".hidden-load").classList.add("hidden")
      }, 1e3)
    }
  }), e.open("POST", "management/config/includes/getstufftable.php", !0), e.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), e.send()
};
document.querySelector("body").onload = getTableData(), setTimeout(() => {
  document.addEventListener("click", e => {
    if (e.target.classList.contains("delete-stuff")) {
      let t = confirm("هل انت متأكد ؟"),
        a = e.target.getAttribute("data-id").slice(e.target.getAttribute("data-id").search(/\W[1-9]{1,}$/) + 1);
      if (1 == t) {
        let t = new XMLHttpRequest;
        t.onreadystatechange = (() => {
          if (4 === t.readyState && 200 === t.status)
            if (t.responseText > 0) {
              let t = document.createElement("p");
              t.classList.add("success", "msg"), textOfMessage = document.createTextNode("تم : الحذف"), t.appendChild(textOfMessage), document.querySelector(".manage-stuff  .table-of-stuff").appendChild(t), setTimeout(() => {
                document.querySelector(".table-of-stuff").removeChild(t)
              }, 2e3), e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode), countstuff.textContent -= 1
            } else {
              let e = document.createElement("p");
              e.classList.add("unsuccess", "msg"), textOfMessage = document.createTextNode("خطأ : لم يتم الحذف"), e.appendChild(textOfMessage), document.querySelector(".manage-stuff .table-of-stuff").appendChild(e), setTimeout(() => {
                document.querySelector(".manage-stuff .table-of-stuff").removeChild(e)
              }, 2e3)
            }
        }), t.open("GET", "management/config/includes/deletestuff.php?stuff_id=" + a, !0), t.send()
      } else alert("تمام")
    }
  })
}, 1e3);