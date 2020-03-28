$('.filiacoes').click(function() {
    
    $("body").find(".img-tipo").attr('src', $(this).attr('src'));
    $("body").find(".titulo-tipo").html($(this).attr('rel-texto-link'));

    var parag = '';
    switch ($(this).attr('rel-texto-link')) {
        case 'Membro Conselheiro': 
            parag = '<p>A filiação de '+$(this).attr('rel-texto-link')+' é indicada para todas as pessoas com idoneidade cristã.<p>';
            break;
        case 'Delegado Eclesiastico':
            parag = '<p>A filiação de '+$(this).attr('rel-texto-link')+' do órgão <b>'+$(this).attr('rel-texto')+'</b> e voltada para Reverendos, Pastores, Bispos, Apóstolos que sejam casados e pai de família.</p>';
            break;
        case 'Presidente Regional': 
            parag = '<p>A filiação de '+$(this).attr('rel-texto-link')+' do órgão <b>'+$(this).attr('rel-texto')+'</b> e voltada para lideres como Reverendos, Pastores, Bispos, Apóstolos que sejam casados e pai de família.<p>';
            break;
        case 'Presidente Estadual': 
            parag = '<p>A filiação de '+$(this).attr('rel-texto-link')+' do órgão <b>'+$(this).attr('rel-texto')+'</b> e voltada para grandes lideres como Reverendos, Pastores, Bispos, Apóstolos que sejam casados e pai de família e que tenham mais de uma igreja sobre seu governo.<p>';
            break;
        case 'Juiz Eclesiastico':
            parag = '<p>A filiação de '+$(this).attr('rel-texto-link')+' do órgão <b>'+$(this).attr('rel-texto')+'</b> e voltada para lideres eclesiásticos casados e ajudar na liderança de grandes decisões do ministério.</p>';
            break;
        case 'Embaixador Eclesiastico': 
            parag = '<p>A filiação de '+$(this).attr('rel-texto-link')+' do órgão <b>'+$(this).attr('rel-texto')+'</b> e voltada para lideres eclesiásticos casados disposto a atuar em diversos países.</p>';
            break;
            
    }
    

    var texto = '\
        <p>Somos um órgão privado sem fins lucrativos de caráter eclesiástico, sem vinculo com o Governo Federal, Autarquia oficial ou órgãos públicos e suas ideologias antibíblicas e imorais, <b>'+$(this).attr('rel-texto')+'</b> visa puramente à defesa da Santa Teologia Cristã, não obriga nenhuma pessoa ser inscrita para exercer a atividade de PASTOR, pois acreditamos que somente a igreja e seminários cabem este papel. Este órgão não é um órgão fiscalizador de profissão, NÃO é conselho de categoria a atividade de PASTOR é uma função eclesiástica, sem vinculo com autarquia federal. '+$(this).attr('rel-texto-link')+', não é Autoridade Policial, Federal, Judiciária, Militar ou Autarquia vinculada ao Governo Federal, sua função e restritamente no campo religioso.</p>\n\
        <p>O '+$(this).attr('rel-texto-link')+' deverá procurar manter vínculo estreito entre a Igreja e os membros, agindo como um elo entre estes setores.</p>\n\
        <p>Participar e auxiliar na organização de eventos promovidos pela IGREJA representar a direção do <b>'+$(this).attr('rel-texto')+'</b>, a outras instituições e eventos onde se fizer necessário;</p>\n\
        <p>Defender os direitos eclesiásticos e organizar eventos eclesiásticos em seu local de atuação;</p>\n\
        <p>Estimular e organizar a filiação de novos líderes.</p>\n\
        <p>Buscar juntamente com a Diretoria do <b>'+$(this).attr('rel-texto')+'</b> soluções para questões individuais e coletivas identificadas em seu local de atuação;</p>\n\
        <p>Para ser candidato a '+$(this).attr('rel-texto-link')+' é necessário estar disposto a assumir as lutas da Igreja e ter vontade firme de auxiliar a mobilização dos evangélicos; e, estar em pleno gozo de suas prerrogativas como associado.</p>\n\
        <p>É fundamental compreendermos a importância do '+$(this).attr('rel-texto-link')+' como um &QUOT;braço&QUOT; da Igreja, fortalecendo, através da sua atuação, a entidade que representa, ampliando suas possibilidades de conquistas.</p>\n\
    ';
    
    $("body").find(".text-tipo").html(parag + texto);
    
});