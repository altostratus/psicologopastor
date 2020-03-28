function atualizaContador() {
    var tt = dt.split(',');
    var hoje = new Date();
    //alert(tt + '/n' + hoje);
    var futuro = new Date(parseInt(tt[0]), parseInt(tt[1]), parseInt(tt[2]), parseInt(tt[3]), parseInt(tt[4]), parseInt(tt[5]));
    var ss = parseInt((futuro - hoje) / 1000);
    var mm = parseInt(ss / 60);
    var hh = parseInt(mm / 60);
    var dd = parseInt(hh / 24);
    ss = ss - (mm * 60);
    mm = mm - (hh * 60);
    hh = hh - (dd * 24);
    var hoas = '',
        minn = '',
        seec = '';
    hoas = (toString(hh).length) ? hh : 00;
    minn = (toString(mm).length) ? mm : 00;
    seec = ss;

    if (hh + mm + ss > 0) {
        $(".hours").find('em').html(hoas);
        $(".mins").find('em').html(minn);
        $(".secs").find('em').html(seec);
        setTimeout(atualizaContador, 1000);
    } else {
        setTimeout(atualizaContador, 1000);
    }
}

atualizaContador();