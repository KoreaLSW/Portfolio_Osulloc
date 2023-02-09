'use strict';
const windowWidth = window.matchMedia('screen and (max-width: 768px)');

const bestMenuBox = document.querySelector('.bestMenu_item_box');
let bestMenuList = document.querySelectorAll('.bestMenu_item_list');

let bestMenu_slideWidth = bestMenuList[0].clientWidth;
window.addEventListener('resize', () => {
    bestMenu_slideWidth = bestMenuList[0].clientWidth;
});

const bestMenuLastIndex = bestMenuList.length;

const bestMenu_prevBtn = document.querySelector('.bestMenu_left_btn');
const bestMenu_nextBtn = document.querySelector('.bestMenu_right_btn');

let best_currSlide = 1;

let startPoint = 0;
let endPoint = 0;

if (!windowWidth.matches) {
    //기본적으로 슬라이드 루프 시작하기
    let bestMenu_loopInterval = setInterval(() => {
        nextMove();
    }, 2000);

    announcementClone();
    bestMenuList = document.querySelectorAll('.bestMenu_item_list');

    bestMenuList.forEach((value) => {
        value.style.transform = `translateX(calc(-${best_currSlide} * ${bestMenu_slideWidth}px))`;
    });

    bestMenu_prevBtn.addEventListener('click', () => {
        prevMove();
    });

    bestMenu_nextBtn.addEventListener('click', () => {
        nextMove();
    });

    const bestMenuImg = document.querySelectorAll('.bestMenu_item_img');
    const bestMenuImgHover = document.querySelectorAll(
        '.bestMenu_item_img_hover'
    );

    bestMenuList.forEach((value, index) => {
        value.addEventListener('mouseover', (e) => {
            bestMenuImg[index].style.opacity = '0';
            bestMenuImgHover[index].style.opacity = '1';
        });

        value.addEventListener('mouseout', (e) => {
            bestMenuImg[index].style.opacity = '1';
            bestMenuImgHover[index].style.opacity = '0';
        });
    });

    function nextMove() {
        best_currSlide++;
        if (best_currSlide <= bestMenuLastIndex) {
            bestMenuList.forEach((value) => {
                value.style.transition = 'all 0.3s ease-in';
                value.style.transform = `translateX(calc(-${best_currSlide} * ${bestMenu_slideWidth}px))`;
            });
        } else {
            best_currSlide = 0;

            bestMenuList.forEach((value) => {
                value.style.transition = 'all 0s';
                value.style.transform = `translateX(calc(-${best_currSlide} * ${bestMenu_slideWidth}px))`;
            });

            best_currSlide++;
            setTimeout(() => {
                bestMenuList.forEach((value) => {
                    value.style.transition = 'all 0.3s ease-in';
                    value.style.transform = `translateX(calc(-${best_currSlide} * ${bestMenu_slideWidth}px))`;
                });
            }, 0);
        }
    }

    function prevMove() {
        best_currSlide--;
        if (best_currSlide > 0) {
            bestMenuList.forEach((value) => {
                value.style.transition = 'all 0.3s ease-in';
                value.style.transform = `translateX(calc(-${best_currSlide} * ${bestMenu_slideWidth}px))`;
            });
        } else {
            best_currSlide = bestMenuLastIndex + 1;

            bestMenuList.forEach((value) => {
                value.style.transition = 'all 0s';
                value.style.transform = `translateX(calc(-${best_currSlide} * ${bestMenu_slideWidth}px))`;
            });

            best_currSlide--;
            setTimeout(() => {
                bestMenuList.forEach((value) => {
                    value.style.transition = 'all 0.3s ease-in';
                    value.style.transform = `translateX(calc(-${best_currSlide} * ${bestMenu_slideWidth}px))`;
                });
            }, 0);
        }
    }

    // PC 클릭 이벤트 (드래그)
    bestMenuBox.addEventListener('mousedown', (e) => {
        startPoint = e.pageX; // 마우스 드래그 시작 위치 저장
    });

    bestMenuBox.addEventListener('mouseup', (e) => {
        endPoint = e.pageX; // 마우스 드래그 끝 위치 저장
        if (startPoint < endPoint) {
            // 마우스가 오른쪽으로 드래그 된 경우
            prevMove();
        } else if (startPoint > endPoint) {
            // 마우스가 왼쪽으로 드래그 된 경우
            nextMove();
        }
    });

    // 슬라이드에 마우스가 올라간 경우 루프 멈추기
    bestMenuBox.addEventListener('mouseover', () => {
        clearInterval(bestMenu_loopInterval);
    });

    // 슬라이드에서 마우스가 나온 경우 루프 재시작하기
    bestMenuBox.addEventListener('mouseout', () => {
        bestMenu_loopInterval = setInterval(() => {
            nextMove();
        }, 2000);
    });
}

function announcementClone() {
    const best_startSlide1 = bestMenuList[0];
    const best_startSlide2 = bestMenuList[1];
    const best_startSlide3 = bestMenuList[2];
    const best_startSlide4 = bestMenuList[3];

    const best_endSlide = bestMenuList[bestMenuList.length - 1];

    const best_startElem1 = document.createElement('div');
    const best_startElem2 = document.createElement('div');
    const best_startElem3 = document.createElement('div');
    const best_startElem4 = document.createElement('div');
    const best_endElem = document.createElement('div');

    best_startSlide1.classList.forEach((c) => best_startElem1.classList.add(c));
    best_startElem1.innerHTML = best_startSlide1.innerHTML;

    best_startSlide2.classList.forEach((c) => best_startElem2.classList.add(c));
    best_startElem2.innerHTML = best_startSlide2.innerHTML;

    best_startSlide3.classList.forEach((c) => best_startElem3.classList.add(c));
    best_startElem3.innerHTML = best_startSlide3.innerHTML;

    best_startSlide4.classList.forEach((c) => best_startElem4.classList.add(c));
    best_startElem4.innerHTML = best_startSlide4.innerHTML;

    best_endSlide.classList.forEach((c) => best_endElem.classList.add(c));
    best_endElem.innerHTML = best_endSlide.innerHTML;

    bestMenuList[0].before(best_endElem);

    bestMenuList[bestMenuList.length - 1].after(best_startElem4);
    bestMenuList[bestMenuList.length - 1].after(best_startElem3);
    bestMenuList[bestMenuList.length - 1].after(best_startElem2);
    bestMenuList[bestMenuList.length - 1].after(best_startElem1);
}
