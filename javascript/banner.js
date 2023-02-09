'use strict';
const bannerBox = document.querySelector('.main_banner_box');
const bannerBoxList = document.querySelectorAll('.main_banner_box_list');
const bannerBoxListCount = bannerBoxList.length;
const bannerLeftBtn = document.querySelector('.left_btn');
const bannerRightBtn = document.querySelector('.right_btn');

const bannerScroll = document.querySelector('.main_banner_scroll');
const bannerScrollBars = document.querySelectorAll('.main_banner_scroll_bar');
const bannerScrollStartBtn = document.querySelector('.main_banner_btn');
const bannerScrollGage = document.querySelector('.main_banner_scroll_gage');

let bannerScrollGageWidth = bannerScrollGage.clientWidth;
window.addEventListener('resize', () => {
    bannerScrollGageWidth = bannerScrollGage.clientWidth;
});

const bannerStop = document.querySelector('.fa-pause');
const bannerPlay = document.querySelector('.fa-play');

const lastIndex = bannerBoxList.length - 1;
let currSlide = 0;
let bannerType = true;

let loopInterval = setInterval(() => {
    nextBanner(); // 다음 슬라이드를 보여주는 함수
}, 3000);

bannerLeftBtn.addEventListener('click', () => {
    prevBanner();
});
bannerRightBtn.addEventListener('click', () => {
    nextBanner();
});

bannerScrollStartBtn.addEventListener('click', () => {
    bannerType = !bannerType;
    bannerStartAndStop(bannerType);
});

bannerScrollBars.forEach((value) => {
    value.addEventListener('click', (e) => {
        currSlide = parseInt(e.target.dataset.value);
        bannerBoxList.forEach((value, index) => {
            if (index !== currSlide) {
                value.style.opacity = '0';
                value.style.position = 'absolute';
                bannerScrollBars[index].style.backgroundColor = '#999999';
            } else {
                value.style.opacity = '1';
                value.style.position = 'static';
                bannerScrollGage.style.transform = `translateX(calc(${currSlide} * ${bannerScrollGageWidth}px))`;
            }
        });
    });
});

function nextBanner() {
    currSlide++;
    if (currSlide <= lastIndex) {
        bannerBoxList.forEach((value, index) => {
            if (index !== currSlide) {
                value.style.opacity = '0';
                value.style.position = 'absolute';
                bannerScrollBars[index].style.backgroundColor = 'gray';
            } else {
                value.style.opacity = '1';
                value.style.position = 'static';
                bannerScrollGage.style.transform = `translateX(calc(${currSlide} * ${bannerScrollGageWidth}px))`;
            }
        });
    } else {
        currSlide = 0;
        bannerBoxList.forEach((value, index) => {
            if (index !== currSlide) {
                value.style.opacity = '0';
                value.style.position = 'absolute';
                bannerScrollBars[index].style.backgroundColor = '#999999';
            } else {
                value.style.opacity = '1';
                value.style.position = 'static';
                bannerScrollBars[index].style.backgroundColor = 'black';
                bannerScrollGage.style.transform = `translateX(calc(${currSlide} * ${bannerScrollGageWidth}px))`;
            }
        });
    }
}

function prevBanner() {
    currSlide--;
    if (currSlide >= 0) {
        bannerBoxList.forEach((value, index) => {
            if (index !== currSlide) {
                value.style.opacity = '0';
                value.style.position = 'absolute';
                bannerScrollBars[index].style.backgroundColor = '#999999';
            } else {
                value.style.opacity = '1';
                value.style.position = 'static';
                bannerScrollGage.style.transform = `translateX(calc(${currSlide} * ${bannerScrollGageWidth}px))`;
            }
        });
    } else {
        currSlide = lastIndex;
        bannerBoxList.forEach((value, index) => {
            if (index !== currSlide) {
                value.style.opacity = '0';
                value.style.position = 'absolute';
                bannerScrollBars[index].style.backgroundColor = '#999999';
            } else {
                value.style.opacity = '1';
                value.style.position = 'static';
                bannerScrollGage.style.transform = `translateX(calc(${currSlide} * ${bannerScrollGageWidth}px))`;
            }
        });
    }
}

function bannerStartAndStop(type) {
    if (type) {
        bannerPlay.style.display = 'none';
        bannerStop.style.display = 'block';
        loopInterval = setInterval(() => {
            nextBanner(); // 다음 슬라이드를 보여주는 함수
        }, 3000);
    } else {
        bannerPlay.style.display = 'block';
        bannerStop.style.display = 'none';
        clearInterval(loopInterval);
    }
}
