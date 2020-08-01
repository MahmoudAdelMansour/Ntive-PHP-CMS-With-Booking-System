let editInputs = document.querySelectorAll('.edit-hospital-input'),
    updateButton = document.querySelector('.save-edit-hospital'),
    updateAvatar = new FormData,
    messageInfo  = '' ;
const updatehospital = (param, param2) => {
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
        upReq.open('POST', "management/config/includes/updatehospitals.php", true);
        upReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
        upReq.send(param);
    } else {
        upReq.open('POST', "management/config/includes/updatehospitals.php", true);
        upReq.send(param);
    }
}
updateButton.addEventListener('click',() => {
let avatar_hospital = editInputs[0],
    avatarhospital = avatar_hospital.value !== "" || avatar_hospital.value.length > 0 ?  editInputs[0].files[0] : editInputs[0].getAttribute('data');
    hospital_name = editInputs[1].value.trim().toString().toLowerCase();
    hospital_word = String(encodeURIComponent(tinymce.activeEditor.getContent()));
    hospital_perm = document.querySelector("#hospitalstatuson").checked ? document.querySelector("#hospitalstatuson").value :document.querySelector("#hospitalstatusoff").value ; 
    id_value     = Number(window.location.search.slice(window.location.search.search(/[0-9]{1,}$/)));
    idHospital      = Number.isInteger(id_value) ? id_value :   1 ;
    if (typeof(avatarhospital) !== "string"){
        
    updateAvatar.append("hospitalavataredit", avatarhospital,id_value + avatarhospital.name);
    updatehospital(updateAvatar);
    
    }
    
    updatehospital(`data=1&id=${idHospital}&hospital_name=${hospital_name}&hospital_word=${hospital_word}&hospital_perm=${hospital_perm}`,1)
})
document.querySelector('body').addEventListener('keyup',event => {
    if (event.keyCode === 13) {
        updateButton.click();
    }
    });
