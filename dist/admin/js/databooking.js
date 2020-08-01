let selectBox = document.querySelector('#bookingHospitals');
const getHospitalsHtml = () => {
  let reqOf = new XMLHttpRequest();
  reqOf.onreadystatechange = () => {
    if (reqOf.readyState === 4 && reqOf.status === 200) {
      // console.log(JSON.parse(reqOf.responseText));
      JSON.parse(reqOf.responseText).forEach(el => {
        console.log(Object.values(el)[3]);
        // Object.values(el).forEach(element => {
        //     // console.log(element);
        // } )

        let optionOf = document.createElement("option"),
          displayOf = document.querySelector("option[data='1']") != null ? displayOf.parentElement.removeChild(document.querySelector("option[data='1']")) : "",
          optionText = document.createTextNode(Object.values(el)[1]);
        optionOf.setAttribute('value', Object.values(el)[0]);
        optionOf.setAttribute('data', Object.values(el)[3]);
        optionOf.appendChild(optionText);
        selectBox.appendChild(optionOf);


      })
    }
  }
  reqOf.open('POST', 'management/config/includes/gethospitalstable.php', true);
  reqOf.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  reqOf.send();
}
document.querySelector('body').onload = getHospitalsHtml();