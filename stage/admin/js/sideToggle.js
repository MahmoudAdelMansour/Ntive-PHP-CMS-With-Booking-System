//  Toggles In Dashboard
    // Sidebar Toggle With Button
    let toggleSide   = document.querySelector('.toggle-side'),
    sidebarPart  = document.querySelector('.sidebar'),
    getMenuStore = localStorage.getItem('menubar');
const enableMenu = () => {
    toggleSide.attributes['0'].value = 'on'
    toggleSide.classList.remove('fa-toggle-off');
    toggleSide.classList.add('fa-toggle-on');
    sidebarPart.classList.remove('out');
    localStorage.setItem('menubar','enabled');
}
const disableMenu = () => {
    toggleSide.attributes['0'].value = 'off';
    toggleSide.classList.remove('fa-toggle-on');
    toggleSide.classList.add('fa-toggle-off');
    sidebarPart.classList.add('out');
    localStorage.setItem('menubar',null);
}
if (getMenuStore == 'enabled') {
    enableMenu();
} else {
    disableMenu();
}
toggleSide.addEventListener('click', () => {
    
    if (toggleSide.attributes['0'].value == 'on') {
        disableMenu();
        getMenuStore = localStorage.getItem('menubar');
        
    } else if (toggleSide.attributes['0'].value == 'off') {
        enableMenu();
        getMenuStore = localStorage.getItem('menubar');
       
    }
})
    // bellon Notification 
document.querySelector('.fa-bell').onclick = () => {
    alert("لتفعيل الاشعارات تواصل مع المطور")
};
    // Child Elements In Menu Sidebar
    let tMButtons       = document.querySelectorAll('.show'),
    tMButtonsOne    = tMButtons[0],
    tMButtonsTwo    = tMButtons[1],
    getDataStore    = localStorage.getItem('subMenu',null),
    getDataStoreTwo = localStorage.getItem('subMenut',null);
    const enableSubMenu = (elem,storageKey) => {
        elem.nextElementSibling.classList.remove('hideChild');
        elem.firstElementChild.classList.add('active');
        localStorage.setItem(storageKey,'enabled');
    };
    const disableSubMenu = (elem,storageKey) => {
        elem.nextElementSibling.classList.add('hideChild');
        elem.firstElementChild.classList.remove('active');
        localStorage.setItem(storageKey,null);
    };
    function autoEnable(storageVar,buttonVar,storageKey){
        if (storageVar == 'enabled') {
            enableSubMenu(buttonVar,storageKey);
        } else {
            disableSubMenu(buttonVar,storageKey);
        };
    }
    autoEnable(getDataStore,tMButtonsOne,'subMenu');
    autoEnable(getDataStoreTwo,tMButtonsTwo,'subMenut');
    tMButtonsOne.addEventListener('click', () => {
        if (tMButtonsOne.nextElementSibling.classList.contains('hideChild')) {
            enableSubMenu(tMButtonsOne,'subMenu');
    
        } else {
            disableSubMenu(tMButtonsOne,'subMenu');
        }

    });
    tMButtonsTwo.addEventListener('click', () => {
        if (tMButtonsTwo.nextElementSibling.classList.contains('hideChild')) {
            enableSubMenu(tMButtonsTwo,'subMenut');
    
        } else {
            disableSubMenu(tMButtonsTwo,'subMenut');
        }
    })
//  Full Screen Area -------------- Poom -------------
let ele = document.documentElement,
    buttonFull = document.querySelector('.toggle-fullscreen');

function openFullScreen() {
    if (ele.requestFullscreen) {
        ele.requestFullscreen();
    } else if (ele.mozRequestFullscreen) {
        ele.mozRequestFullscreen();
    } else if (ele.webkitRequestFullscreen) {
        ele.webkitRequestFullscreen();
    } else if (ele.msRequestFullscreen) {
        ele.msRequestFullscreen();
    }
}

function closeFullScreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullscreen) {
        document.mozCancelFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}
buttonFull.addEventListener('click', () => {
    buttonFull.classList.toggle('on');
    if (buttonFull.classList.contains('on')) {
        openFullScreen();

    } else {
        closeFullScreen();
    }
});
// Avatar Ico Area  To Open A Menu
let avatarMenu = document.querySelector('.toggle-user'),
    menuOfAvatar = document.querySelector('.menu-avatar');

avatarMenu.addEventListener('click', () => {
    menuOfAvatar.classList.toggle('visimenu');

})
    //  Change A Colors 
    //  Change A Colors 
    let colorsGallery = document.querySelectorAll('.colors-change li'),
    colorsAtri = [],
    dataColor  = localStorage.getItem('colorData',null);
colorsGallery.forEach(colorButton => {
    colorsAtri.push(colorButton.getAttribute('data-color'));
    colorButton.addEventListener('click', () => {
        document.body.classList.remove(...colorsAtri);
        document.body.classList.add(colorButton.getAttribute('data-color'));
        localStorage.setItem('colorData',colorButton.getAttribute('data-color'));

    })
    
});
document.addEventListener('click',e => {
    if(e.target.getAttribute('data-color') == 'deffault') {
        document.body.classList.remove(...colorsAtri);
        localStorage.setItem('colorData',null);
    }
    
});
if(dataColor !== null ){
    document.body.classList.add(dataColor);
}
tinymce.init({
    selector: 'textarea#editor',  //Change this value according to your HTML
    auto_focus: 'element1',
    width: "700",
    height: "200"
}); 