const mainMenuBtn = document.querySelector('.main_menu_btn');
const cancelBtn = document.querySelector('.fa-xmark');

const mobileMenu = document.querySelector('.mobile_menu');

const down01 = document.querySelector('.down_01');
const down02 = document.querySelector('.down_02');

const mobileList = document.querySelector('.mobile_li_ul');
const mobileList02 = document.querySelector('.mobile_li_ul_02');

let listType = true;
let listType02 = this;

console.log(window.innerWidth);

mainMenuBtn.addEventListener('click', (e) => {
    mobileMenu.style.right = '0';
});

cancelBtn.addEventListener('click', () => {
    mobileMenu.style.right = '-100%';
});

down01.addEventListener('click', () => {
    mobileList.style.transition = '0.5s';
    if (listType) {
        mobileList.style.height = '12.5rem';

        listType = !listType;
    } else {
        mobileList.style.height = '0';
        listType = !listType;
    }
});

down02.addEventListener('click', () => {
    mobileList02.style.transition = '0.5s';
    if (listType02) {
        mobileList02.style.height = '5rem';

        listType02 = !listType02;
    } else {
        mobileList02.style.height = '0';
        listType02 = !listType02;
    }
});
