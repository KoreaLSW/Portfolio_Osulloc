const headerMain = document.querySelector('.main_header');
const bannerMain = document.querySelector('.main_banner');

let bannerMainHeight = 0;
window.addEventListener('load', () => {
    bannerMainHeight = bannerMain.clientHeight;
});

const logoWhite = document.querySelector('.logo_white');
const logoBlack = document.querySelector('.logo_black');

const headerMenuList = document.querySelectorAll('.main_menu_list a');

const headerMagnifying = document.querySelector('.fa-magnifying-glass');
const headerShopping = document.querySelector('.fa-cart-shopping');
const headerCount = document.querySelector('.main_shop_count');

const headerEllipsis = document.querySelector('.fa-ellipsis-vertical');
const headerLogin = document.querySelector('.main_login');
const headerLanguage = document.querySelector('.main_language');
const headerDown = document.querySelector('.fa-caret-down');
const mobileMenuBtn = document.querySelector('.fa-bars');

window.addEventListener('scroll', (e) => {
    if (bannerMainHeight < this.scrollY) {
        headerMain.style.background = '#ffffff';
        logoWhite.style.display = 'none';
        logoBlack.style.display = 'block';
        headerMenuList.forEach((value) => {
            value.style.color = '#505050';
        });
        headerCount.style.border = '1px solid #505050';
        headerMagnifying.style.color = '#505050';
        headerShopping.style.color = '#505050';
        headerEllipsis.style.color = '#505050';
        headerLogin.style.color = '#505050';
        headerLanguage.style.color = '#505050';
        headerDown.style.color = '#505050';
        mainMenuBtn.style.color = '#505050';
    } else {
        headerMain.style.background =
            'linear-gradient(180deg,rgba(0, 0, 0, 0.6) 0%,rgba(0, 0, 0, 0.2) 50%,rgba(255, 255, 255, 0) 100%)';
        logoWhite.style.display = 'block';
        logoBlack.style.display = 'none';
        headerMenuList.forEach((value) => {
            value.style.color = '#ffffff';
        });
        headerCount.style.border = '1px solid #ffffff';
        headerMagnifying.style.color = '#ffffff';
        headerShopping.style.color = '#ffffff';
        headerEllipsis.style.color = '#ffffff';
        headerLogin.style.color = '#ffffff';
        headerLanguage.style.color = '#ffffff';
        headerDown.style.color = '#ffffff';
        mainMenuBtn.style.color = '#ffffff';
    }
});
