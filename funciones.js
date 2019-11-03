$(document).ready(function(){
    $('.ir-arriba').click(function(){
        $('body, html').animate({
            scrollTop: '0px'
        }, 600);
    });

    $(window).scroll(function(){
        if ( $(this).scrollTop() > 0 ){
            $('.ir-arriba').slideDown(300);
        } else {
            $('.ir-arriba').slideUp(300);
        }
    });
});

$(document).ready(function(){
    $('#catalogo').click(function(){
        $('body, html').animate({
            scrollTop: '630px'
        }, 400);
    });
});

$(document).ready(function(){
    $('#inicio').click(function(){
        window.location.href = "index.html";
    });
});

$(document).ready(function(){
    $('#btnLogin').click(function(){
        window.location.href = "index.html";
    });
});