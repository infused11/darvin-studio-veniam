$(document).ready(function(){
    $('.catalog-slider').slick({
        arrows:true,
        dots:true,
        adaptiveHeight:true,
        infinite:false,
        waitForAnimate:false,
        responsive:[
            {
                breakpoint: 9992,
                settings: 'unslick'
            },
            {
                breakpoint: 576,
                settings: {
                    arrows:false,
                    dots:true,
                    slidesToShow:1,
                    slidesToScroll:1
                }
            }
        ]
    });
});