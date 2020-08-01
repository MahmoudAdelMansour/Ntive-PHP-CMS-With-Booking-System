const getData = () => {
    document.querySelector('.hidden-load').classList.remove('hidden');
    let reQ = new XMLHttpRequest();
    reQ.onreadystatechange = () => {
        if(reQ.readyState === 4 && reQ.status === 200) {
            if(reQ.responseText == 'id'){
                messages = document.createElement('p');
                messages.classList.add('unsuccess','msg');
                textOfMessage = document.createTextNode("رقم الرئيس غير صحيح");
                messages.appendChild(textOfMessage);
                document.querySelector('.formContainer').appendChild(messages);
                setTimeout(()=>{
                    document.querySelector('.formContainer').removeChild(messages);
                    window.location = './';
                },2000)
            } else {
                let chiefData   = document.querySelectorAll('.edit-chief-input'),
                    uploadInput = chiefData[0],
                    perviewImage= document.querySelector('.inputs-chief-upload');
                    titleInput  = chiefData[1],
                    nameInput   = chiefData[2],
                    wordInput   = chiefData[3];
                    // console.log(JSON.parse(reQ.responseText));
                    titleInput.value = JSON.parse(reQ.responseText)['ceo_aka'];
                    nameInput.value = JSON.parse(reQ.responseText)['ceo_name'];
                    wordInput.value = JSON.parse(reQ.responseText)['ceo_word'];            
                    perviewImage.src = 'uploads/' + JSON.parse(reQ.responseText)['ceo_avatar'];
                    uploadInput.setAttribute('data','uploads/' + JSON.parse(reQ.responseText)['ceo_avatar'])
                
            }
            document.querySelector('.hidden-load').classList.add('hidden');

        }
    }
    reQ.open('POST',"management/config/includes/editchief.php" + window.location.search, true);
    reQ.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    reQ.send();

}
document.querySelector('body').onload = getData();
