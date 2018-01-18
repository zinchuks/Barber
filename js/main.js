/*---------banner-slider---------------*/
$('.banner-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
});


$('.clients-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
});

/*---------forms----------------*/
setTimeout(function () {
    $('.entry-select').styler({
        selectPlaceholder: 'Services',
    });
}, 100)


setTimeout(function () {
    $('.barber-selection').styler({
        selectPlaceholder: 'Barber',
    });
}, 100)

$(function () {
    $("#datepicker").datepicker({
        showWeek: true,
        firstDay: 1
    });
});

/*---------menu---------------*/
var $menu = $(".menu"),
    countMenuOffset = function () {
        return $menu.offset().top;
    },
    menuOffset = countMenuOffset();

$(window).resize(function () {
    countMenuOffset();
});

$(window).scroll(function () {
    if ($(this).scrollTop() >= menuOffset && !$menu.hasClass("fixed")) {
        $menu.addClass('fixed');
    } else if ($(this).scrollTop() <= menuOffset && $menu.hasClass("fixed")) {
        $menu.removeClass('fixed');
    };
});
/*---------slow---------------*/
$("[href^='#']").click(function () {
    var href = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(href).offset().top
    });
    return false;
});
/*-----------animation------------*/
var countWindowHeight = function () {
        return $(window).height();
    },
    windowHeight = countWindowHeight();

$(window).resize(function () {
    countWindowHeight();
});
$(window).scroll(function () {
    var sections = $('.scroll-shows');
    for (let i = 0, section; section = sections[i]; i++) {
        let $section = $(section),
            sectionOffsetTop = $section.offset().top,
            windowScroll = $(window).scrollTop() + (windowHeight / 2);
        if (windowScroll >= sectionOffsetTop) {
            $section.children('.container ,.gallery-photos').addClass('shows');
        }
    }

});
/*-----------search------------*/
$(".fa-search").click(function () {
    $(".search").addClass("expand");
});

/*-----------Data------------*/
$( function() {
    $( "#datepicker" ).datepicker({
      showWeek: true,
      firstDay: 1
    });
  } );