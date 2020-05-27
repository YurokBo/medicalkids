$(function () {

});

let swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

function starRating(e) {
    const star = e.target.closest('.slide__star-list li ');
    if(!star) {
        return;
    }
    star.style.backgroundColor = '#90D7BD';
}

document.addEventListener('click', e => {
   starRating(e);
});

