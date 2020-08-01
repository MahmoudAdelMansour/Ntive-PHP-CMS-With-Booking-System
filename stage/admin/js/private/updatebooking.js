let editInputs = document.querySelectorAll('.edit-booking-input'),
    updateButton = document.querySelector('.save-edit-booking'),
    updateAvatar = new FormData,
    messageInfo  = '' ;
const updatebooking = (param, param2) => {
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
        upReq.open('POST', "management/config/includes/updatebooking.php", true);
        upReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
        upReq.send(param);
    } else {
        upReq.open('POST', "management/config/includes/updatebooking.php", true);
        upReq.send(param);
    }
}
updateButton.addEventListener('click',() => {
let booking_name = editInputs[0].value.trim().toString().toLowerCase();
    booking_number = editInputs[1].value.trim().toLowerCase();
    booking_date    = `${editInputs[2].value.trim().toLowerCase()} ${editInputs[3].value.trim().toLowerCase()}`;
    booking_hospital = selectBox.selectedIndex;
    booking_perm = document.querySelector("#bookingstatuson").checked ? document.querySelector("#bookingstatuson").value : document.querySelector("#bookingstatusoff").value ; 
    id_value     = Number(window.location.search.slice(window.location.search.search(/[0-9]{1,}$/)));
    idBooking      = Number.isInteger(id_value) ? id_value :   1 ;
    updatebooking(`data=1&id=${idBooking}&booking_name=${booking_name}&booking_number=${booking_number}&booking_date=${booking_date}&booking_hospital=${booking_hospital}&booking_perm=${booking_perm}`,1)
})
document.querySelector('body').addEventListener('keyup',event => {
    if (event.keyCode === 13) {
        updateButton.click();
    }
    });
