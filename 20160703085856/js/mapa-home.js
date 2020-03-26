$(document).ready(function() { 
    
    // muda os alunos na home conforme o estado clicado
    $("body").on('change', 'select[id=alunos-destaque-uf]', function () { 
        $.get('/_ajax/alunos_home.php?uf=',{uf: $(this).val()},function(data){
            $('#area_alunos_home').html(data);
        });            
    });    
});
function abrirMapa(estado) {
    $.get('/_ajax/alunos_home.php?uf=',{uf: estado},function(data){
        $('#area_alunos_home').html(data);
    });
}