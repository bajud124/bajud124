$(document).ready(function () {
    $('.owl-lorem').owlCarousel({
        nav: true,
        dots: false,
        margin: 10,
        navText: ['<img class="arrow-left" src="images/left-white-arrow.png" >', '<img class="arrow-right" src="images/arrow-toggle.png" />'],
        responsiveClass: false,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 2,
            }
        }
    });
});