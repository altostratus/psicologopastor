jQuery(function ($) {

    $(function () {
        
        $('#menu_titulo a').click(function(){
            // muda a marcação do item ativo do menu
            $(this).parent().find('a').removeClass('active'); $(this).addClass('active');
            var titulo = '',
            cat = '',
            link_cat = '',
            texto = '';            
            switch ($(this).html()) {
                case 'CONSELHO FEDERAL DE PASTOR': 
                    titulo = 'Conselho Federal de Pastor';
                    cat = '15'; 
                    link_cat = 'http://www.conselhofederaldepastor.com.br'; 
                    texto = 'O CFP é um órgão privado sem vinculo com autarquia publica ou regulamentação do Governo Federal que visa reunir de forma voluntária PASTORES e LIDERES EVANGÉLICOS no âmbito NACIONAL e INTERNACIONAL para usufruir os direitos, regalias e prerrogativas da função eclesiástica. Desde que esteja em comunhão com DEUS e a IGREJA.';
                    break;
                case 'ASSOCIAÇÃO INTERNACIONAL DE JUÍZES ECLESIÁSTICOS': 
                    titulo = 'Associação Internacional de Juízes Eclesiásticos'
                    cat = '162';
                    link_cat = 'http://www.juizeclesiastico.com.br';
                    texto = 'A AIJE é um órgão privado sem vinculo com autarquia publica ou regulamentação do Governo Federal que visa reunir de forma voluntária JUÍZES ECLESIÁSTICOS, PASTORES e LIDERES EVANGÉLICOS no âmbito NACIONAL e INTERNACIONAL para usufruir os direitos, regalias e prerrogativas da função eclesiástica. Desde que esteja em comunhão com DEUS e a IGREJA.';
                    break;
                case 'CONVENÇÃO GERAL DAS IGREJAS ASSEMBLÉIA DE DEUS': 
                    titulo = 'Convenção Geral das Igrejas Assembléia de Deus';
                    cat = '31';
                    link_cat = 'http://www.cgiadb.com.br';
                    texto = 'A CGIADB é uma das maiores convenções das Igrejas Assembleias de Deus no Brasil e Exterior, presente em mais de 100 países ao filiar-se você recebe Diploma e Credencial reconhecido em todo mundo.';
                    break;
                case 'CONVENÇÃO BATISTA INTERNACIONAL': 
                    titulo = 'Convenção Batista Internacional';
                    cat = '27'; 
                    link_cat = 'http://sejabatista.com.br';
                    texto = 'A CBI é uma das maiores convenções BATISTA, presente em mais de 100 países ao filiar-se você recebe Diploma e Credencial reconhecido em todo mundo. Valorize seu chamado.';
                    break;
                
                case 'CONSELHO FEDERAL DE PASTORA': 
                    titulo = 'Conselho Federal de Pastora';
                    cat = '154'; 
                    link_cat = 'conselhofederaldepastora.com.br';
                    texto = 'O CFPA é um órgão privado sem vinculo com autarquia publica ou regulamentação do Governo Federal que visa reunir de forma voluntária MULHERES PASTORAS e LIDERES EVANGÉLICAS no âmbito NACIONAL e INTERNACIONAL para usufruir os direitos, regalias e prerrogativas da função eclesiástica. Desde que esteja em comunhão com DEUS e a IGREJA.';
                    break;
                    
                case 'CONSELHO NACIONAL DE PASTOR': 
                    titulo = 'Conselho Nacional de Pastor';
                    cat = '156'; 
                    link_cat = 'conselhonacionaldepastor.com.br';
                    texto = 'O CNP é um órgão onde reúne Pastores e Ministros Evangélicos do Brasil e Exterior, com filiados em mais de 100 países ao filiar-se você recebe Diploma e Credencial reconhecido em todo mundo.';
                    break;
                case 'CONVENÇÃO DAS IGREJAS E COMUNIDADES AUTÔNOMAS E INDEPENDENTES': 
                    titulo = 'Convenção das Igrejas e Comunidades Autônomas e Independentes';
                    cat = '28'; 
                    link_cat = 'igrejaindependente.com.br';
                    texto = 'A CICAI é há maior convenção de Igrejas independentes no Brasil e Exterior, presente em mais de 100 países ao filiar-se você recebe Diploma e Credencial reconhecido em todo mundo.';
                    break;
                case 'CONVENÇÃO INTERNACIONAL DAS IGREJAS ASSEMBLEIA DE DEUS': 
                    titulo = 'Convenção Internacional das Igrejas Assembleia de Deus';
                    cat = '32'; 
                    link_cat = 'assembleiainternacional.com.br';
                    texto = 'A CGIADB é uma das maiores convenções das Igrejas Assembleias de Deus no Brasil e Exterior, presente em mais de 100 países ao filiar-se você recebe Diploma e Credencial reconhecido em todo mundo.';
                    break;
                case 'ASSOCIAÇÃO DOS PASTORES E MINISTROS EVANGÉLICOS DO BRASIL': 
                    titulo = 'Associação dos Pastores e Ministros Evangélicos do Brasil';
                    cat = '8'; 
                    link_cat = 'apameb.com.br';
                    texto = 'A APAMEB é há maior Associação de Pastores e Ministros Evangélicos do Brasil e Exterior, com filiados em mais de 100 países ao filiar-se você recebe Diploma e Credencial reconhecido em todo mundo.';
                    break;
                    
            }
            
            $.get('/_ajax/titulos_home.php?cat='+cat,function(data){
                //alert('/_ajax/titulos_home.php?cat='+cat);
                $('.titulo-home-resp').html(data); 
                $('.titulo-intro').html(texto);
                $('.titulo-home-resp').next().find('a').attr('href', link_cat);
                $('#conteudo_titulo .titulo').html(titulo);
            });
            
        });        
        
        // marca o primeiro item do menu como ativo ao carregar a página
        $('#menu_titulo a:first-child').addClass('active');
        
    });
    
    
});