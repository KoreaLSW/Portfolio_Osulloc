const list = document.querySelector('.record_ul');
const listScrollWidth = list.scrollWidth;
const listClientWidth = list.clientWidth;
// 이벤트마다 갱신될 값
let startX = 0;
let nowX = 0;
let endX = 0;
let listX = 0;

const onScrollStart = (e) => {
    startX = getClientX(e);
    window.addEventListener('mousemove', onScrollMove);
    window.addEventListener('touchmove', onScrollMove);
    window.addEventListener('mouseup', onScrollEnd);
    window.addEventListener('touchend', onScrollEnd);
};

const onScrollMove = (e) => {
    nowX = getClientX(e, 'move');
    endX = getClientX(e, 'move');
    setTranslateX(listX + nowX - startX);
};

const onScrollEnd = (e) => {
    endX = getClientX(e, 'end');
    listX = getTranslateX();
    if (listX > 0) {
        setTranslateX(0);
        list.style.transition = `all 0.8s ease`;
        listX = 0;
    } else if (listX < listClientWidth - listScrollWidth) {
        setTranslateX(listClientWidth - listScrollWidth);
        list.style.transition = `all 0.8s ease`;
        listX = listClientWidth - listScrollWidth;
    }

    window.removeEventListener('mousedown', onScrollStart);
    window.removeEventListener('touchstart', onScrollStart);
    window.removeEventListener('mousemove', onScrollMove);
    window.removeEventListener('touchmove', onScrollMove);
    window.removeEventListener('mouseup', onScrollEnd);
    window.removeEventListener('touchend', onScrollEnd);
    window.removeEventListener('click', onClick);

    setTimeout(() => {
        bindEvents();
        list.style.transition = '';
    }, 800);
};

const onClick = (e) => {};

const getClientX = (e, type) => {
    if (type === 'end' && !e.clientX) {
        return;
    }

    const isTouches = e.touches ? true : false;
    return isTouches ? e.touches[0].pageX : e.clientX;
};

const getTranslateX = () => {
    return parseInt(getComputedStyle(list).transform.split(/[^\-0-9]+/g)[5]);
};

const setTranslateX = (x) => {
    list.style.transform = `translateX(${x}px)`;
};

const bindEvents = () => {
    list.addEventListener('mousedown', onScrollStart);
    list.addEventListener('touchstart', onScrollStart);
    list.addEventListener('click', onClick);
};
bindEvents();
