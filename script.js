$('.owl-one').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    items: 1
})

$('.owl-two').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    responsiveClass: true,
    nav: true,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 3,
            nav: false
        },
        992: {
            items: 5,
            nav: true,
            loop: false
        }
    }
})

$('.owl-three').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    autoplay: true,
    items: 1
})

$('.owl-four').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    // autoplay: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 2,
            nav: false
        },
        992: {
            items: 3,
            nav: false
        }
    }
})

$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('#header').addClass('header-scrolled');
    } else {
        $('#header').removeClass('header-scrolled');
    }
});