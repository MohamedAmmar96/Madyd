$(window).on('load', function() {

    $(".loading-overlay img").fadeOut(1000,
        function() {
            $(this).parent().fadeOut(1000);
            $("body").removeClass("overflow")
        });
})

var wow = new WOW({
    boxClass: 'wow', // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
    callback: function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null, // optional scroll container selector, otherwise use window,
    resetAnimation: true, // reset animation on end (default is true)
});
wow.init();

$(document).ready(function() {

    $('.main-slider .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        margin: 10,
        rtl: true,
        navText: ["<i class='fas fa-chevron-right fa-lg'></i>", "<i class='fas fa-chevron-left fa-lg'></i>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true,
                loop: true
            },
            768: {
                items: 1,
                nav: false,
                dots: true,
                loop: true
            },
            992: {
                items: 1,
                nav: true,
                dots: false,
                loop: true
            },
            1200: {
                items: 1,
                nav: true,
                dots: false,
                loop: true
            }
        }
    })

    $('.products .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        margin: 30,
        rtl: true,
        navText: ["<i class='fas fa-chevron-right fa-lg'></i>", "<i class='fas fa-chevron-left fa-lg'></i>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                dots: true,
                nav: false,
                center: true,
                margin: 10,
                loop: true
            },
            500: {
                items: 2,
                dots: true,
                nav: false,
                loop: true
            },
            768: {
                items: 3,
                dots: true,
                nav: true,
                loop: true
            },
            992: {
                items: 4,
                nav: true,
                dots: false,
                loop: true
            },
            1200: {
                items: 4,
                nav: true,
                dots: false,
                loop: true
            }
        }
    });


    //this is to make the features part as owl-carousel slider  
    if ($(window).width() <= 991) {
        $(".features-box").addClass("owl-carousel owl-theme");
        $(".features-box .feature").removeClass("owl-carousel");
        $('.owl-carousel').owlCarousel({
            loop: false,
            margin: 10,
            rtl: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                    loop: false
                },
                500: {
                    items: 2,
                    nav: false,
                    loop: false
                }
            }
        })
    } else {
        $(".features-box").removeClass("owl-carousel");
        $(".features-box .feature").removeClass("owl-carousel");
    };


    // This is to Open Language menu in large Screens
    $(".page-language .lang .lang-name").click(function() {
        $(".trans-back").fadeIn(600);
    });

    $(".page-language .lang .lang-name").click(function() {
        $(".lang .lang-list").slideDown(600);
    });

    $(".trans-back").click(function() {
        $(".trans-back").fadeOut(600);
    });

    $(".trans-back").click(function() {
        $(".lang .lang-list").slideUp(600);
    });


    // This is to Open Configuration menu in 
    $(".user-terms .configuration a").click(function() {
        $(".all-overlay").fadeIn(600);
    });

    $(".user-terms .configuration a").click(function() {
        $(".user-terms .config-list").slideDown(600);
    });

    $(".all-overlay").click(function() {
        $(".all-overlay").fadeOut(600);
    });

    $(".all-overlay").click(function() {
        $(".user-terms .config-list").slideUp(600);
    });


    //This is to Open Footer Lists in small screens 

    $(".one h3").click(function() {
        $(".one .info-list").slideToggle(600);
    });
    $(".two h3").click(function() {
        $(".two .info-list").slideToggle(600);
    });
    $(".three h3").click(function() {
        $(".three .info-list").slideToggle(600);
    });

    //This is to Open Search Box in small screens
    $(".user-terms .hidden-search").click(function() {
        $(".back-overlay").fadeIn(600);
    });

    $(".user-terms .hidden-search").click(function() {
        $(".hidden-search a span").removeClass("open-search")
        $(".hidden-search a span").addClass("close-search")
        $(".search-small").slideDown(600);
    });

    $(".back-overlay").click(function() {
        $(".back-overlay").fadeOut(600);
    });

    $(".back-overlay").click(function() {
        $(".hidden-search a span").addClass("open-search")
        $(".hidden-search a span").removeClass("close-search")
        $(".search-small").slideUp(600);
    });


    //This is to Open Side Menu in Small Screens
    $(".menu-button,.hidden-menu a").click(function() {
        $("body").addClass("overflow")
        $(".side-menu").addClass("overflow");
        $(".back-overlay").fadeIn(600);
    });

    $(".menu-button,.hidden-menu a").click(function() {
        $(".side-menu").addClass("overflow");
        $(".side-menu").addClass("right-open");
        $(".back-overlay").fadeIn(600);
    });

    $(".close,.back-overlay").click(function() {
        $("body").removeClass("overflow")
        $(".side-menu").removeClass("overflow");
        $(".back-overlay").fadeOut(600);
    });

    $(".close,.back-overlay").click(function() {
        $(".side-menu").removeClass("overflow");
        $(".side-menu").removeClass("right-open");
        $(".back-overlay").fadeOut(600);
    });

    //This is to Open language and accounts in side menu
    $(".account p").click(function() {
        $(".account ul").slideToggle(600);
    });

    $(".language p").click(function() {
        $(".language ul").slideToggle(600);
    });
});