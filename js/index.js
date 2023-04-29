const mobile_menu = document.getElementsByClassName('mobile-menu')[0];
const toogle = document.getElementById('open');


bool = true;
function menu(){
    if(bool){
        bool = !bool;
        mobile_menu.style.height = 100+'vh';
    }else{
        bool = !bool;
        mobile_menu.style.height = '0';
    }
}

toogle.addEventListener('click', menu);

