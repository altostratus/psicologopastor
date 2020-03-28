jQuery(function ($) {

    $(function () {
        
        // muda os cursos a serem mostrados quando seleciona uma categoria pelo menu desktop
        $('#menu_curso a').click(function(){
            // muda a marcação do item ativo do menu
            $(this).parent().find('a').removeClass('active'); $(this).addClass('active');
            var cat = '',
            link_cat = '',
            titulo = '',
            texto = '';
            switch ($(this).html()) {

                case 'CURSO A DISTÂNCIA': 
                    titulo = 'Nossos Cursos';
                    cat = ''; 
                    link_cat = 'http://www.conselhofederaldepastor.com.br'; 
                    texto = 'O Seminário Gospel oferece cursos livres de confissão religiosa cristã que são totalmente à distância, você estuda em casa, são livres de heresias e doutrinas antibiblicas, sem vinculo com o MEC, são monitorados por Igrejas, Pastores e Teólogos de Grandes Ministérios totalmente baseado na Santa Palavra de Deus, ao final você recebe DOCUMENTAÇÃO INTERNACIONAL valida no âmbito religioso. ';
                    break;
                
                case 'APERFEIÇOAMENTO': 
                    titulo = 'Aperfeiçoamento';
                    cat = 1; 
                    link_cat = '/cursos-a-distancia/aperfeicoamento/#titulo'; 
                    texto = 'O Seminário Gospel oferece cursos livres de confissão religiosa cristã que são totalmente à distância, você estuda em casa, são livres de heresias e doutrinas antibiblicas, sem vinculo com o MEC, são monitorados por Igrejas, Pastores e Teólogos de Grandes Ministérios totalmente baseado na Santa Palavra de Deus, ao final você recebe DOCUMENTAÇÃO INTERNACIONAL valida no âmbito religioso.';
                    break;
                    
                case 'BACHAREL ECLESIÁSTICO': 
                    titulo = 'Bacharel Eclesiástico';
                    cat = 2; 
                    link_cat = '/cursos-a-distancia/bacharel-eclesiastico/#titulo'; 
                    texto = 'Os Cursos de nível livre e confessional <b>BACHAREL ECLESIÁSTICO</b> do Seminário Gospel são cursos de confissão religiosa cristã, totalmente à distância, sem nenhum vinculo com o MEC ou autarquias do Governo Federal, são livres de heresias e doutrinas antibiblicas, não se trata de curso superior do Estado ou Bacharel  do Sistema de Ensino Civil, nossa formação é eclesiástica,  nossos cursos são rigorosamente monitorados por Igrejas, Pastores e Teólogos de Grandes Ministérios totalmente baseado na Santa Palavra de Deus, ao final você recebe DOCUMENTAÇÃO INTERNACIONAL valida no âmbito Eclesiástico.';
                    break;
                    
                case 'NACIONAL': 
                    titulo = 'Nacional';
                    cat = 6; 
                    link_cat = '/cursos-a-distancia/nacional/#titulo'; 
                    texto = 'Os Cursos de nível <b>NACIONAL</b> do Seminário Gospel são cursos de confissão religiosa cristã, totalmente à distância, sem vinculo com o MEC ou autarquias do Governo Federal, são livres de heresias e doutrinas antibiblicas, não são curso superior do Estado ou Graduação do Sistema de Ensino Civil, nossa formação é eclesiástica, nossos cursos são rigorosamente monitorados por Igrejas, Pastores e Teólogos de Grandes Ministérios totalmente baseado na Santa Palavra de Deus, ao final você recebe DOCUMENTAÇÃO INTERNACIONAL valida no âmbito Eclesiástico.';
                    break;
                    
                case 'INTERNACIONAL': 
                    titulo = 'Internacional';
                    cat = 7; 
                    link_cat = '/cursos-a-distancia/internacional/#titulo'; 
                    texto = 'Os Cursos de nível <b>INTERNACIONAL</b> do Seminário Gospel são cursos de confissão religiosa cristã, totalmente à distância, sem vinculo com o MEC ou autarquias do Governo Federal, são livres de heresias e doutrinas antibiblicas, não são curso superior do Estado ou Graduação do Sistema de Ensino Civil, nossa formação é eclesiástica, nossos cursos são rigorosamente monitorados por Igrejas, Pastores e Teólogos de Grandes Ministérios totalmente baseado na Santa Palavra de Deus, ao final você recebe DOCUMENTAÇÃO INTERNACIONAL valida no âmbito Eclesiástico.';
                    break;
                    
                case 'GRADUAÇÃO MINISTERIAL': 
                    titulo = 'Graduação Ministerial';
                    cat = 15; 
                    link_cat = '/cursos-a-distancia/graduacao-ministerial/#titulo'; 
                    texto = 'Os Cursos de nível livre e confessional <b>GRADUAÇÃO MINISTERIAL</b> do Seminário Gospel são cursos de confissão religiosa cristã, totalmente à distância, sem vinculo com o MEC ou autarquias do Governo Federal, são livres de heresias e doutrinas antibiblicas, não são curso superior do Estado ou Graduação do Sistema de Ensino Civil, nossa formação é eclesiástica, nossos cursos são rigorosamente monitorados por Igrejas, Pastores e Teólogos de Grandes Ministérios totalmente baseado na Santa Palavra de Deus, ao final você recebe DOCUMENTAÇÃO INTERNACIONAL valida no âmbito Eclesiástico.';
                    break;

                case 'PÓS INTERNACIONAL CRISTÃ': 
                    titulo = 'Pós Internacional Cristã';
                    cat = 11; 
                    link_cat = '/cursos-a-distancia/pos-internacional-crista/#titulo'; 
                    texto = 'Os Cursos de nível  livre e confessional <b>Pós Internacional Cristã</b> do Seminário Gospel são cursos de confissão religiosa cristã, totalmente à distância, sem vinculo com o MEC ou autarquias do Governo Federal, são livres de heresias e doutrinas antibiblicas, não é curso de Pós Graduação do Sistema de Ensino Civil, nossa formação é eclesiástica, nossos cursos são rigorosamente monitorados por Igrejas, Pastores e Teólogos de Grandes Ministérios totalmente baseado na Santa Palavra de Deus, ao final você recebe DOCUMENTAÇÃO INTERNACIONAL valida no âmbito Eclesiástico.';
                    break;
                    
                case 'PÓS-GRADUAÇÃO BÍBLICA': 
                    titulo = 'Pós Graduação Bíblica';
                    cat = 13; 
                    link_cat = '/cursos-a-distancia/pos-graduacao-biblica/#titulo'; 
                    texto = 'Os Cursos de nível <b>Pós-Graduação Bíblica</b> do Seminário Gospel são cursos de confissão religiosa cristã, totalmente à distância, sem vinculo com o MEC ou autarquias do Governo Federal, são livres de heresias e doutrinas antibiblicas, não é curso de Pós Graduação do Sistema de Ensino Civil, nossa formação é eclesiástica, nossos cursos são rigorosamente monitorados por Igrejas, Pastores e Teólogos de Grandes Ministérios totalmente baseado na Santa Palavra de Deus, ao final você recebe DOCUMENTAÇÃO INTERNACIONAL valida no âmbito Eclesiástico.';
                    break;
                
                case 'PÓS-GRADUAÇÃO MINISTERIAL': 
                    titulo = 'Pós Graduação Ministerial';
                    cat = 14; 
                    link_cat = '/cursos-a-distancia/posgraduacao-ministerial/#titulo'; 
                    texto = 'Os Cursos de nível <b>Pós-Graduação Ministerial</b> do Seminário Gospel são cursos de confissão religiosa cristã, totalmente à distância, sem vinculo com o MEC ou autarquias do Governo Federal, são livres de heresias e doutrinas antibiblicas, não é curso de Pós Graduação do Sistema de Ensino Civil, nossa formação é eclesiástica, nossos cursos são rigorosamente monitorados por Igrejas, Pastores e Teólogos de Grandes Ministérios totalmente baseado na Santa Palavra de Deus, ao final você recebe DOCUMENTAÇÃO INTERNACIONAL valida no âmbito Eclesiástico.';
                    break;
                    
                case 'MESTRE': 
                    titulo = 'Mestre';
                    cat = 9; 
                    link_cat = '/cursos-a-distancia/mestrado/#titulo'; 
                    texto = 'Os Cursos de nível livre e confessional <b>MESTRE</b> do Seminário Gospel são cursos de confissão religiosa cristã, totalmente à distância, sem vinculo com o MEC ou autarquias do Governo Federal, são livres de heresias e doutrinas antibiblicas, não é curso de MESTRADO do Sistema de Ensino Civil, nossa formação é eclesiástica, nossos cursos são rigorosamente monitorados por Igrejas, Pastores e Teólogos de Grandes Ministérios totalmente baseado na Santa Palavra de Deus, ao final você recebe DOCUMENTAÇÃO INTERNACIONAL valida no âmbito Eclesiástico.';
                    break;
                    
                case 'DOUTOR': 
                    titulo = 'Doutor';
                    cat = 4; 
                    link_cat = '/cursos-a-distancia/doutorado/#titulo'; 
                    texto = 'Os Cursos de nível livre e confessional <b>DOUTOR</b> do Seminário Gospel são cursos de confissão religiosa cristã, totalmente à distância, sem vinculo com o MEC ou autarquias do Governo Federal, são livres de heresias e doutrinas antibiblicas, não é curso de DOUTORADO do Sistema de Ensino Civil, nossa formação é eclesiástica, nossos cursos são rigorosamente monitorados por Igrejas, Pastores e Teólogos de Grandes Ministérios totalmente baseado na Santa Palavra de Deus, ao final você recebe DOCUMENTAÇÃO INTERNACIONAL valida no âmbito Eclesiástico.';
                    break;
                    
                case 'PhD': 
                    titulo = 'PhD';
                    cat = 10; 
                    link_cat = '/cursos-a-distancia/phd/#titulo'; 
                    texto = 'Os Cursos de nível livre e confessional <b>PhD</b> do Seminário Gospel são cursos de confissão religiosa cristã, totalmente à distância, sem vinculo com o MEC ou autarquias do Governo Federal, são livres de heresias e doutrinas antibiblicas, não é curso de POS DOUTORADO do Sistema de Ensino Civil, nossa formação é eclesiástica, nossos cursos são rigorosamente monitorados por Igrejas, Pastores e Teólogos de Grandes Ministérios totalmente baseado na Santa Palavra de Deus, ao final você recebe DOCUMENTAÇÃO INTERNACIONAL valida no âmbito Eclesiástico.';
                    break;
            }
            
            $.get('/_ajax/cursos_home.php?cat='+cat,function(data){
                //alert(data);
                $('.cursos-home-resposta').html(data);          
                $('.cursos-home-resposta').next().find('a').attr('href', link_cat);
                $('.titulo-intro').html(texto);
                $('#conteudo_curso .titulo').html(titulo);
            });
            
        });
        
        // muda os cursos a serem mostrados quando seleciona uma categoria pelo menu mobile
        $('#conteudo_curso > select[name=cursos-home]').change(function(){
                        
            var cat = '',
            link_cat = '';
            switch ($(this).val()) {
                case 'APERFEIÇOAMENTO': cat = 1; link_cat = '/cursos-a-distancia/aperfeicoamento/#titulo'; break;
                case 'DOUTOR': cat = 4; link_cat = '/cursos-a-distancia/doutorado/#titulo'; break;
                case 'GRADUAÇÃO BÍBLICA': cat = 6; link_cat = '/cursos-a-distancia/graduacao-biblica/#titulo'; break;
                case 'GRADUAÇÃO TEOLÓGICA': cat = 7; link_cat = '/cursos-a-distancia/graduacao-teologica/#titulo'; break;
                case 'MESTRE': cat = 9; link_cat = '/cursos-a-distancia/mestrado/#titulo'; break;
                case 'PhD': cat = 10; link_cat = '/cursos-a-distancia/phd/#titulo'; break;
            }
            
            $.get('/_ajax/cursos_home.php?cat='+cat,function(data){
                $('.cursos-home-resposta').html(data);          
                $('.cursos-home-resposta').next().find('a').attr('href', link_cat);
            });
            
        });
        
        // marca o primeiro item do menu como ativo ao carregar a página
        $('#menu_curso a:first-child').addClass('active');
        
    });
    
    
});