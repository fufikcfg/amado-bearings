let offset = 0;
const sliderLine = document.querySelector('.slider-line');
const screenWidth = window.screen.width;
const screenWidthLeng = screenWidth * 4;

document.querySelector('.banner__next__btn').addEventListener('click', function(){
    offset = offset + screenWidth;
    if (offset > screenWidthLeng) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.banner__btn').addEventListener('click', function(){
    offset = offset - screenWidth;
    if (offset < 0) {
        offset = screenWidthLeng;
    }
    sliderLine.style.left = -offset + 'px';
});
