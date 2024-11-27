console.log("jay-admin-JS");

var $ = jQuery.noConflict();
jQuery(document).ready(function ($) {
    if ($('.splide').length) {
        console.log("jay-splide");

        $('.splide').each(function () {
            new Splide(this).mount();
        });

        setTimeout(function () {
            console.log("jay-splide.");
        }, 2000);
    }
});