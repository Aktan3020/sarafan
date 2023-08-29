new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
let isClose = false

document.querySelector('.menu-icon').onclick = () => {

    document.querySelector('.menu-icon').innerHTML = isClose ? '<img src="./assets/icon/меню.svg">' : '<img src="./assets/icon/Union.svg">'
    document.querySelector('.modal').classList.toggle('hide')
    if (document.querySelector('.modal').classList[1] == 'hide') {
        isClose = false
    } else {
        isClose = true
    }
}