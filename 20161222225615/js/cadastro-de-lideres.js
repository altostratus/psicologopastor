var conta_ref = 2;

jQuery(function ($) {

    $(function () {
        
        $('.addmaisref').click(function(){ 
            var reff = $(this).html().substr(16);
            var ref = ' da referência';
            if (reff === 'pessoa') {
                ref = '';
            }
        
            var inputs_ref = '<div class="form-group">'
                + '<div class="col-xs-4 col-sm-4 col-md-2 font-size1-5" style="padding-top: 7px">'+ conta_ref +'</div>'
                + '<div class="col-xs-20 col-sm-20 col-md-22">'
                + '<input type="text" class="form-control input-lg" name="nome_ref[]" placeholder="Nome'+ref+':" />'
                + '</div>'
                + '</div>'
                + '<div class="form-group">'
                + '<div class="col-xs-8 col-sm-8 col-md-4">'
                + '<input name="ddd_ref[]" type="text" class="form-control input-lg" placeholder="DDD" maxlength="3" onkeypress=\'return SomenteNumero(event)\' />'
                + '</div>'
                + '<div class="col-xs-16 col-sm-16 col-md-20">'
                + '<input type="text" class=" form-control input-lg" name="celular_ref[]" placeholder="Celular:" maxlength="9" onkeypress=\'return SomenteNumero(event)\' />'
                + '</div>'
                + '</div>'
                + '<div class="form-group">'
                + '<div class="col-md-12">'
                + '<select name="cargo_ref[]" class="form-control input-lg">'
                + '<option value="">Cargo na Igreja:</option>'
                + '<option value="107">Ancião</option>'
                + '<option value="53">Apóstolo</option>'
                + '<option value="48">Bispo</option>'
                + '<option value="105">Capelão</option>'
                + '<option value="45">Conferencista</option>'
                + '<option value="44">Cooperador</option>'
                + '<option value="42">Diácono</option>'
                + '<option value="94">Dirigente</option>'
                + '<option value="43">Evangelista</option>'
                + '<option value="96">Juiz de paz</option>'
                + '<option value="58">Levita</option>'
                + '<option value="41">Membro</option>'
                + '<option value="39">Missionário</option>'
                + '<option value="40">Obreiro</option>'
                + '<option value="36">Pastor</option>'
                + '<option value="50">Pastor Presidente</option>'
                + '<option value="46">Pregador</option>'
                + '<option value="37">Presbítero</option>'
                + '<option value="56">Professor de Escola Biblica</option>'
                + '<option value="66">Teologo</option>'
                + '</select>'
                + '</div>'
                + '<div class="col-md-12">'
                + '<input type="text" class="form-control input-lg" name="email_ref[]" placeholder="E-mail:">'
                + '</div>'
                + '</div>';
        
            $('.add-referencias').append(inputs_ref); 
            conta_ref ++;
        });
        
        $('body').on('click', '#curso_teologia', function() {
            
            if ($(this).prop('checked')) {
                
                $("input[name=origem]").val($("#help_link").val()+' com curso de teologia');

            } else {
                
                $("input[name=origem]").val($("#help_link").val());

            }

        });         
        
    });
    
});

        