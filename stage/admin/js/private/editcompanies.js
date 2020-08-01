const getData = () => {
    document.querySelector('.hidden-load').classList.remove('hidden');
    let reQ = new XMLHttpRequest();
    reQ.onreadystatechange = () => {
        if(reQ.readyState === 4 && reQ.status === 200) {
            if(reQ.responseText == 'id'){
                messages = document.createElement('p');
                messages.classList.add('unsuccess','msg');
                textOfMessage = document.createTextNode("رقم الشركة غير صحيح");
                messages.appendChild(textOfMessage);
                document.querySelector('.formContainer').appendChild(messages);
                setTimeout(()=>{
                    document.querySelector('.formContainer').removeChild(messages);
                    window.location = './';
                },2000)
            } else {
                let companiesData   = document.querySelectorAll('.edit-companies-input'),
                    uploadInput = companiesData[0],
                    perviewImage= document.querySelector('.inputs-companies-upload');
                    linkInput  = companiesData[2],
                    nameInput   = companiesData[1];
                    // console.log(JSON.parse(reQ.responseText));
                    linkInput.value = JSON.parse(reQ.responseText)['ceo_link'];
                    nameInput.value = JSON.parse(reQ.responseText)['com_name'];      
                    perviewImage.src = 'uploads/' + JSON.parse(reQ.responseText)['com_avatar'];
                    uploadInput.setAttribute('data','uploads/' + JSON.parse(reQ.responseText)['com_avatar'])
                
            }
            document.querySelector('.hidden-load').classList.add('hidden');

        }
    }
    reQ.open('POST',"management/config/includes/editcompanies.php" + window.location.search, true);
    reQ.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    reQ.send();

}
document.querySelector('body').onload = getData();
