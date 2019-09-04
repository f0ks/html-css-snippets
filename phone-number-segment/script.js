(function () {
    'use strict';

    $(function () {

        $('.phone__segment').keyup(function (e) {
            var $input = $(this);
            if ($input.val().length === 0 && e.which === 8) {
                var prevInput = $input.prevAll('.phone__segment')[0];
                if (prevInput) prevInput.focus();
            } else if ($input.val().length >= parseInt($input.attr("maxlength"))) {
                var nextInput = $input.nextAll('.phone__segment')[0];
                if (nextInput) nextInput.focus();
            }
        });

    });


})();

