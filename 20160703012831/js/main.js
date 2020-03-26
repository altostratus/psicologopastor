jQuery(function ($) {

    $(function () {

        // CAROUSEL
        $('#carouselContainer.carousel').carousel({
            interval: 5000,
            pause: false
        });

        // bloco necessario para fazer o placeholder no IE

        if (navigator.userAgent.match(/msie/i)) {
            $('input[placeholder]').each(function () {
                $(this).val($(this).attr('placeholder'));
            });

            $("textarea[placeholder]").each(function () {
                $(this).val($(this).attr("placeholder"));
            });

            $("body").on('focus', 'input[type=text]', function () {
                if ($(this).val().toUpperCase() == $(this).attr('placeholder').toUpperCase()) {
                    $(this).val('');
                }
            });

            $("body").on('blur', 'input[type=text]', function () {
                if ($(this).val() == '') {
                    $(this).val($(this).attr('placeholder'));
                }
            });

            $("body").on('focus', 'textarea', function () {
                if ($(this).val().toUpperCase() == $(this).attr('placeholder').toUpperCase()) {
                    $(this).val('');
                }
            });

            $("body").on('blur', 'textarea', function () {
                if ($(this).val() == '') {
                    $(this).val($(this).attr('placeholder'));
                }
            });
        }
        $("body").on('click', '#top', function () {
            location.href = "/";
        });

        // fim do bloco necessario para fazer o placeholder no IE

        $("body").on('change', 'select[id=pais]', function () {

            $.ajax({
                type: 'POST',
                data: 'val=' + $(this).val(),
                url: '/loadEstado.php',
                success: function (response) {
                    $('#estado').html(response);
                },
                error: function (data, status, shr) {
                    alert('Ocorreu um problema e n\u00E3o foi poss\u00EDvel carregar os estados!\n\nTente novamente mais tarde!');
                    console.log('Status: ' + status + ' - ' + shr);
                }
            });

        });   
        // estou colocando a cor verda na tabela dos cursos, onde tem a grade curriruclar
        $('.container table tbody tr td[colspan=4] strong').each(function(){  
            if ($(this).text().substring(0, 6) === 'Volume') {
                $(this).addClass('volumesCursos'); 
            } else {
                $(this).addClass('modulosCursos'); 
            }
            
        });
        
        $("body").on('click', '.regaregarCaptcha', function () {
            
            var este = $(this).parent().parent();
            
            $.ajax({
                type: 'POST',
                url: '/recarregaCaptcha.php',
                success: function (response) {
                    este.html('');
                    setTimeout(function() {este.html(response);}, 100);
                    
                },
                error: function (data, status, shr) {
                    alert('Ocorreu um problema e n\u00E3o foi poss\u00EDvel recarregar os numeros!\n\nTente novamente mais tarde!');
                    console.log('Status: ' + status + ' - ' + shr);
                }
            });

        });
       
    });
    
    var tam = 14;
                
    $(".lnkAumentaFonte").click(function () {
        //alert('aumetna font');
        if (tam < 17)
            tam += 1;
        $(".FO").css('font-size', tam + 'px');
    });

    $(".lnkDiminuiFonte").click(function () {
        if (tam > 10)
            tam -= 1;
        $(".FO").css('font-size', tam + 'px');
    });

});

// Chama o método submit() do formulário cad_rapido
$('.form-submit').click(function() {
   $(this).parent().parent().submit();
});

function CapEnterInputIndex(i, e) {

    if (e.keyCode === 13) {

        switch ($(i).attr('id')) {

            case 'ddd-me-ligue':
                validaMeLiga();
                break;

            case 'telefone-me-ligue':
                validaMeLiga();
                break;

            case 'busca-no-site':
                validaBuscaNoSite();
                break;
        }

    }

}

function validaMeLiga() {

    if ($('#ddd-me-ligue').val() === '' || $('#ddd-me-ligue').val().toUpperCase() === 'DDD') {
        alert('Informe o DDD!');
        $('#ddd-me-ligue').focus();
        return false;
    }

    if ($('#telefone-me-ligue').val() === '' || $('#telefone-me-ligue').val().toUpperCase() === 'TELEFONE') {
        alert('Informe o Telefone!');
        $('#telefone-me-ligue').focus();
        return false;
    }

    $.ajax({
        type: "post",
        data: "ddd=" + $('#ddd-me-ligue').val() + "&telefone=" + $('#telefone-me-ligue').val(),
        url: "",
        success: function (retorno) {

            //alert("Obrigado por cadastrar seu telefone! Em breve nossa equipe entrará em contato com você!");
            alert("Esta função estará disponível em breve! Desculpe-nos pelo transtorno.");
            $('#ddd-me-ligue').val('DDD');
            $('#telefone-me-ligue').val('Telefone');

        },
        timeout: 10000,
        error: function (data, status, xhr) {

            if (status == "timeout") {
                console.log('O servidor parece não estar respondendo.<br /><br />Tente recarregar a página.<br />Se o problema persistir, entre em contato pelo 0800.');
            } else {
                console.log('Ocorreu um problema e não foi possível efetivar seu cadastro!<br /><br />Tente novamente mais tarde!');
            }
        }
    });

}

function validaBuscaNoSite() {

    if ($('#busca-no-site').val() === '' || $('#busca-no-site').val().toUpperCase() === 'BUSCAR NO SITE') {
        alert('Informe o que você deseja buscar!');
        $('#busca-no-site').focus();
        return false;
    }

    location.href = "/?sec=busca&c=" + $("#busca-no-site").val();

}

function chamaPagina(url) {
    location.href = url.value;
    exit();
}

function valida_comentario() {
    var f = document.noticia_comentario;
    if (
        (f.nome_comentario.value == '') || 
        (f.email_comentario.value == '') || 
        (f.ddd_comentario.value == '') || 
        (f.celular_comentario.value == '') || 
        (f.descricao_comentario.value == '') || 
        (f.captcha_response.value == '')
    ) 
    {
        alert('Preencha todos os campos para enviar!');
        return false;
    }
}

function criaMascaraInput(_RefObjeto, _Modelo) {

    var valorAtual = _RefObjeto.value;
    var valorNumerico = '';
    var nIndexModelo = 0;
    var nIndexString = 0;
    var valorFinal = '';
    var adicionarValor = true;


    // limpa a string valor atual para verificar 
    // se todos os caracteres são números
    for (i = 0; i < _Modelo.length; i++) {
        if (_Modelo.substr(i, 1) != '#') {
            valorAtual = valorAtual.replace(_Modelo.substr(i, 1), '');
        }
    }

    // verifica se todos os caracteres são números
    for (i = 0; i < valorAtual.length; i++) {
        if (!isNaN(parseFloat(valorAtual.substr(i, 1)))) {
            valorNumerico = valorNumerico + valorAtual.substr(i, 1);
        }
    }

    // aplica a máscara ao campo informado usando
    // o modelo de máscara informado no script
    for (i = 0; i < _Modelo.length; i++) {

        if (_Modelo.substr(i, 1) == '#') {
            if (valorNumerico.substr(nIndexModelo, 1) != '') {
                valorFinal = valorFinal + valorNumerico.substr(nIndexModelo, 1);
                nIndexModelo++;
                nIndexString++;
            } else {
                adicionarValor = false;
            }
        } else {
            if (adicionarValor && valorNumerico.substr(nIndexModelo, 1) != '') {
                valorFinal = valorFinal + _Modelo.substr(nIndexString, 1)
                nIndexString++;
            }
        }
    }

    //alert(valorFinal)
    _RefObjeto.value = valorFinal
}