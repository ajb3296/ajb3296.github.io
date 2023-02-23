// 프로젝트 서서히 보이기
let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // do something
            entry.target.style.opacity = 1;
        }
    })
})

let text_elements = document.getElementsByClassName('info_box');
for (let i of text_elements) {
    observer.observe(i);
}

// const urlRegex = /url\(['|"].*['|"]\)/;
// 최상단 상자 스크롤에 따라 움직이기
document.addEventListener('scroll', function() {
    var currentScrollValue = document.body.scrollTop;
    document.getElementsByClassName('top')[0].style.top = (currentScrollValue * (-0.5)) + 'px';
    // 이미지 스크롤에 따라 어둡게
    // if ((currentScrollValue / 1000 + 0.4 <= 1) && (currentScrollValue / 1000 + 0.4 >= 0)) {
    //     document.getElementsByClassName('top_box')[0].style.backgroundImage = "linear-gradient( rgba(32, 32, 35, " + (currentScrollValue / 1000 + 0.4) + "), rgba(32, 32, 35, " + (currentScrollValue / 1000 + 0.4) + ") ), " + (window.getComputedStyle(document.getElementsByClassName('top_box')[0]).getPropertyValue('background-image').match(urlRegex));
    // }
})