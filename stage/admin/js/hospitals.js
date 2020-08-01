let hospitalLogin = document.querySelectorAll('.hospital-all-inputs'),
    upinputs_hospital  = document.querySelectorAll('.inputs-hospital-upload'),
    upinputb_hospital   = document.querySelector('.up-input') != null ? document.querySelector('.up-input') : document.querySelector('body') ;
    if (window.location.search.search(/\W(e|a|u|d){1}[a-z]{1,}/) > 0){
        upinputs_hospital.forEach(item =>  {
            item.addEventListener('click',() => {
                upinputb_hospital.click();
            })
        
        });
        hospitalLogin.forEach(input => {
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
        upinputb_hospital.addEventListener('change',() => {
            const file = upinputb_hospital.files[0];
            if (file) {
                const reader = new FileReader();
                reader.addEventListener('load', () => {
                    upinputs_hospital[0].setAttribute('src',reader.result);
                })
                reader.readAsDataURL(file);
            }
        });
    } else {

};
