$('.owl-one').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    lazyLoad: true,
    animateOut: 'fadeOut',
    items: 1
})

$('.owl-two').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    responsiveClass: true,
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
    autoplay: true,
    nav: false,
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

// $(window).scroll(function () {
//     if ($(this).scrollTop() > 100) {
//         $('#header').addClass('header-scrolled');
//     } else {
//         $('#header').removeClass('header-scrolled');
//     }
// });


$('input').focus(function () {
    $(this).parents('.form-group').addClass('focused');
});

$('input').blur(function () {
    var inputValue = $(this).val();
    if (inputValue == "") {
        $(this).removeClass('filled');
        $(this).parents('.form-group').removeClass('focused');
    } else {
        $(this).addClass('filled');
    }
})  