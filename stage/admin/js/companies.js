let companiesLogin = document.querySelectorAll('.companies-all-inputs'),
    upinputs_com   = document.querySelectorAll('.inputs-companies-upload'),
    upinputb_com    =document.querySelector('.up-input') != null ? document.querySelector('.up-input') : document.querySelector('body') ;
    if (window.location.search.search(/\W(e|a|u|d){1}[a-z]{1,}/) > 0){
        upinputs_com.forEach(item =>  {
            item.addEventListener('click',() => {
                upinputb_com.click();
            })
        
        });
        companiesLogin.forEach(input => {
            input.onfocus = () => {
                document.querySelector('.save-all').classList.add('shake-animation');
                input.setAttribute('data-store',input.getAttribute('placeholder'));
                input.removeAttribute('placeholder');
        }
        input.onblur = () => {
            document.querySelector('.save-all').classList.remove('shake-animation');
        
            input.setAttribute('placeholder',input.getAttribute('data-store'));
                input.removeAttribute('data-store');
            }
        });
        //  Perview Image 
        upinputb_com.addEventListener('change',() => {
            const file = upinputb_com.files[0];
            if (file) {
                const reader = new FileReader();
                reader.addEventListener('load', () => {
                    upinputs_com[0].setAttribute('src',reader.result);
                })
                reader.readAsDataURL(file);
            }
        });
    } else {

};
