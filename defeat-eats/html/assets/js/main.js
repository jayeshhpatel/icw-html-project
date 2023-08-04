/*** Main Header */
if ($('.main-header').length) {
    $(".toggle-btn").click(function(t) {
        $(".main-header .collapse-menu").toggleClass("open");
        $(this).toggleClass('toggle');
    });

    $(window).scroll(function () {
        if (jQuery(this).scrollTop() > 10) {
            $(".main-header").addClass("fixed-header");
        } else {
            $(".main-header").removeClass("fixed-header");
        }
    });
}
/* End */