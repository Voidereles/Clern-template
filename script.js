$('.owl-one').owlCarousel({
    loop: true,
    margin: 10,
    // autoplay: true,
    lazyLoad: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
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


$('.owl-companies').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
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
    dots: true,
    items: 1
})

////////////////////////////////////////////

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

$('.card-header').on('click', function () {
    $('.card-header .btn-success').toggleClass('arrow-down');
    $('.card-header .btn-success').toggleClass('arrow-up');
    $('.card-header').toggleClass('card-header--collapsed');
    $('.company-services__heading').toggleClass('company-services__heading--collapsed');

})




//////////////////////
//progressBar
