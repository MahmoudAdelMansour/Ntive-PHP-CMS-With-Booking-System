let insertButton = document.querySelector('.save-add-hospital'),
hospitalData = document.querySelectorAll('.add-hospital-input'),
avatar = new FormData(),
reqErrors = ["empty","extension"],
messageInfo = '';
// chiefData.forEach(e => {
//     e.addEventListener('change', () => {
//     })
// })
const sendReq = (param, param2) => {
let messages ,textOfMessage ;
let myReq = new XMLHttpRequest();
myReq.onreadystatechange = () => {
    if (myReq.readyState === 4 && myReq.status === 200) {
        if (reqErrors.includes(myReq.responseText) == true) {
            messages = document.createElement('p');
            messageInfo = 'لم يتم اضافة المستشفي';
            textOfMessage = document.createTextNode(messageInfo);
            messages.classList.add('unsuccess','msg');
        } else {
        
            messages = document.createElement('p');
            messageInfo = 'تم اضافة المستشفي';
            textOfMessage = document.createTextNode(messageInfo);
            messages.classList.add('success','msg');
            // console.log(myReq.responseText);
        }


    }
    messages.appendChild(textOfMessage);
    document.querySelector('.formContainer').appendChild(messages);
    setInterval(() => {
        document.querySelector('.formContainer').removeChild(document.querySelector('.msg'));
    }, 3000);

}
if (param2 == 1) {
    myReq.open('POST', "management/config/includes/inserthospitals.php", true);
    myReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
    myReq.send(param);
} else {
    myReq.open('POST', "management/config/includes/inserthospitals.php", true);
    myReq.send(param);
}
}
insertButton.addEventListener('click', () => {

hospital_name = hospitalData[1].value.trim().toString().toLowerCase();
hospital_word = String(encodeURIComponent(tinymce.activeEditor.getContent()));
hospital_perm = document.querySelector("#hospitalstatuson").checked ? document.querySelector("#hospitalstatuson").value :document.querySelector("#hospitalstatusoff").value ;   


avatar.append("hospitalavataradd", hospitalData[0].files[0]);
    sendReq(avatar);
    sendReq(`data=1&hospital_name=${hospital_name}&hospital_word=${hospital_word}&hospital_perm=${hospital_perm}`, 1);
});
document.querySelector('body').addEventListener('keyup',event => {
if (event.keyCode === 13) {
    insertButton.click();
}
});