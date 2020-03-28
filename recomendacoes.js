$('.recomendacao').click(function() {
    
    var nome = $(this).attr('abbr');
        $("body").find(".img-recomendado").attr('src', $(this).attr('src'));
        $("body").find(".text-recomendado").html($(this).attr('rel-texto'));
        $("body").find(".link-recomendado").html($(this).attr('rel-texto-link'));
        $("body").find(".link-recomendado").attr('href', $(this).attr('rel-link'));    
});