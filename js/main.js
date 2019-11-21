var elTop = $(window).scrollTop();

if (elTop <= 10) {
    $('.header').removeClass('.header_act');
}

console.log(elTop)


$(".box_sliddrrr > div:gt(0)").hide();

setInterval(function() {
    $('.box_sliddrrr > div:first')
        .fadeOut(1000)
        .next(3000)
        .fadeIn(1000)
        .end(3000)
        .appendTo('.box_sliddrrr');
}, 5000);


(function() {
    // Add event listener
    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector("#parallax");
    // Magic happens here
    function parallax(e) {
        let _w = window.innerWidth / 2;
        let _h = window.innerHeight / 2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
        let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
        let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        // console.log(x);
        elem.style.backgroundPosition = x;
    }

})();

$('.btm_mn_resp').click(function() {
    $('.menu').toggleClass('active').siblings().toggleClass('active');
    $('.cntrl_menu').toggleClass('active_menu');
    $('.blrr').toggleClass('act_blrr');
});





//menu pegante

$(window).on("scroll", function() {
    $suo = $(window).scrollTop();
    $ancho1 = $(window).width();

    if ($ancho1 > 700) {
        if ($suo > 0) {

            $(".header").css({
                "background-color": "rgba(255,255,255,.8)"
            });

            $(".logo").css({
                "width": "150px"
            });


            $(".menu > .item_menu").css({
                "padding": "1.5em .5em",
                "color": "black"
            });

        } else {
            $(".header").css({
                "background-color": "rgba(255,255,255,0.1)"
            });

            $(".logo").css({
                "width": "260px"
            });
            $(".menu > .item_menu").css({
                "padding": "2.5em  1em",
                "color": "white"
            });
        }

    } else {
        $(".header").css({
            "background-color": "rgba(255,255,255,1)",
            "height": "60px"
        });
        $(".menu > .item_menu").css({
            "padding": "1em",
            "color": "white"
        });


    }

});

$(window).on("scroll", function() {
    function parallax(elemento, velocidad) {

        $(elemento).css({
            'top': -($(window).scrollTop() * velocidad + 300) + 'px'
        });
    };

    parallax('.img_pallx1', -.2);

});


$('.btm_formmmmm').click(function() {
    $('.ventana_formmmm').addClass('form_active');
});
$('.btm_close_vntnt').click(function() {
    $('.ventana_formmmm').removeClass('form_active');
});