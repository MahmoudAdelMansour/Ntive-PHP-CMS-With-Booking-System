let insertButton = document.querySelector('.save-add'),
chiefData = document.querySelectorAll('.add-chief-input'),
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
            messageInfo = 'لم يتم اضافة رئيس تنفيذي';
            textOfMessage = document.createTextNode(messageInfo);
            messages.classList.add('unsuccess','msg');
        } else {
           
            messages = document.createElement('p');
            messageInfo = 'تم اضافة رئيس تنفيذي جديد';
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
    myReq.open('POST', "management/config/includes/insertchief.php", true);
    myReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
    myReq.send(param);
} else {
    myReq.open('POST', "management/config/includes/insertchief.php", true);
    myReq.send(param);
}
}
insertButton.addEventListener('click', () => {
title = chiefData[1].value.trim().toString().toLowerCase();
name = chiefData[2].value.trim().toString().toLowerCase();
word = String(encodeURIComponent(tinymce.activeEditor.getContent()));
avatar.append("chiefavataradd", chiefData[0].files[0]);
sendReq(avatar);
sendReq(`data=1&chief_name=${name}&chief_title=${title}&chief_word=${word}`, 1);
});
document.querySelector('body').addEventListener('keyup',event => {
if (event.keyCode === 13) {
    insertButton.click();
}
});