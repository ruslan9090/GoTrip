// Carousel
const owl = $('.owl-carousel'); // из owlcarousel2.github.io  (events)
owl.owlCarousel({
    center: true,
    loop: true, //прокрутка
    margin: 20,
    startPosition: 0, 
    items: 1,  // слайды
    responsive: {
        540: {
            items: 3,
            startPosition: 1, //стартует с 1-го(по индекс)
        },
        1200: {
            items: 3,
            margin: 30, //отступ между ними
        },
    },
});

/* левая кн */
$('.slider__btn--prev').click(function () {
    owl.trigger('prev.owl.carousel');
});

/* правая кн */
$('.slider__btn--next').click(function () {
    owl.trigger('next.owl.carousel');
});


// Menu-burger
const navBtn = document.querySelector('.nav__toggle');
const nav = document.querySelector('.nav');
const menuIcon = document.querySelector('.menu-icon');

navBtn.onclick = function () {
    nav.classList.toggle('nav--mobile');
    menuIcon.classList.toggle('menu-icon--active');
    document.body.classList.toggle('no-scroll'); //убираем скролл
}