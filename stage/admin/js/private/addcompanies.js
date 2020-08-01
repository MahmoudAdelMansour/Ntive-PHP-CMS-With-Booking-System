let insertButton = document.querySelector('.save-add-companies'),
companiesData = document.querySelectorAll('.add-companies-input'),
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
            messageInfo = 'لم يتم اضافة الشركة';
            textOfMessage = document.createTextNode(messageInfo);
            messages.classList.add('unsuccess','msg');
        } else {
        
            messages = document.createElement('p');
            messageInfo = 'تم اضافة الشركة';
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
    myReq.open('POST', "management/config/includes/insertcompanies.php", true);
    myReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
    myReq.send(param);
} else {
    myReq.open('POST', "management/config/includes/insertcompanies.php", true);
    myReq.send(param);
}
}
insertButton.addEventListener('click', () => {
com_link = companiesData[2].value.trim().toString().toLowerCase();
com_name = companiesData[1].value.trim().toString().toLowerCase();
avatar.append("companiesavataradd", companiesData[0].files[0]);
sendReq(avatar);
sendReq(`data=1&com_name=${com_name}&com_link=${com_link}`, 1);
});
document.querySelector('body').addEventListener('keyup',event => {
if (event.keyCode === 13) {
    insertButton.click();
}
});