jQuery(function ($) {

    $(function () {
        
        // carousel nas empresas de produtos parceiros
        $('.lista-estudam').slick({
            lazyLoad: 'ondemand',
            dots: false,
            infinite: true,
            speed: 900,
            slidesToShow: 5,
            slidesToScroll: 5,
            prevArrow: $('.move-estudam-left'),
            nextArrow: $('.move-estudam-right'),
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
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