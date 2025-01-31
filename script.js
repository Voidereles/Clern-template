$(document).ready(function () {
    var time = 5555; // time in seconds

    var $progressBar,
        $bar,
        $elem,
        isPause,
        tick,
        percentTime;
    function progressBar(elem) {
        $elem = elem;
        buildProgressBar();
        start();
    }


    function buildProgressBar() {
        $progressBar = $("<div>", {
            class: "progressBar"
        });
        $bar = $("<div>", {
            class: "bar"
        });
        $progressBar.append($bar).appendTo($(" .owl-three .owl-dots .active, .owl-one .owl-dots .active"));

    }

    function moved() {
        $(".progressBar").remove();
        buildProgressBar();
        clearTimeout(tick);
        start();
    }


    var owl = $(".owl-one");
    var owlTestimonials = $(".owl-three");

    function counter(event) {
        var items = event.item.count;
        var item = event.item.index + 2;

        if (item > items) {
            item = item - items
        }

        if (item == 4) {
            item = 1;
        }
        $('.main-counter').html('<span class="main-counter__number">' + item + '</span><span class="main-counter__slash">/ </span>' +
            '<span class="main-counter__total">' + items + '</span>')
    }

    owl.on('initialized.owl.carousel', function (event) {
        // $('.owl-one .owl-dots .active').insertAdjacentHTML('<div class="main-counter">dasdas</div>');
        counter(event);
    });

    owl.on('translate.owl.carousel', function (event) {
        counter(event);
    });

    owl.owlCarousel({
        autoplayHoverPause: true,
        onInitialized: progressBar,
        onTranslate: moved,
        loop: true,
        nav: false,
        dots: true,
        lazyLoad: true,
        items: 1, responsiveClass: true,
        responsive: {
            0: {
                dots: false,
            },
            600: {
                dots: true,
            }
        }

    });



    owlTestimonials.owlCarousel({
        autoplayHoverPause: true,
        onInitialized: moved,
        onTranslate: moved,
        loop: true,
        nav: true,
        dots: true,
        nav: true,
        lazyLoad: true,
        navText: [" <img src='images/svg/light-arrow-left.svg' class='fa fa-chevron-left'>", " <img src='images/svg/light-arrow-right.svg' class='fa fa-chevron-right'>"],
        items: 1
    });


    function interval() {
        if (isPause === false) {
            percentTime += 1 / time;
            //reset timer
            $(".bar").css({
                width: percentTime + "%"
            });
            //if percentTime is equal or greater than 100
            if (percentTime >= 100) {
                //slide to next item 
                console.log(true);
                $(".owl-one").trigger('next.owl.carousel');
                $(".owl-three").trigger('next.owl.carousel');
            }
        }
    }
    function start() {

        percentTime = 0;
        isPause = false;
        //run interval every 10 miliseconds
        tick = setInterval(interval, 10);
    };
    owl.on('mouseover', function () {
        isPause = true;
    });
    owl.on('mouseout', function () {
        isPause = false;
    });
    owlTestimonials.on('mouseover', function () {
        isPause = true;
    });
    owlTestimonials.on('mouseout', function () {
        isPause = false;
    });

});

$('.owl-two').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    nav: false,
    dots: false,
    responsiveClass: true,
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
            items: 4,
            nav: false,
            loop: true
        },
        1200: {
            items: 5,
            nav: false,
            loop: false,
        }
    }
})


$('.owl-four').owlCarousel({
    loop: true,
    margin: 10,
    // autoplay: true,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1,
            dots: false,
            nav: false
        },
        600: {
            items: 2,
            dots: false,
            nav: false
        },
        992: {
            items: 3,
            dots: false,
            nav: false
        }
    }
})


$('.owl-companies').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayHoverPause: true,
    dots: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false
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

$('.owl-services').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    autoplay: true,

    autoplayHoverPause: true,
    dots: true,
    items: 1
})

////////////////////////////////////////////'.header .container-fluid'
//menu nav
$('#navToggler').on('click', function () {
    $('.header .container-fluid').toggleClass('bg-white dark-shadow');

})










///////////////////////////////////////////////

let a = 0;
$(window).scroll(function () {

    let counter = $('#counter');
    let oTop = counter.offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $('.count').each(function () {
            let $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            },

                {
                    duration: 4000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                    }

                });
        });
        a = 1;
    }

});


////////////////////////////////////////////

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

let map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 50.319922, lng: 19.133506 },
        zoom: 16,
        disableDefaultUI: true,
        styles: [
            { elementType: 'geometry', stylers: [{ color: '#f2f2f2' }] },
            { elementType: 'labels.text.fill', stylers: [{ color: '#000000' }] },
            {
                featureType: "administrative.country",
                elementType: "labels",
                stylers: [
                    { color: '#000000' }
                ]
            }, {
                featureType: "administrative.province",
                elementType: "labels",
                stylers: [
                    { color: '#cccccc' }
                ]
            },
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#000000' }]
            },
            {
                featureType: "road",
                elementType: "labels.icon",
                stylers: [
                    { "visibility": "off" }
                ]
            },
            {
                featureType: "poi",
                stylers: [
                    { visibility: "off" }
                ]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{ color: '#ffffff' }]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#ffffff' }]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#555555' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{ color: '#ffffff' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#ffffff' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#ffffff' }]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{ color: '#cccccc' }]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#cccccc' }]
            },

            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{ color: '#1d9ef9' }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#70e5df' }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{ color: '#70e5df' }]
            }

        ]

    });
    var marker = new google.maps.Marker({
        position: { lat: 50.319922, lng: 19.133506 },
        map: map,
        icon: {
            url: "https://cdn.discordapp.com/attachments/520680294701858822/538074522637697034/icon7.png"
        }
    });
    marker.setMap(map);
}

///////////////////////
//collapsing

$("#accordion").on("shown.bs.collapse", e => {
    $("html, body").animate(
        {
            scrollTop: $(e.target)
                .prev()
                .offset().top
        },
        400
    );
});