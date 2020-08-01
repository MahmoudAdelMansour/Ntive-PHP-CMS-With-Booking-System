const getData = () => {
    document.querySelector('.hidden-load').classList.remove('hidden');
    let reQ = new XMLHttpRequest();
    reQ.onreadystatechange = () => {
        if(reQ.readyState === 4 && reQ.status === 200) {
            if(reQ.responseText == 'id'){
                messages = document.createElement('p');
                messages.classList.add('unsuccess','msg');
                textOfMessage = document.createTextNode("رقم المستشفي غير صحيح");
                messages.appendChild(textOfMessage);
                document.querySelector('.formContainer').appendChild(messages);
                setTimeout(()=>{
                    document.querySelector('.formContainer').removeChild(messages);
                    window.location = './';
                },2000)
            } else {
                let hospitalData   = document.querySelectorAll('.edit-hospital-input'),
                    uploadInput = hospitalData[0],
                    perviewImage= document.querySelector('.inputs-hospital-upload');
                    nameInput   = hospitalData[1];
                    wordInput   = hospitalData[2],
                    permInput   = JSON.parse(reQ.responseText)['hospital_status'] == 1 ? hospitalData[4] : hospitalData[3];
                    // user_group
                    // console.log(JSON.parse(reQ.responseText));
                    nameInput.value = JSON.parse(reQ.responseText)['hospital_name'];
                    wordInput.value = JSON.parse(reQ.responseText)['hospital_description'];
                    permInput.checked = true;

                    perviewImage.src = 'uploads/' + JSON.parse(reQ.responseText)['hospital_avatar'];
                    uploadInput.setAttribute('data','uploads/' + JSON.parse(reQ.responseText)['hospital_avatar'])
                
            }
            document.querySelector('.hidden-load').classList.add('hidden');

        }
    }
    reQ.open('POST',"management/config/includes/edithospitals.php" + window.location.search, true);
    reQ.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    reQ.send();

}
document.querySelector('body').onload = getData();
