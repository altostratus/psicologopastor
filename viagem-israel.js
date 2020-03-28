jQuery(function ($) {

    $(function () {
        $('body').on('click', '#curso_teologia_israel', function() {
            
            if ($(this).prop('checked')) {
                
                $("input[id=origem_israel]").val($("#help_link_israel").val()+'-com-curso-de-teologia');

            } else {
                
                $("input[id=origem_israel]").val($("#help_link_israel").val());

            }

        }); 
        
        
        $('body').on('click', '#curso_teologiaComents', function() {
            
            if ($(this).prop('checked')) {
                
                $("input[id=origem]").val($("#help_linkComments").val()+'-com-curso-de-teologia');

            } else {
                
                $("input[id=origem]").val($("#help_linkComments").val());

            }

        }); 
    });
    
});