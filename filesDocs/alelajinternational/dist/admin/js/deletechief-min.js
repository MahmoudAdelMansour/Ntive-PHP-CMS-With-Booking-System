let buttonDelete = document.querySelector(".delete-chief");
buttonDelete.addEventListener("click", () => {
  if (1 == confirm("هل انت متأكد ؟")) {
    let e = new XMLHttpRequest;
    e.onreadystatechange = (() => {
      if (4 === e.readyState && 200 === e.status)
        if (console.log(e.responseText), e.responseText > 0);
        else {
          let e = document.createElement("p");
          e.classList.add("unsuccess", "msg"), textOfMessage = document.createTextNode("خطأ : لم يتم الحذف"), e.appendChild(textOfMessage), document.querySelector(".table-of-chief").appendChild(e), setTimeout(() => {
            document.querySelector(".table-of-chief").removeChild(e), window.location = "./"
          }, 2e3)
        }
    }), e.open("POST", "management/config/includes/deletechief.php", !0), reQ.send(`id=${data.ceo_id}`)
  }
});