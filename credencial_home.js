jQuery(function ($) {

    $(function () {
        
        // carousel nos pastores da home
        $('.lista-credenciais').slick({
            lazyLoad: 'ondemand',
            dots: false,
            infinite: true,
            speed: 900,
            slidesToShow: 3,
            slidesToScroll: 3,
            prevArrow: $('.move-credenciais-left'),
            nextArrow: $('.move-credenciais-right'),
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });      
        
    });
    
});