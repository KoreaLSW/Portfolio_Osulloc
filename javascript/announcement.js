'use strict';
const announcementBox = document.querySelector('.announcement_box');
let announcementList = document.querySelectorAll('.announcement_list');

let announcementBoxHeight = announcementList[0].clientHeight;

window.addEventListener('resize', () => {
    announcementBoxHeight = announcementList[0].clientHeight;
});

let announcementLastIndex = announcementList.length;

let selected = 1;

let announcementLoopInterval = setInterval(() => {
    announcementMove();
}, 2000);

announcementClone();
announcementList = document.querySelectorAll('.announcement_list');

announcementList.forEach((value) => {
    value.style.transform = `translateY(calc(-${selected} * ${announcementBoxHeight}px))`;
});

function announcementMove() {
    selected++;

    if (selected <= announcementLastIndex) {
        announcementList.forEach((value, index) => {
            value.style.transform = `translateY(calc(-${selected} * ${announcementBoxHeight}px))`;
        });
    } else {
        selected = 0;

        announcementList.forEach((value, index) => {
            value.style.transition = 'all 0s';
            value.style.transform = `translateY(calc(-${selected} * ${announcementBoxHeight}px))`;
        });
        selected++;
        setTimeout(() => {
            announcementList.forEach((value, index) => {
                value.style.transition = 'all 0.2s';
                value.style.transform = `translateY(calc(-${selected} * ${announcementBoxHeight}px))`;
            });
        }, 0);
    }
}

function announcementClone() {
    // 무한 슬라이드를 위해 start, end 슬라이드 복사하기
    const startSlide = announcementList[0];
    const endSlide = announcementList[announcementList.length - 1];
    const startElem = document.createElement('div');
    const endElem = document.createElement('div');

    startSlide.classList.forEach((c) => startElem.classList.add(c));
    startElem.innerHTML = startSlide.innerHTML;

    endSlide.classList.forEach((c) => endElem.classList.add(c));
    endElem.innerHTML = endSlide.innerHTML;

    // 각 복제한 엘리먼트 추가하기
    announcementList[0].before(endElem);
    announcementList[announcementList.length - 1].after(startElem);
}
