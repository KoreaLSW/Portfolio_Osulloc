const timer = document.querySelector('.event_top_text_time');

let time = 1800; //기준시간 작성
let hour = '00';
let min = ''; //분
let sec = ''; //초

//setInterval(함수, 시간) : 주기적인 실행
let x = setInterval(function () {
    //parseInt() : 정수를 반환
    min = parseInt(time / 60); //몫을 계산
    sec = time % 60; //나머지를 계산

    if (min < 10) {
        if (sec < 10) {
            timer.innerHTML = hour + ':0' + min + ':0' + sec + '';
        } else {
            timer.innerHTML = hour + ':0' + min + ':' + sec + '';
        }
    } else if (sec < 10) {
        timer.innerHTML = hour + ':' + min + ':0' + sec + '';
    } else if (min < 10 && sec < 10) {
        timer.innerHTML = hour + ':0' + min + ':0' + sec + '';
    } else {
        timer.innerHTML = hour + ':' + min + ':' + sec + '';
    }

    time--;

    //타임아웃 시
    if (time < 0) {
        clearInterval(x); //setInterval() 실행을 끝냄
        timer.innerHTML = '00:00:00';
    }
}, 1000);
