jQuery(function ($) {

    $(function () {
        
        $('#menu_titulo_int a').click(function(){
            // muda a marcação do item ativo do menu
            $(this).parent().find('a').removeClass('active'); $(this).addClass('active');
            var cat = '',
            link_cat = '',
            texto = '',
            topo = '';            
            switch ($(this).html()) {
                case 'TÍTULOS INTERNACIONAIS': 
                    cat = 'I'; 
                    link_cat = '/titulo-internacional'; 
                    topo = 'Títutlos Internacionais';
                    texto = 'Títulos Internacionais são órgãos onde membros do corpo de Cristo podem filiar-se e usufruir os benefícios no BRASIL E EM MAIS DE 100 PAÍSES! Ao filiar-se receberá DIPLOMA E CREDENCIAL, não necessita de curso, basta enviar seu currículo ministerial para aprovação.';
                    break;
                case 'TÍTULOS HONORÍFICOS': 
                    cat = 'H';
                    link_cat = '/titulo-honorifico';
                    topo = 'Títulos Honoríficos';
                    texto = 'Títulos Honoríficos são destinados a homens e mulheres de DEUS que prestaram um brilhante serviço no corpo de Cristo! Ao ser aprovado o titulo honorifico você receberá DIPLOMA E CREDENCIAL, não necessita de curso, basta enviar seu currículo ministerial para aprovação.';
                    break;
                case 'TÍTULOS EMÉRITOS': 
                    cat = 'E';
                    link_cat = '/titulo-emerito';
                    topo = 'Títulos Eméritos';
                    texto = 'Títulos Eméritos é para quem possui mérito, envie seu currículo ministerial para que possamos analisar! Ao ser aprovado você receberá DIPLOMA E CREDENCIAL, não necessita de curso.';
                    break;
                case 'TÍTULOS HONORIS CAUSA': 
                    cat = 'C'; 
                    link_cat = '/titulo-honoris-causa';
                    topo = 'Títulos Honoris Causa';
                    texto = 'Títulos Honoris causa é destinado a quem merece honra sendo o titulo mais desejado pelos maiores lideres da atualidade para verificar se você faz jus ao titulo envie seu currículo ministerial para aprovação, não necessita de curso.';
                    break;
            }
            
            $.get('/_ajax/titulos_int_home.php?cat='+cat,function(data){
                //alert('/_ajax/titulos_home.php?cat='+cat);
                $('.titulo-home-resposta').html(data); 
                $('.topo-titulo-int').html(topo);
                $('.titulo-int-intro').html(texto);
                $('.titulo-home-resposta').next().find('a').attr('href', link_cat);
            });
        });     
        
        // marca o primeiro item do menu como ativo ao carregar a página
        $('#menu_titulo_int a:first-child').addClass('active');
        
    });
    
    
});