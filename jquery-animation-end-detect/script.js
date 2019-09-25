$(document).ready(function () {

    $('button').click(function () {
        $('.box').addClass('elementToFadeInAndOut')
            .on("animationend",
                function () {
                    $('.box').removeClass("elementToFadeInAndOut");
                });
    });

});
