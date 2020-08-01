let editInputs = document.querySelectorAll('.edit-companies-input'),
    updateButton = document.querySelector('.save-edit-companies'),
    updateAvatar = new FormData,
    messageInfo  = '' ;
const updateCompanies = (param, param2) => {
    let messages = document.createElement('p'); 
        textOfMessage  = '' ;
    let upReq = new XMLHttpRequest();
    upReq.onreadystatechange = () => {
        if (upReq.readyState === 4 && upReq.status === 200) {
            // console.log(upReq.responseText);
            if (upReq.responseText > 0) {
                messages = document.createElement('p');
                messageInfo = 'لم يتم حفظ التعديلات' ;
                textOfMessage = document.createTextNode(messageInfo);
                messages.classList.add('unsuccess', 'msg');
                
            } else {
                messages = document.createElement('p');
                messageInfo = 'تم اضافة التعديلات' ;
                textOfMessage = document.createTextNode(messageInfo);
                messages.classList.add('success', 'msg');
                getData();
            }
        }
        messages.appendChild(textOfMessage);
        document.querySelector('.formContainer').appendChild(messages);
        setInterval(() => {
            document.querySelector('.formContainer').removeChild(document.querySelector('.msg'));
        }, 3000);
    }
    if (param2 == 1) {
        upReq.open('POST', "management/config/includes/updatecompanies.php", true);
        upReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
        upReq.send(param);
    } else {
        upReq.open('POST', "management/config/includes/updatecompanies.php", true);
        upReq.send(param);
    }
}
updateButton.addEventListener('click',() => {
let avatar_Companies = editInputs[0],
    avatarCompanies = avatar_Companies.value !== "" || avatar_Companies.value.length > 0 ?  editInputs[0].files[0] : editInputs[0].getAttribute('data');
    linksCompanies   = editInputs[2].value,
    nameComapnies    = editInputs[1].value,
    id_value     = Number(window.location.search.slice(window.location.search.search(/[0-9]{1,}$/)));
    idCompanies      = Number.isInteger(id_value) ? id_value :   1 ;
    if (typeof(avatarCompanies) !== "string"){
        
    updateAvatar.append("companiesavataredit", avatarCompanies,id_value + avatarCompanies.name);
    updateCompanies(updateAvatar);
    
    }
    
    updateCompanies(`data=1&id=${idCompanies}&companies_name=${nameComapnies}&companies_link=${linksCompanies}`,1)
})
document.querySelector('body').addEventListener('keyup',event => {
    if (event.keyCode === 13) {
        updateButton.click();
    }
    });
