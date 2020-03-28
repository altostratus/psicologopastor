jQuery(function ($) {

    $(function () {
        
        // carousel nas empresas de produtos parceiros
        $('.lista-parceiros').slick({
            lazyLoad: 'ondemand',
            dots: false,
            infinite: true,
            speed: 900,
            slidesToShow: 5,
            slidesToScroll: 5,
            prevArrow: $('.move-parceiros-left'),
            nextArrow: $('.move-parceiros-right'),
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