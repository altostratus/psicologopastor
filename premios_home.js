jQuery(function ($) {

    $(function () {
        
        // carousel nas empresas de produtos parceiros
        $('.lista-premios').slick({
            lazyLoad: 'ondemand',
            dots: false,
            infinite: true,
            speed: 900,
            slidesToShow: 3,
            slidesToScroll: 3,
            prevArrow: $('.move-premios-left'),
            nextArrow: $('.move-premios-right'),
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