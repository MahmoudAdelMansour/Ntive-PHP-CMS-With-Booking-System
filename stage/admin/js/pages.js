let storeActiveWindow = localStorage.getItem('active',null),
    theLinks          = document.querySelectorAll('.child-links li a');
function activeMenuButton(activeClass,attributeCheck) {
    theLinks.forEach(item => {
        item.addEventListener('click', () => {
            if(item.hasAttribute(attributeCheck)){         
                if(item.getAttribute(attributeCheck).search(/(\W)[a-zA-Z]*$/) > 0) {
                    item.classList.add(activeClass);
                    
        }
        }
        localStorage.setItem('active',item.getAttribute('href').slice(window.location.search.search(/[a-zA-Z]*$/)));
        
        })
        
    })
}
activeMenuButton('active', 'href');
theLinks.forEach(e => {
    if(e.getAttribute('href').slice(window.location.search.search(/[a-zA-Z]*$/)) == window.location.search.slice(window.location.search.search(/[a-zA-Z]*$/))){
    e.classList.add('active');
}
})
tinymce.init({
    selector:'#ceowordedit,#stuffwordadd,#hospitaldescadd,#hospitaldescedit',
    plugin: 'a_tinymce_plugin',
  a_plugin_option: true,
  a_configuration_option: 500,
  width:'100%',
  language:'ar',
  plugins: 'link image code',
    relative_urls: true
});
